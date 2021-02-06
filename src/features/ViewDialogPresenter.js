import React from 'react';
import { view } from '@risingstack/react-easy-state';
import { makeStyles } from "@material-ui/core/styles";
import useFadeIn from "../hooks/useFadeIn";
import Backdrop from '@material-ui/core/Backdrop';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    view: {
        backgroundColor: theme.palette.primary.main,
        flexGrow: 1,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(1),
        maxWidth: 700
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

function ViewDialogPresenter({ children }) {
    const classes = useStyles();
    const { Fader } = useFadeIn();

    return (
        <Fader>
            <div className={classes.view}>
                <Backdrop className={classes.backdrop} open>
                    <div className={classes.content}>
                        <Box height='40vh' width='100%' />
                        <div className={classes.content}>
                            {children}
                        </div>
                        <Box height='60vh' width='100%' />
                    </div>
                </Backdrop>
            </div>
        </Fader>
    )
}

export default view(ViewDialogPresenter);