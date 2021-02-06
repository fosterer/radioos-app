import React from 'react';
import { view } from '@risingstack/react-easy-state';
import ViewMainContentPostCard from './ViewMainContentPostCard';
import useLogMessage from '../hooks/useLogMessage';
import ViewMainContentPostListFooter from './ViewMainContentPostListFooter';
import useAppStore from '../hooks/useAppStore';

function ViewMainContentPostList() {
    const { appStore } = useAppStore();
    const logMessage = useLogMessage();

    const sourceItems = appStore.viewMainState.posts;

    const Items = () => (sourceItems.map((item, index) => <ViewMainContentPostCard id={item.postid} key={item.postid} index={index}/>));

    logMessage('ViewMainContentPostList', 'rendering');
    return (
        <>
            <Items />
            <ViewMainContentPostListFooter />
        </>
    );

}

export default view(ViewMainContentPostList);