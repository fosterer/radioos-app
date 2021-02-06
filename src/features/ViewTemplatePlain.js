import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    screen: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: theme.palette.background.default,
        flexWrap: "nowrap"
    },
    innerPlain: {
        flexGrow: 1,
        flexShrink: 1,
        maxWidth: theme.screenWidth,
        padding: theme.spacing(2),
        flexWrap: "nowrap"
    },
}));

function ViewTemplatePlain({ children }) {
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
                className={classes.innerPlain}
            >
                {children}
            </Grid>
        </Grid>
    );
}

export default ViewTemplatePlain;