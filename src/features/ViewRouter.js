import React, {lazy, Suspense } from 'react';
import { view } from '@risingstack/react-easy-state';
import ViewLoading from './ViewLoading';
import useAppStore from '../hooks/useAppStore';
import useLogMessage from '../hooks/useLogMessage';
import ViewServicesNotAvailableDialog from './ViewServicesNotAvailable';
import ViewDialogPresenter from './ViewDialogPresenter';
import ViewLoginConfirmEmail from './ViewLoginConfirmEmail';

const ViewMain = lazy(() => import('./ViewMain'));
const ViewHelp = lazy(() => import('./ViewHelp'));
const ViewSettings = lazy(() => import('./ViewSettings'));

function ViewRouter() {
    const { appStore, appViews } = useAppStore();
    const logMessage = useLogMessage();

    const view = appStore.appState.appView;

    const views = {};
    views[view === appViews.STARTING] = <ViewLoading />;
    views[view === appViews.RELOADING] = <ViewLoading fadeIn />;
    views[view === appViews.SERVICES_NOT_AVAILABLE] = <ViewDialogPresenter><ViewServicesNotAvailableDialog /></ViewDialogPresenter>;
    views[view === appViews.LINK_SIGNIN_CONFIRM_EMAIL] = <ViewDialogPresenter><ViewLoginConfirmEmail /></ViewDialogPresenter>;
    views[view === appViews.MAIN] = <ViewMain />;
    views[view === appViews.HELP] = <ViewHelp />;
    views[view === appViews.SETTINGS] = <ViewSettings />;

    logMessage('ViewRouter', 'rendering (view: ' + appStore.appState.appView + ')');
    return (
        <Suspense fallback={<div></div>}>
            {views[true]}
        </Suspense>
    );
}

export default view(ViewRouter);