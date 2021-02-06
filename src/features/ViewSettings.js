import React from 'react';
import useViewTemplate from '../hooks/useViewTemplate';
import useLogMessage from '../hooks/useLogMessage';
import useFadeIn from '../hooks/useFadeIn';
import { view } from '@risingstack/react-easy-state';
import ViewToolbarBackToMainView from './ViewToolbarBackToMainView';
import { makeStyles } from "@material-ui/core/styles";
import useAppConfig from '../hooks/useAppConfig';
import useLocalisation from '../hooks/useLocalisation';
import LocalisationViewSettings from '../localisations/LocalisationViewSettings';
import ViewLoginRouter from './ViewLoginRouter';
import { useUser } from 'reactfire';
import ViewUserProfile from './ViewUserProfile';

const useStyles = makeStyles(theme => ({
    view: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        paddingTop: theme.spacing(1),
        textAlign: 'justify'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'flex-start',
        justifyItems: 'flex-start'

    },
    footer: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.disabled,
        fontSize: '0.8em'
    }
}));

function ViewSettings() {
    const template = useViewTemplate();
    const logMessage = useLogMessage();
    const { Fader } = useFadeIn();
    const Title = useLocalisation(LocalisationViewSettings, 'title');
    const classes = useStyles();
    const config = useAppConfig();
    const user = useUser();

    const UserProfile = () => {
        if (user.isAnonymous === false) {
            return (
                <Fader>
                    <ViewUserProfile />
                </Fader>
            );
        }
        else return null;
    }

    const Content = () => (
        <div className={classes.view}>
            <div className={classes.content}>
                <UserProfile />
                <ViewLoginRouter />
            </div>
            <div className={classes.footer} >{config.version}</div>
        </div>
    );

    const Nav = () => (
        <ViewToolbarBackToMainView title={<Title />} />
    );

    logMessage('ViewSettings', 'rendering');
    return (
        <Fader>
            {template.withAppBarViewTemplate(<Content />, <Nav />)}
        </Fader>
    );
}

export default view(ViewSettings);