import React, {lazy, Suspense } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { view } from '@risingstack/react-easy-state';
import { FirebaseAppProvider } from 'reactfire';
import AppThemeProvider from "./providers/Theme";
import SnackbarNotificationProvider from './providers/SnackbarNotification';
import useAppConfig from './hooks/useAppConfig';
import ViewLoading from "./features/ViewLoading";
import * as Sentry from '@sentry/browser';
import LocalisationProvider, { browserLanguage } from "./providers/Localisation";

const ViewShell = lazy(() => import('./features/ViewShell'));

const isProd = process.env.NODE_ENV && process.env.NODE_ENV === "production";
if (isProd) Sentry.init({ dsn: "https://509d7ae0c3f046aebdb129277a2d4459@o377553.ingest.sentry.io/5199819" });

const useStyles = makeStyles(() => ({
    app: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column'
    },
}));

function App() {
    const classes = useStyles();
    const appConfig = useAppConfig();

    return (
        <div id="app" className={classes.app}>
            <AppThemeProvider>
                <FirebaseAppProvider firebaseConfig={appConfig.firebase}>
                    <LocalisationProvider value={browserLanguage}>
                        <SnackbarNotificationProvider>
                            <Suspense fallback={<ViewLoading />}>
                                <ViewShell />
                            </Suspense>
                        </SnackbarNotificationProvider>
                    </LocalisationProvider>
                </FirebaseAppProvider>
            </AppThemeProvider>
        </div>
    );
}

export default view(App);