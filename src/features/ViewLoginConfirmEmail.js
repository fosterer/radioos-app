import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { view } from '@risingstack/react-easy-state';
import isEmail from 'validator/es/lib/isEmail';
import useLocalisation from '../hooks/useLocalisation';
import LocalisationViewLogin from '../localisations/LocalisationViewLogin';
import TextField from '@material-ui/core/TextField';
import useLoginWithEmailLink from '../hooks/useLoginWithEmailLink';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import useAppStore from '../hooks/useAppStore';
import useFadeIn from '../hooks/useFadeIn';
import { getAppUrl } from '../hooks/useAppConfig';

const useStyles = makeStyles(theme => ({
    view: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        textAlign: 'justify'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'flex-start',
        justifyItems: 'flex-start',
        alignContent: 'center',
        padding: theme.spacing(1)
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
    centeredItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
    },
    emailInput: {
        flexBasis: '300px'
    },
}));

function ViewLoginConfirmEmail() {
    const classes = useStyles();
    const { appStore, appViews } = useAppStore();
    const { Fader } = useFadeIn();
    const EmailPlaceholder = useLocalisation(LocalisationViewLogin, 'EmailPlaceholder');
    const EmailValidation = useLocalisation(LocalisationViewLogin, 'EmailValidation');
    const Confirm = useLocalisation(LocalisationViewLogin, 'Confirm');
    const ViewLoginConfirmEmailPreface = useLocalisation(LocalisationViewLogin, 'ViewLoginConfirmEmailPreface');
    const ViewLoginConfirmEmailError = useLocalisation(LocalisationViewLogin, 'ViewLoginConfirmEmailError');
    const Cancel = useLocalisation(LocalisationViewLogin, 'Cancel');
    const [email, setEmail] = useState('');
    const [validated, setValidated] = useState(false);
    const [submitClicked, setSubmitClicked] = useState(false);
    const [error, setError] = useState(false);
    const { signInWithEmailLink } = useLoginWithEmailLink();

    const submit = async () => {
        setValidated(true);
        if (isEmail(email)) {
            try {
                const link = window.location.href;
                setSubmitClicked(true);
                await signInWithEmailLink(email, link);
                window.location.replace(getAppUrl());
            } catch {
                setSubmitClicked(false);
                setError(true);
            }
        };
    };

    const cancel = () => {
        appStore.appState.appView = appViews.MAIN;
    };

    return (
        <div className={classes.view}>
            <Typography variant='h4' style={{ fontWeight: 'bolder', alignSelf: 'center' }}>radioos.app</Typography>
            <div className={classes.content}>
                <div className={classes.centeredItem} style={{ textAlign: 'center', fontSize: 'medium' }}>
                    <ViewLoginConfirmEmailPreface />
                </div>

                <div className={classes.centeredItem}>
                    <TextField
                        disabled={submitClicked}
                        autoFocus
                        className={classes.emailInput}
                        type={'email'}
                        label={<EmailPlaceholder />}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        color='secondary'
                        error={validated && !isEmail(email)}
                        helperText={validated && !isEmail(email) ? <EmailValidation /> : ''}
                    />
                </div>

                <div className={classes.centeredItem}>
                    <Button
                        disabled={submitClicked}
                        className={classes.button}
                        onClick={() => cancel()}
                    >
                        <Cancel />
                    </Button>

                    <Button
                        disabled={submitClicked}
                        className={classes.button}
                        onClick={() => submit()}
                    >
                        <Confirm />
                    </Button>
                </div>
                <Fader>
                    <div className={classes.centeredItem} style={{ textAlign: 'center', visibility: error ? 'inherit' : 'hidden', color: 'red' }}>
                        <ViewLoginConfirmEmailError />
                    </div>
                </Fader>
            </div>
        </div>
    )
}

export default view(ViewLoginConfirmEmail);