export default function preloadImages(urls: Array<string>) {
    let imgPromises = [];
    if (urls || urls.length > 0) {
        for (let index = 0; index < urls.length; index++) {
            const link = urls[index];

            imgPromises.push(
                new Promise((Resolve, Reject) => {
                    let imgToPreload = new Image();
                    imgToPreload.onload = () => {
                        Resolve(imgToPreload.src);
                    };
                    imgToPreload.onerror = () => {
                        Reject();
                    }
                    imgToPreload.src = link;
                })
            );
        }
        return Promise.all(imgPromises);
    }
    else {
        return Promise.resolve(null);
    }
}