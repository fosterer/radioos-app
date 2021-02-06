import React from "react";
import { view } from '@risingstack/react-easy-state';
import ViewMainContentWelcomeStart from "./ViewMainContentWelcomeStart";
import ViewMainContentWelcomeSearchTips from "./ViewMainContentWelcomeSearchTips";
import useLogMessage from "../hooks/useLogMessage";
import useFadeIn from "../hooks/useFadeIn";
import useAppStore from "../hooks/useAppStore";

function ViewMainContentWelcome() {
    const { appStore } = useAppStore();
    const logMessage = useLogMessage();
    const { Fader } = useFadeIn();

    const focused = appStore.viewMainState.searchBoxFocused;

    const views = {};
    views[!focused] = <Fader><ViewMainContentWelcomeStart /></Fader>;
    views[focused] = <Fader><ViewMainContentWelcomeSearchTips /></Fader>;

    logMessage('ViewMainContentWelcome', 'rendering');
    return (
        views[true]
    );
}

export default view(ViewMainContentWelcome);