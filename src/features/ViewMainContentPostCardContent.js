import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import ReactMarkdown from 'react-markdown';
import { view } from '@risingstack/react-easy-state';
import ViewMainContentPostCardContentPictureCarousel from './ViewMainContentPostCardContentPictureCarousel';

const useStyles = makeStyles(theme => ({
    card: {
        flexGrow: 1,
        marginTop: theme.spacing(1),
    },
    media1: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: theme.palette.primary,
    },
}));

function ViewMainContentPostCardContent(props) {
    const classes = useStyles();

    const CardMediaItem = ({ img }) => (
        <CardMedia
            className={classes.media1}
            image={img}
        />
    );

    return (
        <Card className={classes.card} >
            <CardHeader
                avatar={
                    <Avatar aria-label="avatar" className={classes.avatar}>
                        {props.uPicture.length > 0 ? props.uPicture : props.uName.charAt(0)}
                    </Avatar>
                }
                action={

                    <IconButton aria-label="more menu" disabled style={{ padding: 0 }}>
                        <ExpandMoreOutlinedIcon style={{ width: 36, height: 36 }} />
                    </IconButton>
                }
                title={props.uName}
                subheader={props.locAdr}
            />
            {
                props.pictures ? (
                    props.pictures.length === 1 ? (
                        <CardMediaItem classes={classes} img={props.pictures[0]} />
                    ) : (
                            <ViewMainContentPostCardContentPictureCarousel items={props.pictures} />
                        )
                ) : (null)
            }
            <CardContent style={{ paddingTop: 0, paddingBottom: 0 }}>
                <Typography component="span">
                    <ReactMarkdown source={props.note} linkTarget={'_blank'} />
                </Typography>
            </CardContent>
        </Card >
    );
};

export default view(ViewMainContentPostCardContent);