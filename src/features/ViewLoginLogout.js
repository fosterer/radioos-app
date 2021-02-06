import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { view } from '@risingstack/react-easy-state';
import Button from '@material-ui/core/Button';
import { useAuth } from 'reactfire';
import useLocalisation from '../hooks/useLocalisation';
import LocalisationViewLogin from '../localisations/LocalisationViewLogin';
import useAppStore from '../hooks/useAppStore';

const useStyles = makeStyles(theme => ({
    buttonsStack: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    button: {
        margin: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    },
}));

function ViewLoginLogout() {
    const classes = useStyles();
    const auth = useAuth();
    const { appStore } = useAppStore();
    const Logout = useLocalisation(LocalisationViewLogin, 'logout');

    async function signOut() {
        await auth.signInAnonymously();
    };

    return (
        <div className={classes.buttonsStack}>
            <Button
                disabled={appStore.appState.processingData}
                onClick={() => signOut()}
                className={classes.button}
            >
                <Logout />
            </Button>
        </div>
    );

}

export default view(ViewLoginLogout);