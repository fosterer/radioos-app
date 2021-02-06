import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import useLogMessage from '../hooks/useLogMessage';

const useStyles = makeStyles(theme => ({
    progressWrapper: {
        marginTop: theme.spacing(1),
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

function ViewMainContentLoading() {
    const logMessage = useLogMessage();
    const classes = useStyles();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    });

    logMessage('ViewMainContentLoading', 'rendering');
    return (
        <div className={classes.progressWrapper}>
            <LinearProgress style={{ height: 10 }} color="secondary" />
        </div>
    );
}

export default ViewMainContentLoading;
