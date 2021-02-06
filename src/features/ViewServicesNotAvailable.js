import React from "react";
import { view } from '@risingstack/react-easy-state';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LinearProgress from '@material-ui/core/LinearProgress';
import useLocalisation from "../hooks/useLocalisation";
import LocalisationApp from "../localisations/LocalisationApp";

const useStyles = makeStyles(theme => ({
    content: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'flex-start',
        justifyItems: 'flex-start',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    progressWrapper: {
        margin: theme.spacing(3),
        width: '90%',
        '& > * + *': {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
    },
}));

function ViewServicesNotAvailableDialog() {
    const classes = useStyles();
    const ServicesNotAvailable = useLocalisation(LocalisationApp, 'servicesNotAvailable');
    const TryingToConnect = useLocalisation(LocalisationApp, 'tryingToConnect');

    return (
        <div className={classes.content}>
            <Typography variant='h4' style={{ fontWeight: 'bolder' }}>radioos.app</Typography>
            <Typography variant='body1' style={{ marginTop: '10px' }} >
                <ServicesNotAvailable />
            </Typography>
            <div className={classes.progressWrapper}>
                <LinearProgress style={{ height: 10 }} color="secondary" />
            </div>
            <Typography variant='caption'>
                <TryingToConnect />
            </Typography>
        </div>
    );
}

export default view(ViewServicesNotAvailableDialog);