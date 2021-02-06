import React from "react";
import { view } from '@risingstack/react-easy-state';
import { makeStyles } from "@material-ui/core/styles";
import useLogMessage from "../hooks/useLogMessage";
import useFadeIn from "../hooks/useFadeIn";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        flexGrow: 1,
        margin: 0,
        backgroundImage: "url('/logo.svg')",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "50% 50%"
    }
}));

function ViewLoading({fadeIn = false}) {
    const classes = useStyles();
    const { Fader } = useFadeIn();
    const logMessage = useLogMessage();

    const views = {};
    views[fadeIn === true] = <Fader><div className={classes.root}></div></Fader>;
    views[fadeIn === false] = <div className={classes.root}></div>;

    logMessage('ViewLoading', 'rendering');
    return (views[true]);
}

export default view(ViewLoading);