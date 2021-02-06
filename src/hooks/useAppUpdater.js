import React from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import useAppConfig from './useAppConfig';
import Button from '@material-ui/core/Button';
import logMessage from '../services/logMessage';
import useLocalisation from './useLocalisation';
import LocalisationApp from '../localisations/LocalisationApp';

function useAppUpdater() {
    const config = useAppConfig();
    const { enqueueSnackbar } = useSnackbar();
    const UpdatePending = useLocalisation(LocalisationApp, 'updatePending');

    function watchForUpdates() {
        const setUpdateCheckTimer = () => {
            return setTimeout(async () => {
                logMessage('useAppUpdater()', 'checking for app updates...');
                const updateDetected = await checkForUpdate();
                if (updateDetected) {
                    showUpdateAvailableNotification();
                }
                else {
                    setUpdateCheckTimer(); //set another one
                }

            }, 59 * 1000)
        }
        setUpdateCheckTimer(); //start
    }

    function showUpdateAvailableNotification() {
        const action = () => (< Button onClick={() => updateApp()} >Restart</Button >);
        enqueueSnackbar(
            <UpdatePending />,
            {
                variant: 'info',
                persist: true,
                action
            },
        );
    }

    async function checkForUpdate() {

        if (config.version !== 'dev' && navigator.onLine) {
            try {
                const remoteConfigResponse = await getRemoteConfig();
                const deployedVersion = remoteConfigResponse.version;

                if (config.version !== deployedVersion) {
                    logMessage('checkForUpdate()', 'app update available');
                    return true;
                }
                else {
                    return false;
                }
            } catch (error) {
                return false;
            }
        }
        else {
            return false;
        }
    }

    async function updateApp() {
        if ('serviceWorker' in navigator) {
            const registration = await navigator.serviceWorker.ready;
            await registration.unregister();
            window.location.reload();
        }
        else {
            window.location.reload();
        }
    }

    async function getRemoteConfig() {
        const projectid = config.firebase.projectId;
        const configBaseUrl = 'https://firebasestorage.googleapis.com/v0/b/' + projectid + '.appspot.com/o/_appConfig%2FappConfig.json';

        const configResponse = await axios.get(configBaseUrl);
        const configData = await axios.get(configBaseUrl + '?alt=media&token=' + configResponse.data.downloadTokens);

        return configData.data;
    }

    return { checkForUpdate, updateApp, watchForUpdates };
}

export default useAppUpdater;
