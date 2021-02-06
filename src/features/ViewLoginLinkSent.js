import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { view } from '@risingstack/react-easy-state';
import useLocalisation from '../hooks/useLocalisation';
import LocalisationViewLogin from '../localisations/LocalisationViewLogin';
import TextField from '@material-ui/core/TextField';
import useLoginWithEmailLink from '../hooks/useLoginWithEmailLink';
import useFadeIn from '../hooks/useFadeIn';
import Button from '@material-ui/core/Button';
import useAppStore from '../hooks/useAppStore';

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
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
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
    linkInput: {
        flexBasis: '300px',
        alignContent: 'center'
    },
}));

function ViewLoginLinkSent() {
    const classes = useStyles();
    const { appStore, loginFlowStates } = useAppStore();
    const { Fader } = useFadeIn();
    const { signInWithEmailLink } = useLoginWithEmailLink();
    const ViewLoginLinkSentPreface = useLocalisation(LocalisationViewLogin, 'ViewLoginLinkSentPreface');
    const ViewLoginLinkFieldLabel = useLocalisation(LocalisationViewLogin, 'ViewLoginLinkFieldLabel');
    const ViewLoginLinkPasteError = useLocalisation(LocalisationViewLogin, 'ViewLoginLinkPasteError');
    const ContactUs = useLocalisation(LocalisationViewLogin, 'ContactUs');
    const RetrySentLink = useLocalisation(LocalisationViewLogin, 'RetrySentLink');
    const [loginLink, setLoginLink] = useState('');
    const [error, setError] = useState(false);

    React.useEffect(() => {
        if(loginLink.length > 0) signIn();
    });

    const signIn = async () => {
        const email = appStore.loginState.email;

        try {
            await signInWithEmailLink(email, loginLink);

            appStore.loginState = {
                loginFlowState: loginFlowStates.READY,
                email: ''
            };

        } catch {
            console.log('err')
            setError(true);
            appStore.loginState.email = email;
        }
    }

    const retry = () => {
        appStore.loginState.loginFlowState = loginFlowStates.READY;
    }

    return (
        <div className={classes.view}>
            <ViewLoginLinkSentPreface />
            <div className={classes.content}>
                <div className={classes.centeredItem}>
                    <TextField
                        className={classes.linkInput}
                        label={<ViewLoginLinkFieldLabel />}
                        defaultValue={''}
                        onChange={(e) => setLoginLink(e.target.value)}
                        color='secondary'
                    />
                </div>

                <div className={classes.centeredItem}>
                    <Button
                        className={classes.button}
                        onClick={() => retry()}
                    >
                        <RetrySentLink />
                    </Button>
                </div>

                <Fader>
                    <div className={classes.centeredItem} style={{ textAlign: 'center', visibility: error ? 'inherit' : 'hidden', color: 'red' }}>
                        <div style={{ display: 'inline' }}>
                            <ViewLoginLinkPasteError /><ContactUs />.
                        </div>
                    </div>
                </Fader>
            </div>
        </div>

    );
}

export default view(ViewLoginLinkSent);