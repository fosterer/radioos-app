import { useUser, useStorage } from "reactfire";

function useUserProfileUpdater() {
    const user = useUser();
    const storage = useStorage();
    const usrFolder = 'usr/' + user.uid;
    const usrImgPath = usrFolder + '/avatar';

    async function setPhoto(file) {
        if (file !== null) {
            const ext = file.name.split('.').pop();
            const ref = usrImgPath + '.' + ext;
            await storage.ref(ref).put(file);
            const url = await storage.ref(ref).getDownloadURL();
            await user.updateProfile({ photoURL: url });
        }
        else {
            await user.updateProfile({ photoURL: null });
            await deleteFolderContents(usrFolder);
        }
    }

    async function deleteFolderContents(path) {
        const ref = storage.ref(path);
        const files = await ref.listAll();
        files.items.forEach(async fileRef => {
            await deleteFile(ref.fullPath, fileRef.name);
        });
    }

    async function deleteFile(pathToFile, fileName) {
        const ref = storage.ref(pathToFile);
        const childRef = ref.child(fileName);
        await childRef.delete();
    }

    async function setDisplayName(name) {
        await user.updateProfile({ displayName: name });
    }

    return { setPhoto, setDisplayName };
}

export default useUserProfileUpdater;