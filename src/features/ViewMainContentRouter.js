import React, { lazy, Suspense } from 'react';
import { view } from '@risingstack/react-easy-state';
import ViewMainContentLoading from './ViewMainContentLoading';
import useLogMessage from '../hooks/useLogMessage';
import ViewMainContentWelcome from './ViewMainContentWelcome';
import ViewMainContentLocationNotFound from './ViewMainContentLocationNotFound';
import ViewMainContentGeolocationFailed from './ViewMainContentGeolocationFailed';
import useFadeIn from '../hooks/useFadeIn';
import useAppStore from '../hooks/useAppStore';

const ViewMainContentPostList = lazy(() => import('./ViewMainContentPostList'));

function ViewMainContentRouter() {
    const { appStore, viewMainStates } = useAppStore();
    const logMessage = useLogMessage();
    const { Fader } = useFadeIn();

    const loading = appStore.viewMainState.isLoading;
    const screen = appStore.viewMainState.screen;

    const contentViews = {};
    contentViews[[loading === true, true]] = <Fader><ViewMainContentLoading /></Fader>;
    contentViews[[loading === false, screen === viewMainStates.WELCOME]] = <Fader><ViewMainContentWelcome /></Fader>;
    contentViews[[loading === false, screen === viewMainStates.POST_LIST]] = <ViewMainContentPostList />;
    contentViews[[loading === false, screen === viewMainStates.LOCATION_NOT_FOUND]] = <Fader><ViewMainContentLocationNotFound /></Fader>;
    contentViews[[loading === false, screen === viewMainStates.GEOLOCATION_FAILED]] = <Fader><ViewMainContentGeolocationFailed /></Fader>;

    logMessage('ViewMainContentRouter', 'rendering (screen: ' + appStore.viewMainState.screen + ", isLoading: " + appStore.viewMainState.isLoading + ")");
    return (
        <Suspense fallback={<div></div>}>
            {contentViews[[true, true]]}
        </Suspense>
    );
};

export default view(ViewMainContentRouter);