import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { view } from '@risingstack/react-easy-state';
import useLocalisation from '../hooks/useLocalisation';
import useUserProfileUpdater from '../hooks/useUserProfileUpdater';
import LocalisationViewSettings from '../localisations/LocalisationViewSettings';
import useAppStore from '../hooks/useAppStore';
import useFadeIn from '../hooks/useFadeIn';
import { useUser } from 'reactfire';
import ComponentAvatarEditor from './components/ComponentAvatarEditor';
import ComponentUserDisplayNameEditor from './components/ComponentUserDisplayNameEditor';
import ComponentImageCropper from './components/ComponentImageCropper';
import readFileAsDataUrl from '../services/readFileAsDataUrl';
import getCroppedImg from '../services/cropImage';
import logMessage from '../services/logMessage';
import { readAndCompressImage } from 'browser-image-resizer';

const useStyles = makeStyles(theme => ({
    content: {
        paddingTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'flex-start',
        justifyItems: 'flex-start',
        alignContent: 'center',
    },
    centeredItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
    },
    linkAlikeButton: {
        font: 'inherit',
        color: 'inherit',
        background: 'none',
        border: 'none',
        margin: '0',
        padding: '0',
        cursor: 'pointer',
        outline: '0'
    },
}));

function ViewUserProfile() {
    const classes = useStyles();
    const usrProfileUpdater = useUserProfileUpdater();
    const { Fader } = useFadeIn();
    const { appStore, appViews } = useAppStore();
    const user = useUser();
    const UserProfileSaveFailed = useLocalisation(LocalisationViewSettings, 'UserProfileSaveFailed');
    const ContactUs = useLocalisation(LocalisationViewSettings, 'ContactUs');
    const [photoURL, setPhotoURL] = useState(user.photoURL);
    const [editedDisplayName, setEditedDisplayName] = useState(user.displayName);
    const [updateError, setUpdateError] = useState(false);
    const [newPhotoAsDataUrl, setNewPhotoAsDataUrl] = useState(null);

    const selectNewPhoto = async (file) => {
        const resizeConfig = {
            quality: 0.8,
            maxWidth: 250,
            maxHeight: 250,
        };
        const resizedImg = await readAndCompressImage(file, resizeConfig);
        const imageDataUrl = await readFileAsDataUrl(resizedImg);
        setNewPhotoAsDataUrl(imageDataUrl);
    }

    const saveNewAvatar = async (fileAsDataUrl, areaPixels, rotation) => {
        try {
            appStore.appState.processingData = true;
            const croppedImage = await getCroppedImg(fileAsDataUrl, areaPixels, 'avatar', rotation);
            await usrProfileUpdater.setPhoto(croppedImage);
            setPhotoURL(user.photoURL);
            setNewPhotoAsDataUrl(null);
            appStore.appState.processingData = false;

        } catch (err) {
            logMessage(err);
            setUpdateError(true);
            appStore.appState.processingData = false;
        }
    }

    const removeAvatar = async () => {
        try {
            appStore.appState.processingData = true;
            await usrProfileUpdater.setPhoto(null);
            setPhotoURL(user.photoURL);
            appStore.appState.processingData = false;

        } catch {
            setUpdateError(true);
            appStore.appState.processingData = false;
        }
    }

    const updateDisplayName = async () => {
        try {
            const name = editedDisplayName;
            appStore.appState.processingData = true;
            await usrProfileUpdater.setDisplayName(name);
            appStore.appState.processingData = false;

        } catch {
            setUpdateError(true);
            appStore.appState.processingData = false;
        }
    }

    const contactSupport = () => {
        appStore.appState.appView = appViews.HELP;
    };

    return (
        <div className={classes.content}>
            {
                newPhotoAsDataUrl !== null ?
                    <div className={classes.centeredItem}>
                        <ComponentImageCropper
                            disabled={appStore.appState.processingData}
                            width={250}
                            height={250}
                            cropShape={'round'}
                            aspect={1}
                            fileAsDataUrl={newPhotoAsDataUrl}
                            onAccept={(areaPixels, rotation) => saveNewAvatar(newPhotoAsDataUrl, areaPixels, rotation)}
                            onCancel={() => setNewPhotoAsDataUrl(null)}
                        />
                    </div>
                    :
                    <>
                        <div className={classes.centeredItem}>
                            <div style={{ paddingLeft: 34 }} />
                            <ComponentAvatarEditor
                                photoURL={photoURL}
                                displayName={user.displayName}
                                selectNewPhoto={selectNewPhoto}
                                removeAvatar={removeAvatar}
                                disabled={appStore.appState.processingData}
                            />
                        </div>

                        <div className={classes.centeredItem}>
                            <div style={{ paddingLeft: 30 }} />
                            <ComponentUserDisplayNameEditor
                                displayName={user.displayName}
                                editedDisplayName={editedDisplayName}
                                updateDisplayName={updateDisplayName}
                                setEditedDisplayName={setEditedDisplayName}
                                disabled={appStore.appState.processingData}
                            />
                        </div>
                    </>
            }

            <Fader>
                <div className={classes.centeredItem} style={{ visibility: updateError ? 'inherit' : 'hidden' }}>
                    <div style={{ display: 'inline', color: 'red', fontSize: '0.9em' }}>
                        <UserProfileSaveFailed /><button className={classes.linkAlikeButton} onClick={() => contactSupport()}><ContactUs />.</button>
                    </div>
                </div>
            </Fader>
        </div>
    )
}

export default view(ViewUserProfile);