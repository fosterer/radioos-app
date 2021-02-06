import React from 'react';
import { view } from '@risingstack/react-easy-state';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from '@material-ui/core/Toolbar';
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from '@material-ui/core';
import useAppStore from '../hooks/useAppStore';

const useStyles = makeStyles(theme => ({
    menuButton: theme.menuButton,
    menuIcon: theme.menuIcon,
    toolbar: {
        flexGrow: 1,
        flexWrap: "nowrap",
        maxWidth: theme.screenWidth,
        paddingLeft: 3,
        paddingRight: 3,
        marginLeft: 3,
        marginRight: 3
    },
    titleBox: {
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center"
    }
}));

function ViewToolbarBackToMainView({ title }) {
    const classes = useStyles();
    const { appStore, appViews } = useAppStore();

    const clickBack = () => {
        appStore.appState.appView = appViews.MAIN;
    }

    return (
        <Toolbar disableGutters className={classes.toolbar}>
            <IconButton style={{ color: "white" }} disabled={appStore.appState.processingData} onClick={() => clickBack()} className={classes.menuButton}>
                <ArrowBackIosOutlinedIcon className={classes.menuIcon} />
            </IconButton>

            <Box className={classes.titleBox}>
                <Typography variant={'h6'}>{title}</Typography>
            </Box>

            <IconButton style={{ visibility: 'hidden' }} className={classes.menuButton}>
                <ArrowBackIosOutlinedIcon className={classes.menuIcon} />
            </IconButton>

        </Toolbar>
    );
}

export default view(ViewToolbarBackToMainView);