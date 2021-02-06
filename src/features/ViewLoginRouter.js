import React from 'react';
import { view } from '@risingstack/react-easy-state';
import useLogMessage from '../hooks/useLogMessage';
import useFadeIn from '../hooks/useFadeIn';
import { useUser } from 'reactfire';
import ViewLoginEnterEmail from './ViewLoginEnterEmail';
import ViewLoginLogout from './ViewLoginLogout';
import ViewLoginLinkSent from './ViewLoginLinkSent';
import useAppStore from '../hooks/useAppStore';

function ViewLoginRouter() {
    const logMessage = useLogMessage();
    const { Fader } = useFadeIn();
    const user = useUser();
    const { appStore, loginFlowStates } = useAppStore();

    const views = {};
    views[user.isAnonymous === true && appStore.loginState.loginFlowState === loginFlowStates.READY] = <ViewLoginEnterEmail />;
    views[user.isAnonymous === false && appStore.loginState.loginFlowState === loginFlowStates.READY] = <ViewLoginLogout />;
    views[appStore.loginState.loginFlowState === loginFlowStates.LINK_SENT] = <ViewLoginLinkSent />;

    logMessage('ViewLoginRouter', 'rendering');
    return (<Fader>{views[true]}</Fader>);

}

export default view(ViewLoginRouter);