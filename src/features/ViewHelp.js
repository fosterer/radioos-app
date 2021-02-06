import React from 'react';
import useViewTemplate from '../hooks/useViewTemplate';
import useLogMessage from '../hooks/useLogMessage';
import useFadeIn from '../hooks/useFadeIn';
import { view } from '@risingstack/react-easy-state';
import ViewToolbarBackToMainView from './ViewToolbarBackToMainView';
import { makeStyles } from "@material-ui/core/styles";
import ViewFeedbackForm from './ViewFeedbackForm';
import useLocalisation from '../hooks/useLocalisation';
import LocalisationViewHelp from '../localisations/LocalisationViewHelp';

const useStyles = makeStyles(theme => ({
    view: {
        textAlign: 'justify',
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        paddingTop: theme.spacing(1)
    },
    content: {
        flexGrow: 1
    },
    footer: {
        paddingBottom: theme.spacing(2),
        paddingTop: theme.spacing(2),
        textAlign: 'center',
        fontSize: '0.8em'
    },
    safariHomescreenTip: {
        paddingTop: theme.spacing(1),
    }
}));

function SafariIosHint() {
    const SafariTip = useLocalisation(LocalisationViewHelp, 'safariTip');
    const classes = useStyles();

    const isSafari = !!navigator.userAgent.match(/Version\/[\d.]+.*Safari/);
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isInStandaloneMode = 'standalone' in window.navigator && window.navigator.standalone;

    if (isSafari && iOS && !isInStandaloneMode) {
        return (
            <div className={classes.safariHomescreenTip}>
                <SafariTip />
            </div>
        );
    }
    else {
        return null;
    }
};

function ViewHelp() {
    const template = useViewTemplate();
    const logMessage = useLogMessage();
    const { Fader } = useFadeIn();
    const Title = useLocalisation(LocalisationViewHelp, 'title');
    const Preface = useLocalisation(LocalisationViewHelp, 'preface');
    const Footer = useLocalisation(LocalisationViewHelp, 'footer');
    const classes = useStyles();

    const Content = () => (
        <div className={classes.view}>
            <div className={classes.content}>
                <Preface />
                <ViewFeedbackForm />
                <SafariIosHint />
            </div>
            <div className={classes.footer}>
                <Footer />
            </div>
        </div>
    );

    const Nav = () => (
        <ViewToolbarBackToMainView title={<Title />} />
    );

    logMessage('ViewHelp', 'rendering');
    return (
        <Fader>
            {template.withAppBarViewTemplate(<Content />, <Nav />)}
        </Fader>
    );
}

export default view(ViewHelp);