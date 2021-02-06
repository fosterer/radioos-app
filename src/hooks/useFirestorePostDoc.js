import { useFirestore, useStorage } from "reactfire";
import preloadImages from '../services/preloadImages';
import useAppStore from "./useAppStore";

function useFirestorePostDoc() {
    const firestore = useFirestore();
    const storage = useStorage();
    const { appStore } = useAppStore();

    async function getData(id) {
        try {
            const docRef = firestore.collection('postDocs').doc(id);
            const docSnapshot = await docRef.get();
            if (!docSnapshot.exists) throw new Error("Document " + docSnapshot.id + " does not exist anymore.");

            const data = docSnapshot.data();
            const picturesLinks = await getLinksForPictures(data.pictures, docSnapshot.id);
            const picturesPreloaded = await preloadImages(picturesLinks);

            appStore.viewMainState.posts.find(post => post.postid === id).doc = { ...data, pictures: picturesPreloaded };

        } catch {
            return;
        }
    }

    //TODO: this is questionable...
    async function getLinksForPictures(pictures, id) {
        if (pictures) {
            const pictureLinkPromises = pictures.map(picture => {
                if (picture.type === "external") return picture.link;
                if (picture.type === "internal") {
                    if (picture.processed) {
                        return storage.ref(id + "/" + picture.fileName).getDownloadURL();
                    }
                    return null;
                }
                return null;
            });

            const pictureLinks = await Promise.all(pictureLinkPromises);
            return pictureLinks;
        }
        else {
            return null;
        }
    }

    return { getData };
}

export default useFirestorePostDoc;