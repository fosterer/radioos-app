import React from 'react';
import ViewRouter from './ViewRouter';
import { makeStyles } from "@material-ui/styles";
import { view } from '@risingstack/react-easy-state';
import useAppBootstrapper from '../hooks/useAppBootstrapper';
import useLogMessage from '../hooks/useLogMessage';

const useStyles = makeStyles(theme => ({
    screenBackground: {
        backgroundColor: theme.palette.background.default
    }
}));

function ViewShell() {
    const bootstrapper = useAppBootstrapper();
    const classes = useStyles();
    const logMessage = useLogMessage();

    React.useEffect(() => {
        bootstrapper.bootstrap();
        document.body.className = classes.screenBackground;
    });

    logMessage('Shell', 'rendering');
    return (<ViewRouter />);
}

export default view(ViewShell);