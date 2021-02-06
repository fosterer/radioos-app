import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { view } from '@risingstack/react-easy-state';
import Button from '@material-ui/core/Button';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import useLocalisation from '../hooks/useLocalisation';
import LocalisationViewLogin from '../localisations/LocalisationViewLogin';
import TextField from '@material-ui/core/TextField';
import isEmail from 'validator/es/lib/isEmail';
import useLoginWithEmailLink from '../hooks/useLoginWithEmailLink';
import useAppStore from '../hooks/useAppStore';
import useFadeIn from '../hooks/useFadeIn';

const useStyles = makeStyles(theme => ({
    view: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        textAlign: 'justify'
    },
    content: {
        paddingTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'flex-start',
        justifyItems: 'flex-start',
        alignContent: 'center',
    },
    centeredItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: theme.spacing(1)
    },
    noteItem: {
        fontSize: '0.9em',
        paddingTop: theme.spacing(2)
    },
    emailInput: {
        flexBasis: '300px',
        alignContent: 'center'
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        margin: theme.spacing(1),
        paddingLeft: '12px',
        paddingRight: theme.spacing(1),
    },
    linkAlikeButton: {
        font: 'inherit',
        color: 'inherit',
        background: 'none',
        border: 'none',
        margin: '0',
        padding: '0',
        cursor: 'pointer',
        outline: '0'
    },
}));

function ViewLoginEnterEmail() {
    const classes = useStyles();
    const { appStore, appViews, loginFlowStates } = useAppStore();
    const { Fader } = useFadeIn();
    const ViewLoginEnterEmailPreface = useLocalisation(LocalisationViewLogin, 'ViewLoginEnterEmailPreface');
    const ViewLoginEnterEmailPrivacyNote = useLocalisation(LocalisationViewLogin, 'ViewLoginEnterEmailPrivacyNote');
    const EmailPlaceholder = useLocalisation(LocalisationViewLogin, 'EmailPlaceholder');
    const EmailValidation = useLocalisation(LocalisationViewLogin, 'EmailValidation');
    const SendButtonText = useLocalisation(LocalisationViewLogin, 'sendEmailLink');
    const SendEmailFailed = useLocalisation(LocalisationViewLogin, 'SendEmailFailed');
    const ContactUs = useLocalisation(LocalisationViewLogin, 'ContactUs');
    const { sendSignInLinkToEmail } = useLoginWithEmailLink();
    const [email, setEmail] = useState('');
    const [validated, setValidated] = useState(false);
    const [submitClicked, setSubmitClicked] = useState(false);
    const [error, setError] = useState(false);

    const submit = async () => {
        setValidated(true);
        if (isEmail(email)) {
            try {
                setSubmitClicked(true);
                await sendSignInLinkToEmail(email);
                appStore.loginState = {
                    loginFlowState: loginFlowStates.LINK_SENT,
                    email: email
                }

            } catch {
                setError(true);
            }
        };
    };

    const contactSupport = () => {
        appStore.appState.appView = appViews.HELP;
    };

    return (
        <div className={classes.view}>
            <ViewLoginEnterEmailPreface />
            <div className={classes.content}>

                <div className={classes.centeredItem}>
                    <TextField
                        disabled={submitClicked}
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
                        startIcon={<EmailOutlinedIcon />}
                        onClick={() => submit()}
                    >
                        <SendButtonText />
                    </Button>
                </div>

                <Fader>
                    <div style={{ visibility: error ? 'inherit' : 'hidden' }} className={classes.centeredItem}>
                        <div style={{ display: 'inline', color: 'red', fontSize: '0.9em' }}>
                            <SendEmailFailed /><button className={classes.linkAlikeButton} onClick={() => contactSupport()}><ContactUs />.</button>
                        </div>
                    </div>
                </Fader>

                <div className={classes.noteItem}>
                    <ViewLoginEnterEmailPrivacyNote />
                </div>
            </div>
        </div >
    );
}

export default view(ViewLoginEnterEmail);



