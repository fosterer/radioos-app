import React from "react";
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    screen: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: theme.palette.background.default,
        flexWrap: "nowrap"
    },
    innerAppBar: {
        flexGrow: 1,
        flexShrink: 1,
        maxWidth: theme.screenWidth,
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        flexWrap: "nowrap"
    },
    appbar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexGrow: 1
    },
    content: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        width: "100%",
    },
    toolbarOffset: theme.mixins.toolbar
}));

function HideOnScroll({ children }) {
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger} >
            {children}
        </Slide>
    );
}

function ViewTemplateWithAppBar({ children, nav }) {
    const classes = useStyles();

    return (
        <Grid
            id="screen"
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.screen}
        >
            <Grid
                id="screen-inner"
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
                className={classes.innerAppBar}
            >
                <CssBaseline>
                    <HideOnScroll>
                        <AppBar className={classes.appbar}>
                            {nav}
                        </AppBar>
                    </HideOnScroll>
                </CssBaseline>
                <div className={classes.toolbarOffset} />
                <Grid id="screen-content" className={classes.content}>
                    {children}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ViewTemplateWithAppBar;