import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from '@material-ui/core/Toolbar';
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ViewMainToolbarSearchBox from "./ViewMainToolbarSearchBox";
import { view } from '@risingstack/react-easy-state';
import useHelpButtonNavigationHandler from "../hooks/useHelpButtonNavigationHandler";
import useSettingsButtonNavigationHandler from "../hooks/useSettingsButtonNavigationHandler";
// import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { useUser } from "reactfire";
import useAppStore from "../hooks/useAppStore";
import ViewAvatar from './ViewAvatar';

const useStyles = makeStyles(theme => ({
    menuButton: theme.menuButton,
    menuIcon: theme.menuIcon,
    toolbar: {
        flexGrow: 1,
        flexWrap: "nowrap",
        maxWidth: theme.screenWidth,
        paddingLeft: 3,
        paddingRight: 3,
    },
    titleBox: {
        display: "flex",
        flexGrow: 1,
        alignItems: "center"
    },
    avatarButton: {
        padding: 0,
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    }
}));

//TODO: code styling - but do not do a router/factory here for buttons as this will re-render them too often, react does not recognize this correctly
function ViewMainToolbar() {
    const classes = useStyles();
    const { appStore } = useAppStore();
    const helpButtonHandler = useHelpButtonNavigationHandler();
    const settingsButtonHandler = useSettingsButtonNavigationHandler();
    const user = useUser();

    return (
        <Toolbar disableGutters className={classes.toolbar}>
            <Box className={classes.titleBox}>
                <ViewMainToolbarSearchBox />
            </Box>
            {user.isAnonymous ? (
                <>
                    <IconButton
                        style={{ color: "white" }}
                        disabled={appStore.viewMainState.isLoading}
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => {
                            appStore.viewMainState.searchBoxFocused = false;
                            helpButtonHandler.handle();
                        }}
                        className={classes.menuButton}>
                        <HelpOutlineOutlinedIcon className={classes.menuIcon} />
                    </IconButton>
                    <IconButton
                        style={{ color: "white" }}
                        disabled={appStore.viewMainState.isLoading}
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => {
                            appStore.viewMainState.searchBoxFocused = false;
                            settingsButtonHandler.handle();
                        }}
                        className={classes.menuButton}>
                        <AccountCircleOutlinedIcon className={classes.menuIcon} />
                    </IconButton>
                </>
            ) : (
                    <>
                        <IconButton
                            style={{ color: "white" }}
                            disabled={appStore.viewMainState.isLoading}
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => {
                                appStore.viewMainState.searchBoxFocused = false;
                                helpButtonHandler.handle();
                            }}
                            className={classes.menuButton}>
                            <HelpOutlineOutlinedIcon className={classes.menuIcon} />
                        </IconButton>
                        <IconButton
                            disabled={appStore.viewMainState.isLoading}
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => {
                                appStore.viewMainState.searchBoxFocused = false;
                                settingsButtonHandler.handle();
                            }}
                            className={classes.avatarButton}>
                            <ViewAvatar photoURL={user.photoURL} displayName={user.displayName} />
                        </IconButton>
                    </>
                )}
        </Toolbar>
    );
}

export default view(ViewMainToolbar);