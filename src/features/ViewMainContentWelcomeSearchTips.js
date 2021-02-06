import React from "react";
import { view } from '@risingstack/react-easy-state';
import { makeStyles } from '@material-ui/core/styles';
import useLogMessage from "../hooks/useLogMessage";
import useLocalisation from "../hooks/useLocalisation";
import LocalisationViewMainContentWelcome from "../localisations/LocalisationViewMainContentWelcome";

const useStyles = makeStyles(theme => ({
    contentBox: {
        padding: theme.spacing(1),
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        textAlign: 'center'
    }
}));

function ViewMainContentWelcomeSearchTips() {
    const classes = useStyles();
    const Tips = useLocalisation(LocalisationViewMainContentWelcome, 'searchTips');
    const logMessage = useLogMessage();

    logMessage('ViewMainContentWelcomeSearchTips', 'rendering');
    return (
        <div className={classes.contentBox}>
            <Tips />
        </div>
    );
}

export default view(ViewMainContentWelcomeSearchTips);