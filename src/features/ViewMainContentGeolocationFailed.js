import React from 'react';
import { view } from '@risingstack/react-easy-state';
import { makeStyles } from '@material-ui/core/styles';
import useLogMessage from '../hooks/useLogMessage';
import Typography from '@material-ui/core/Typography';
import useLocalisation from '../hooks/useLocalisation';
import LocalisationViewMain from '../localisations/LocalisationViewMain';


const useStyles = makeStyles(theme => ({
    contentBox: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: theme.spacing(2)
    },
}));

function ViewMainContentGeolocationFailed() {
    const logMessage = useLogMessage();
    const classes = useStyles();
    const GeoFailed = useLocalisation(LocalisationViewMain, 'geolocationFailed');

    logMessage('ViewMainContentGeolocationFailed', 'rendering');
    return (
        <div className={classes.contentBox}>
            <Typography>
                <strong>
                    <GeoFailed />
                </strong>
            </Typography>
        </div>
    );
}

export default view(ViewMainContentGeolocationFailed);