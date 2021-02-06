import Fuse from 'fuse.js';

export default function filterPostListItemsWithFuse(array: ?Array<Object>, phrase: ?string = null) {
    if (phrase === null || phrase.length === 0) return array;

    if (array) {
        const options = {
            shouldSort: true,
            tokenize: true,
            threshold: 0.3,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 3,
            keys: [
                "doc.note",
                "doc.locAdr",
                "doc.uName",
            ]
        };

        const docsLoaded = array.filter(item => item.doc !== null);
        const docsEmpty = array.filter(item => item.doc === null);

        const docsFiltered = new Fuse(docsLoaded, options).search(phrase);

        return [...docsEmpty, ...docsFiltered];
    }

    return array;
}