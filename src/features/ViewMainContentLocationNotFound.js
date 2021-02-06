import React from 'react';
import { view } from '@risingstack/react-easy-state';
import { makeStyles } from '@material-ui/core/styles';
import useLogMessage from '../hooks/useLogMessage';
import Typography from '@material-ui/core/Typography';
import useLocalisation from '../hooks/useLocalisation';
import LocalisationViewMain from '../localisations/LocalisationViewMain';

const useStyles = makeStyles(theme => ({
    contentBox: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: theme.spacing(2)
    },
}));

function ViewMainContentLocationNotFound() {
    const logMessage = useLogMessage();
    const classes = useStyles();
    const NotFound = useLocalisation(LocalisationViewMain, 'locationNotFound');

    logMessage('ViewMainContentLocationNotFound', 'rendering');
    return (
        <div className={classes.contentBox}>
            <Typography>
                <strong>
                    <NotFound/>
                </strong>
            </Typography>
        </div>
    );
}

export default view(ViewMainContentLocationNotFound);