import React from 'react';
import { view } from '@risingstack/react-easy-state';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import usePostFilter from '../hooks/usePostFilter';
import useFadeIn from '../hooks/useFadeIn';
import useLocalisation from '../hooks/useLocalisation';
import LocalisationViewMain from '../localisations/LocalisationViewMain';
import useAppStore from '../hooks/useAppStore';

const useStyles = makeStyles(theme => ({
    notfound: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: theme.spacing(2)
    },
}));

function ViewMainContentPostListFootter() {
    const { appStore } = useAppStore();
    const filterPostItems = usePostFilter();
    const classes = useStyles();
    const EmptyFilter = useLocalisation(LocalisationViewMain, 'emptyFilter');
    const EmptyLocation = useLocalisation(LocalisationViewMain, 'emptyLocation');
    const { Fader } = useFadeIn();

    const sourceItems = appStore.viewMainState.posts;
    const filterPhrase = appStore.viewMainState.tagsString;
    const filteredItems = filterPostItems(appStore.viewMainState.posts, filterPhrase);

    const EmptyFilterResultFooter = () => (
        <div className={classes.notfound}>
            <Typography variant="h6"><EmptyFilter/></Typography>
            {/* TODO: explain + nudge add something */}
        </div>
    );

    const EmptyLocationFootter = () => (
        <div className={classes.notfound}>
            <Typography variant="h6"><EmptyLocation/></Typography>
            {/* TODO: explain + nudge add something */}
        </div>
    );

    const views = {};
    views[[filteredItems.length > 0, true]] = <div />;
    views[[filteredItems.length === 0, sourceItems.length > 0]] = <EmptyFilterResultFooter />;
    views[[filteredItems.length === 0, sourceItems.length === 0]] = <EmptyLocationFootter />;

    return (<Fader>{views[[true, true]]}</Fader>);
}

export default view(ViewMainContentPostListFootter);