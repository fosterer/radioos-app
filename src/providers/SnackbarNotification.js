import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { SnackbarProvider } from 'notistack';

function SnackbarNotificationProvider({ children }) {

    const useStyles = makeStyles(theme => ({
        snackInfo: {
            backgroundColor: 'teal',
            fontSize: 16,
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
        },
        snackSuccess: {
            fontSize: 16,
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
        },
        snackWarning: {
            backgroundColor: 'darkorange',
            fontSize: 16,
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
        },
        snackError: {
            fontSize: 16,
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
        }
    }));

    const classes = useStyles();
    const notistackRef = React.createRef();
    const onClickDismiss = key => () => {
        notistackRef.current.closeSnackbar(key);
    }

    return (
        <SnackbarProvider
            anchorOrigin={{ vertical: "bottom", horizontal: 'left' }}
            autoHideDuration={10000}
            preventDuplicate
            hideIconVariant
            classes={{
                variantInfo: classes.snackInfo,
                variantSuccess: classes.snackSuccess,
                variantWarning: classes.snackWarning,
                variantError: classes.snackError,
            }}
            ref={notistackRef}
            action={(key) => (
                <IconButton onClick={onClickDismiss(key)}>
                    <CloseOutlinedIcon />
                </IconButton>
            )}
            maxSnack={3}
        >
            {children}
        </SnackbarProvider>
    )
}

export default SnackbarNotificationProvider;


/*
https://iamhosseindhv.com/notistack

import { useSnackbar } from 'notistack';

const MyButton = () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const handleClick = () => {
        enqueueSnackbar('I love hooks');
    };

    return (
        <Button onClick={handleClick}>Show snackbar</Button>
    );
}
*/