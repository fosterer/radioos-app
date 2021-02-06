import React, { useState } from 'react';
import { view } from '@risingstack/react-easy-state';
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import useFeedbackMessage from '../hooks/useFeedbackMessage';
import useFadeIn from '../hooks/useFadeIn';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useLocalisation from '../hooks/useLocalisation';
import LocalisationViewFeedbackForm from '../localisations/LocalisationViewFeedbackForm';
import useAppStore from '../hooks/useAppStore';

const useStyles = makeStyles(theme => ({
    content: {
        textAlign: 'justify',
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
    },
    centeredItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: theme.spacing(1)
    },
    feedbackForm: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: theme.spacing(1)
    },
    feedbackField: {
        margin: theme.spacing(1),
    },
    submitButton: {
        margin: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        alignSelf: 'flex-end'
    },
    thanksFragment: {
        textAlign: 'center',
        paddingTop: theme.spacing(2)
    }
}));

function ViewFeedbackForm() {
    const classes = useStyles();
    const { sendFeedback } = useFeedbackMessage();
    const { appStore } = useAppStore();
    const [submitted, setSubmitted] = useState(false);
    const Validation = useLocalisation(LocalisationViewFeedbackForm, 'validation');
    const Contact = useLocalisation(LocalisationViewFeedbackForm, 'contact');
    const Message = useLocalisation(LocalisationViewFeedbackForm, 'message');
    const Submit = useLocalisation(LocalisationViewFeedbackForm, 'submit');
    const Thankyou = useLocalisation(LocalisationViewFeedbackForm, 'thanks');
    const SendError = useLocalisation(LocalisationViewFeedbackForm, 'SendError');
    const [error, setError] = useState(false);
    const { Fader } = useFadeIn();

    function Form() {
        const [feedback, setFeedback] = useState({ from: '', content: '' });
        const [validated, setValidated] = useState(false);
        const helperText = <Validation />;

        const handleSubmitButtonClick = async () => {
            setValidated(true);
            if (feedback.from.trim().length > 0 && feedback.content.trim().length > 0) {
                try {
                    appStore.appState.processingData = true;
                    await sendFeedback(feedback.from, feedback.content);
                    setSubmitted(true);
                    appStore.appState.processingData = false;
                } catch {
                    setError(true);
                    appStore.appState.processingData = false;
                }
            }
        }

        return (
            <div className={classes.feedbackForm}>
                <TextField
                    className={classes.feedbackField}
                    style={{ maxWidth: '350px' }}
                    disabled={appStore.appState.processingData}
                    id='input-from'
                    label={<Contact />}
                    value={feedback.from}
                    onChange={(e) => setFeedback({ ...feedback, from: e.target.value })}
                    color='secondary'
                    error={validated && feedback.from.length === 0 ? true : false}
                    helperText={validated && feedback.from.trim().length === 0 ? helperText : ''}
                />
                <TextField
                    className={classes.feedbackField}
                    disabled={appStore.appState.processingData}
                    id='input-content'
                    label={<Message />}
                    multiline
                    value={feedback.content}
                    onChange={(e) => setFeedback({ ...feedback, content: e.target.value })}
                    color='secondary'
                    error={validated && feedback.content.trim().length === 0 ? true : false}
                    helperText={validated && feedback.content.trim().length === 0 ? helperText : ''}
                />
                <Button
                    disabled={appStore.appState.processingData}
                    onClick={() => handleSubmitButtonClick()}
                    className={classes.submitButton}
                >
                    <Submit />
                </Button>
                <Fader>
                    <div className={classes.centeredItem} style={{ visibility: error ? 'inherit' : 'hidden' }}>
                        <div style={{ display: 'inline', color: 'red', fontSize: '0.9em' }}>
                            <SendError />
                        </div>
                    </div>
                </Fader>
            </div>
        );
    };

    const Thanks = () => (
        <Fader><Typography className={classes.thanksFragment} variant='h6'><Thankyou/></Typography></Fader>
    );

    return (
        submitted ? <Thanks /> : <Form />
    );
}

export default view(ViewFeedbackForm);