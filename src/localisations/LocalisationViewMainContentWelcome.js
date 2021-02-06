import React from 'react';
import Typography from '@material-ui/core/Typography';
import NavigationOutlinedIcon from '@material-ui/icons/NavigationOutlined';

const SearchTipsEN = () => (
    <>
        <div style={{ marginTop: 10 }} >Type a name of a place or hit <NavigationOutlinedIcon style={{ marginLeft: 5, height: 20, transform: 'rotate(35deg)' }} /> to use your device's location.</div>
        <div style={{ marginTop: 10 }}>Once you selected a place, filter with <b>#tags</b>.</div>
    </>
)

const SearchTipsPL = () => (
    <>
        <div style={{ marginTop: 10 }}>Wpisz nazwę miejsca lub kliknij <NavigationOutlinedIcon style={{ marginLeft: 5, height: 20, transform: 'rotate(35deg)' }} /> aby użyć lokalizacji Twojego urządzenia.</div>
        <div style={{ marginTop: 10 }}>Potem możesz filtrować używając <b>#tagów</b>.</div>
    </>
)

const WelcomeHeadingEN = () => (
    <Typography style={{ marginTop: 30 }} variant="h5">Welcome!</Typography>
)

const WelcomeHeadingPL = () => (
    <Typography style={{ marginTop: 30 }} variant="h5">Witaj!</Typography>
)

const StartNudgeEN = () => (
    <Typography style={{ marginTop: 5 }} variant="subtitle1">Tap into the box above to get started.</Typography>
)

const StartNudgePL = () => (
    <Typography style={{ marginTop: 5 }} variant="subtitle1">Kliknij w pole u góry aby zacząć.</Typography>
)

const LocalisationViewMainContentWelcome = {};
LocalisationViewMainContentWelcome[['searchTips', 'en']] = <SearchTipsEN />;
LocalisationViewMainContentWelcome[['searchTips', 'pl']] = <SearchTipsPL />;
LocalisationViewMainContentWelcome[['welcomeHeading', 'en']] = <WelcomeHeadingEN />;
LocalisationViewMainContentWelcome[['welcomeHeading', 'pl']] = <WelcomeHeadingPL />;
LocalisationViewMainContentWelcome[['startNudge', 'en']] = <StartNudgeEN />;
LocalisationViewMainContentWelcome[['startNudge', 'pl']] = <StartNudgePL />;

export default LocalisationViewMainContentWelcome;