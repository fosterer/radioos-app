import React from 'react';
import { InView } from 'react-intersection-observer';
import { view } from '@risingstack/react-easy-state';
import ViewMainContentPostCardSkeleton from './ViewMainContentPostCardSkeleton';
import ViewMainContentPostCardContent from './ViewMainContentPostCardContent';
import useFirestorePostDoc from '../hooks/useFirestorePostDoc';
import useFadeIn from '../hooks/useFadeIn';
import usePostFilter from '../hooks/usePostFilter';
import useAppStore from '../hooks/useAppStore';

function ViewMainContentPostCard(props) {
    const rootMarginBottom = window.innerHeight * 1;
    const { appStore } = useAppStore();
    const filterPostItems = usePostFilter();
    const fsDoc = useFirestorePostDoc();
    const { Fader } = useFadeIn();

    const post = appStore.viewMainState.posts[props.index];
    const doc = post.doc;
    const filterPhrase = appStore.viewMainState.tagsString;
    const shouldDisplay = filterPostItems([post], filterPhrase).length === 1;  //TODO: !performance: do not filter here on every post - create filtered state post-ids list?

    const content = {};
    content[[true, shouldDisplay === false]] = <div />;
    content[[doc === null, shouldDisplay === true]] = <ViewMainContentPostCardSkeleton />;
    content[[doc !== null, shouldDisplay === true]] = <ViewMainContentPostCardContent {...doc} />;


    return (
        <div id={props.id}>
            <InView
                rootMargin={"0px 0px " + rootMarginBottom + "px 0px"}
                onChange={(inView) => { if (inView && !doc) fsDoc.getData(props.id); }}
            />

            <Fader >
                {content[[true, true]]}
            </Fader>
        </div>
    );
}

export default view(ViewMainContentPostCard);
