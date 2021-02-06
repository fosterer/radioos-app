import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import NavigationOutlinedIcon from '@material-ui/icons/NavigationOutlined';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import KeyboardReturnOutlinedIcon from '@material-ui/icons/KeyboardReturnOutlined';
import { view } from '@risingstack/react-easy-state';
import useDeviceLocationClickHandler from "../hooks/useDeviceLocationHandler";
import useSearchBoxInputHandler from "../hooks/useSearchBoxInputHandler";
import useLocalisation from "../hooks/useLocalisation";
import LocalisationViewMain from "../localisations/LocalisationViewMain";
import useAppStore from "../hooks/useAppStore";

const useStyles = makeStyles(theme => ({
    search: {
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        maxWidth: 500,
        marginLeft: 6,
        marginRight: 6

    },
    inputRoot: {
        flexGrow: 1,
        fontWeight: 'bolder',
        fontSize: 19,
        color: 'inherit',
    },
    inputInput: {
        flexGrow: 1,
        paddingLeft: theme.spacing(1),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    menuButton: {
        color: 'primary',
        padding: 3,
        margin: 5,
    },
    navIcon: {
        transform: 'rotate(35deg)',
        marginBottom: 1,
        marginLeft: 1,
        marginTop: -1,
        marginRight: -1
    }
}));

function ViewMainToolbarSearchBox() {
    const classes = useStyles();
    const { appStore } = useAppStore();
    const deviceLocation = useDeviceLocationClickHandler();
    const searchInput = useSearchBoxInputHandler();
    const [userInput, setUserInput] = React.useState("");
    const Placeholder = useLocalisation(LocalisationViewMain, appStore.viewMainState.searchBoxPlaceholder);
    const ref = React.useRef(userInput);

    const inputBaseAttr = {
        placeholder: Placeholder(),
        onFocus: () => {
            appStore.viewMainState.searchBoxFocused = true;
        },
        onBlur: () => {
            appStore.viewMainState.searchBoxFocused = false;
        },
        onInput: (e) => {
            setUserInput(e.target.value);
        },
        onKeyDown: (e) => {
            if (e.which === 13 && e.keyCode === 13) {
                e.preventDefault();
                searchInput.handle(userInput);
            }
        },
        inputRef: ref,
        readOnly: appStore.viewMainState.isLoading,
        classes: {
            root: classes.inputRoot,
            input: classes.inputInput,
        }
    };

    const clearButtonAttr = {
        className: classes.menuButton,
        disabled: appStore.viewMainState.isLoading,
        onClick: () => {
            ref.current.value = "";
            setUserInput("");
        },
        onMouseDown: (event) => {
            event.preventDefault();
        }
    };

    const navButtonAttr = {
        className: classes.menuButton,
        disabled: appStore.viewMainState.isLoading,
        onClick: () => {
            deviceLocation.handle();
        },
        onMouseDown: (event) => {
            event.preventDefault();
        }
    };

    const returnButtonAttr = {
        className: classes.menuButton,
        disabled: appStore.viewMainState.isLoading,
        onClick: () => {
            searchInput.handle(userInput);
        },
        onMouseDown: (event) => {
            event.preventDefault();
        }
    };

    const LocationButtonVariant = () => (
        <IconButton aria-label="use location of your device" {...navButtonAttr}>
            <NavigationOutlinedIcon className={classes.navIcon} />
        </IconButton >
    );

    const ReturnButtonVariant = () => (
        < IconButton aria-label="execute search" {...returnButtonAttr}>
            <KeyboardReturnOutlinedIcon />
        </IconButton >
    );

    const ClearButtonVariant = () => (
        < IconButton aria-label="clear input" {...clearButtonAttr}>
            <ClearOutlinedIcon />
        </IconButton>
    );

    const buttons = {};
    buttons[[true, userInput !== appStore.viewMainState.searchBoxInput]] = <ReturnButtonVariant />;
    buttons[[userInput === "", userInput === appStore.viewMainState.searchBoxInput]] = <LocationButtonVariant />;
    buttons[[userInput !== "", userInput === appStore.viewMainState.searchBoxInput]] = <ClearButtonVariant />;

    React.useEffect(() => {
        if (userInput === "" && userInput !== appStore.viewMainState.searchBoxInput) {
            searchInput.handle(userInput);
        }

        if (appStore.viewMainState.posts && appStore.viewMainState.posts.length > 0) {
            appStore.viewMainState.searchBoxPlaceholder = 'searchFindPlaceOrTags';
        }
        else {
            appStore.viewMainState.searchBoxPlaceholder = 'searchFindPlace';
        }
    });

    return (
        <div className={classes.search}>
            <InputBase
                {...inputBaseAttr}
                inputProps={{ 'aria-label': 'search' }}
            />
            {buttons[[true, true]]}
        </div>
    );
}

export default view(ViewMainToolbarSearchBox);