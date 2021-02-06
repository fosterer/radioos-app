import { GeoFirestore } from "geofirestore";
import { useFirestore } from "reactfire";
import firebase from "firebase/app";
import createPostDisplayObject from "../services/createPostDisplayObject";
import useAppStore from "./useAppStore";

function useFirestorePostMarkers() {
    const firestore = useFirestore();
    const { appStore } = useAppStore();

    async function subscribe(placePoint) {
        if (appStore.viewMainState.postSubscriptionClearCallback !== null) appStore.viewMainState.postSubscriptionClearCallback();

        const radius = appStore.viewMainState.postRadius;
        const markersQuery = getMarkersQuery(placePoint, radius);
        const initialQueryResult = await markersQuery.get();
        const initialPosts = sortPostListItems(initialQueryResult.docs.map(doc => createPostDisplayObject(doc)));

        const clearMarkersSubscriptionCallback = markersQuery.onSnapshot(snapshot => {
            const removedChanges = snapshot.docChanges().filter(change => change.type === 'removed');
            const idsToRemove = removedChanges.map(arr => arr.doc.id);
            if (idsToRemove.length > 0) {
                appStore.viewMainState.posts = appStore.viewMainState.posts.filter(p => !idsToRemove.includes(p.postid));
            }

            const addedChanges = snapshot.docChanges().filter(change => change.type === 'added');
            const docsToAdd = addedChanges.map(change => createPostDisplayObject(change.doc));
            if (docsToAdd.length > 0) {
                const dedupedNew = docsToAdd.filter(ap => appStore.viewMainState.posts.findIndex(ep => ep.postid === ap.postid) === -1);
                if (dedupedNew.length > 0) appStore.viewMainState.posts = sortPostListItems([...appStore.viewMainState.posts, ...dedupedNew]);
            }
        });

        return { clearMarkersSubscriptionCallback, initialPosts };
    }

    function getMarkersQuery(placePoint, radius) {
        const geofirestore = new GeoFirestore(firestore);
        const postsGeoCollection = geofirestore.collection("postMarkers");
        const postsGeoQuery = postsGeoCollection.near({
            center: new firebase.firestore.GeoPoint(placePoint[0], placePoint[1]),
            radius: radius
        });
        return postsGeoQuery;
    }

    function sortPostListItems(items) {
        return [...items.sort(function (a, b) {
            if (a.sortingFactor < b.sortingFactor) return -1;
            if (a.sortingFactor > b.sortingFactor) return 1;
            return 0;
        })];
    }

    return { subscribe }
}

export default useFirestorePostMarkers;