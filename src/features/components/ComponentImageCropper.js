import React, { useState } from "react";
import { view } from '@risingstack/react-easy-state';
import Cropper from 'react-easy-crop';
import { makeStyles } from "@material-ui/core/styles";
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import ZoomInOutlinedIcon from '@material-ui/icons/ZoomInOutlined';
import ZoomOutOutlinedIcon from '@material-ui/icons/ZoomOutOutlined';
import RotateLeftOutlinedIcon from '@material-ui/icons/RotateLeftOutlined';
import RotateRightOutlinedIcon from '@material-ui/icons/RotateRightOutlined';
import Slider from '@material-ui/core/Slider';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
    content: {
        display: 'flex',
        flexDirection: 'column'
    },
    controlsZoomArea: {
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1)
    },
    controlsOkCancelArea: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    slider: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        color: theme.palette.secondary.main,
    },
    buttonAcceptCancel: {
        marginLeft: theme.spacing(1),
    }
}));

function ComponentImageCropper({ disabled, width, height, cropShape, aspect, fileAsDataUrl, onAccept, onCancel }) {
    const classes = useStyles();
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [areaPixels, setAreaPixels] = useState(null);
    const minZoom = 1;
    const maxZoom = 3;
    const zoomStep = 0.1;
    const rotations = [0, 90, 180, 270];
    const [rotation, setRotation] = useState(rotations[0]);
    const nextRotation = () => {
        const ci = rotations.indexOf(rotation);
        const result = ci === rotations.length - 1 ? rotations[0] : rotations[ci + 1];
        setRotation(result);
    }
    const prevRotation = () => {
        const ci = rotations.indexOf(rotation);
        const result = ci === 0 ? rotations[rotations.length - 1] : rotations[ci - 1];
        setRotation(result);
    }

    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        setAreaPixels(croppedAreaPixels);
    }

    return (
        <div className={classes.content}>
            <div style={{ width: width, height: height, position: 'relative', pointerEvents: disabled ? 'none' : null }}>
                <Cropper
                    image={fileAsDataUrl}
                    crop={crop}
                    zoom={zoom}
                    aspect={aspect}
                    cropShape={cropShape}
                    showGrid={true}
                    rotation={rotation}
                    onCropChange={(crop) => setCrop(crop)}
                    onCropComplete={(area, pixels) => onCropComplete(area, pixels)}
                    onZoomChange={(zoom) => setZoom(zoom)}
                />
            </div>

            <div className={classes.controlsZoomArea}>
                <IconButton
                    disabled={disabled}
                    onClick={() => prevRotation()}
                >
                    <RotateLeftOutlinedIcon fontSize={'small'} />
                </IconButton>
                <IconButton
                    disabled={disabled}
                    onClick={() => nextRotation()}
                >
                    <RotateRightOutlinedIcon fontSize={'small'} />
                </IconButton>

                <IconButton
                    disabled={zoom === minZoom || disabled}
                    onClick={() => zoom > minZoom ? setZoom(zoom - zoomStep) : setZoom(minZoom)}
                >
                    <ZoomOutOutlinedIcon fontSize={'small'} />
                </IconButton>
                <Slider
                    className={classes.slider}
                    value={zoom}
                    min={minZoom}
                    max={maxZoom}
                    step={zoomStep}
                    onChange={(e, zoom) => setZoom(zoom)}
                    disabled={disabled}
                />
                <IconButton
                    disabled={zoom === maxZoom || disabled}
                    onClick={() => zoom < maxZoom ? setZoom(zoom + zoomStep) : setZoom(maxZoom)}
                >
                    <ZoomInOutlinedIcon fontSize={'small'}/>
                </IconButton>
            </div>

            <div className={classes.controlsOkCancelArea}>
                <IconButton
                    className={classes.buttonAcceptCancel}
                    disabled={disabled}
                    onClick={() => onCancel()}
                >
                    <CloseOutlinedIcon fontSize="large" />
                </IconButton>
                <IconButton
                    className={classes.buttonAcceptCancel}
                    disabled={disabled}
                    onClick={() => onAccept(areaPixels, rotation)}
                >
                    <DoneOutlinedIcon fontSize="large" />
                </IconButton>
            </div>
        </div>
    )
}

export default view(ComponentImageCropper);