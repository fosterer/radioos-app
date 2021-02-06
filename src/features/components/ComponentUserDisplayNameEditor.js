import React from "react";
import { view } from '@risingstack/react-easy-state';
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import KeyboardReturnOutlinedIcon from '@material-ui/icons/KeyboardReturnOutlined';
import useLocalisation from "../../hooks/useLocalisation";
import LocalisationViewSettings from "../../localisations/LocalisationViewSettings";

const useStyles = makeStyles(theme => ({
    displayName: {
        flexBasis: 250
    },
}));

function ComponentUserDisplayNameEditor({ displayName, editedDisplayName, updateDisplayName, setEditedDisplayName, disabled }) {
    const classes = useStyles();
    const DisplayName = useLocalisation(LocalisationViewSettings, 'DisplayName');

    return (
        <>
            <TextField
                className={classes.displayName}
                label={<DisplayName />}
                value={editedDisplayName}
                disabled={disabled}
                onKeyDown={(e) => {
                    if (e.which === 13 && e.keyCode === 13) {
                        e.preventDefault();
                        updateDisplayName();
                    }
                }}
                onChange={(e) => {
                    setEditedDisplayName(e.target.value);
                }}
            />
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                <IconButton
                    size={'small'}
                    aria-label="update dispaly name"
                    disabled={disabled}
                    style={{ visibility: displayName !== editedDisplayName ? 'inherit' : 'hidden' }}
                    component="span"
                    onClick={() => updateDisplayName()}
                >
                    <KeyboardReturnOutlinedIcon />
                </IconButton>
            </div>
        </>
    )
}

export default view(ComponentUserDisplayNameEditor);