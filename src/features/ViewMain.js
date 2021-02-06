import React from 'react';
import useViewTemplate from '../hooks/useViewTemplate';
import ViewMainToolbar from './ViewMainToolbar';
import ViewMainContentRouter from './ViewMainContentRouter';
import { view } from '@risingstack/react-easy-state';
import useLogMessage from '../hooks/useLogMessage';
import useFadeIn from '../hooks/useFadeIn';

function ViewMain() {
    const templates = useViewTemplate();
    const logMessage = useLogMessage();
    const { Fader } = useFadeIn();

    logMessage('ViewMain', 'rendering');
    return <Fader>{templates.withAppBarViewTemplate(<ViewMainContentRouter />, <ViewMainToolbar />)}</Fader>;
}

export default view(ViewMain);
