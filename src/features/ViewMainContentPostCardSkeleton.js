import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { view } from '@risingstack/react-easy-state';

const useStyles = makeStyles(theme => ({
    card: {
        flexGrow: 1,
        marginTop: theme.spacing(1),
    },
}));

function ViewMainContentPostCardSkeleton() {
    const classes = useStyles();

    return (
        <Card className={classes.card} >
            <CardHeader
                avatar={<Skeleton variant="circle" width={40} height={40} />}
                action={
                    <IconButton aria-label="more menu" disabled style={{ padding: 0 }}>
                        <ExpandMoreOutlinedIcon style={{ width: 36, height: 36 }} />
                    </IconButton>
                }
                title={<Skeleton height={16} width="40%" />}
                subheader={<Skeleton height={16} width="30%" />}
            />
            <CardContent>
                <>
                    <Skeleton height={16} />
                    <Skeleton height={16} width="80%" />
                </>
            </CardContent>
        </Card>
    );
}

export default view(ViewMainContentPostCardSkeleton);