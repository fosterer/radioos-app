import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import { view } from '@risingstack/react-easy-state';
import useLogMessage from "../hooks/useLogMessage";
import useLocalisation from "../hooks/useLocalisation";
import LocalisationViewMainContentWelcome from "../localisations/LocalisationViewMainContentWelcome";

const useStyles = makeStyles(theme => ({
    contentBox: {
        padding: theme.spacing(2),
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    },
    img: {
        margin: theme.spacing(1),
        marginTop: 30,
        height: 100,
    }
}));

function ViewMainContentWelcomeStart() {
    const classes = useStyles();
    const WelcomeHeading = useLocalisation(LocalisationViewMainContentWelcome, 'welcomeHeading');
    const StartNudge = useLocalisation(LocalisationViewMainContentWelcome, 'startNudge');
    const logMessage = useLogMessage();

    logMessage('ViewMainContentWelcomeStart', 'rendering');
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <div id="start-content-box" className={classes.contentBox}>
                <img alt="" className={classes.img} src="/logo.svg" />
                <Typography variant="h4" style={{ fontWeight: 'bolder' }}>
                    radioos.app
                </Typography>
                <WelcomeHeading />
                <StartNudge />
            </div>
        </div>
    );
}

export default view(ViewMainContentWelcomeStart);