import React from 'react';
import { view } from '@risingstack/react-easy-state';
import Avatar from '@material-ui/core/Avatar';
import useFadeIn from '../hooks/useFadeIn';

function ViewAvatar({ photoURL, displayName, className }) {
    const { Fader } = useFadeIn();
    if (photoURL !== null && photoURL.length > 0) return <Fader><Avatar src={photoURL} className={className} /></Fader>;
    if (displayName !== null && displayName.length > 0) return <Avatar className={className}>{displayName.charAt(0)}</Avatar>;
    return <Avatar className={className} />
}

export default view(ViewAvatar);