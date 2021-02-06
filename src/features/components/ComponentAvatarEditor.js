import React from "react";
import { view } from '@risingstack/react-easy-state';
import { makeStyles } from "@material-ui/core/styles";
import ViewAvatar from '../ViewAvatar';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        justifySelf: 'center'
    },
    avatarInput: {
        display: 'none',
    },
    editButton: {
        marginLeft: theme.spacing(1),
    },
}));

function ComponentAvatarEditor({ photoURL, displayName, selectNewPhoto, removeAvatar, disabled }) {
    const classes = useStyles();

    return (
        <>
            <ViewAvatar photoURL={photoURL} displayName={displayName} className={classes.avatar} />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <input
                    accept="image/*"
                    className={classes.avatarInput}
                    id="icon-button-file"
                    type="file"
                    onChange={(e) => selectNewPhoto(e.target.files[0])}
                    disabled={disabled}
                />
                <label htmlFor="icon-button-file">
                    <IconButton size="small" aria-label="upload avatar" disabled={disabled} className={classes.editButton} component="span">
                        <EditOutlinedIcon fontSize="small" />
                    </IconButton>
                </label>
                <IconButton
                    size="small"
                    style={{ visibility: photoURL ? 'inherit' : 'hidden' }}
                    disabled={disabled}
                    onClick={() => removeAvatar()}
                    aria-label="delete avatar"
                    className={classes.editButton}
                    component="span"
                >
                    <ClearOutlinedIcon fontSize="small" />
                </IconButton>
            </div>
        </>
    )
}

export default view(ComponentAvatarEditor);