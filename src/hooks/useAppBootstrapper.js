import useNetworkStatusListener from "./useNetworkStatusListener";
import useAppUpdater from "./useAppUpdater";
import { useAuth, useStorage, useFirestore, useUser } from "reactfire";
import getUserAreaPoint from "../services/getUserAreaPoint";
import logMessage from "../services/logMessage";
import * as Sentry from '@sentry/browser';
import useAppStore from "./useAppStore";
import { useContext } from "react";
import { LocalisationContext } from "../providers/Localisation";
import useLoginWithEmailLink from "./useLoginWithEmailLink";
import useLocalStorage from './useLocalStorage';
import isEmail from 'validator/es/lib/isEmail';

function useAppBootstrapper() {
    const { appStore, appStates, appViews } = useAppStore();
    const networkListener = useNetworkStatusListener();
    const appUpdater = useAppUpdater();
    const auth = useAuth();
    const currentUser = useUser();
    const appLanguage = useContext(LocalisationContext);
    const { signInWithEmailLink } = useLoginWithEmailLink();
    const storage = useLocalStorage();

    const signInResults = {
        NOT_A_SIGNIN_LINK: 'NOT_A_SIGNIN_LINK',
        SIGNED_IN: 'SIGNED_IN',
        NO_EMAIL_IN_STORAGE: 'NO_EMAIL_IN_STORAGE',
        SIGNIN_ERROR: 'SIGNIN_ERROR'
    }

    useFirestore();
    useStorage();

    async function bootstrap() {
        try {
            await processBootstrapping();
        } catch (error) {
            setTimeout(() => window.location.reload(), 10 * 1000);
            logMessage('Shell', 'trying to connect...')
            appStore.appState = {
                ...appStore.appState,
                appView: appViews.SERVICES_NOT_AVAILABLE,
            }
        }
    }

    async function processBootstrapping() {
        auth.languageCode = appLanguage;
        if (appStore.appState.appState === appStates.IS_STARTING) {
            logMessage('Shell', 'processStartupBootstrapping()');
            await processStartupBootstrapping();
        }
        else {
            logMessage('Shell', 'processUserChangeBootstrapping()');
            await processRuntimeBootstrapping();
        }
    }

    async function processStartupBootstrapping() {
        await bootstrapApplication();
        const signInResult = await signInUserFromHref();
        const userCityLatLong = await bootstrapUser();
        watchCurrentUserProfileChanges();

        const appView = {};
        appView[signInResult === signInResults.NOT_A_SIGNIN_LINK || signInResult === signInResults.SIGNED_IN] = appViews.MAIN;
        appView[signInResult === signInResults.SIGNIN_ERROR] = appViews.LINK_SIGNIN_ERROR;
        appView[signInResult === signInResults.NO_EMAIL_IN_STORAGE] = appViews.LINK_SIGNIN_CONFIRM_EMAIL;

        appStore.appState = {
            ...appStore.appState,
            appState: appStates.IS_RUNNING,
            appView: appView[true],
            appUserAreaPoint: userCityLatLong,
        };
    }

    async function processRuntimeBootstrapping() {
        const userCityLatLong = await bootstrapUser();
        appStore.appState.appUserAreaPoint = userCityLatLong;
    }

    async function bootstrapApplication() {
        const updateAvailable = await appUpdater.checkForUpdate();
        if (updateAvailable) await appUpdater.updateApp();
        networkListener.listen();
        appUpdater.watchForUpdates();
    }

    async function signInUserFromHref() {
        const href = window.location.href;
        if (!auth.isSignInWithEmailLink(href)) {
            return signInResults.NOT_A_SIGNIN_LINK;
        };

        const email = storage.get('emailForSignIn');

        if (isEmail(email)) {
            try {
                await signInWithEmailLink(email, href);
                return signInResults.SIGNED_IN;
            } catch {
                logMessage('Shell', signInResults.SIGNIN_ERROR)
                return signInResults.SIGNIN_ERROR;
            }
        }
        else {
            return signInResults.NO_EMAIL_IN_STORAGE;
        }
    }

    async function bootstrapUser() {
        if (currentUser === null) {
            await auth.signInAnonymously();
        }
        if (currentUser !== null) {
            Sentry.configureScope((scope) => {
                scope.setUser({ "id": currentUser.uid })
            });
        }
        const userAreaPoint = await getUserAreaPoint();
        return userAreaPoint.cityLatLong;
    }

    function watchCurrentUserProfileChanges() {
        const setUserWatcher = () => {
            return setTimeout(async () => {
                await auth.currentUser.reload();
                setUserWatcher();
            }, 59 * 1000);
        }

        setUserWatcher();
    }

    return { bootstrap }
}

export default useAppBootstrapper;