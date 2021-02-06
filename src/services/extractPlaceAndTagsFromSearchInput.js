
export default function extractPlaceAndTagsFromSearchInput(inputValue) {
    const indexOfHash = inputValue.indexOf("#");
    const placeDirtyString = indexOfHash === -1 ?
        inputValue.trim() : inputValue.slice(0, indexOfHash).trim();
    const tagsDirtyString = indexOfHash === -1 ?
        "" : inputValue.replace(placeDirtyString, "").replace(/#/g, "").trim();

    return { placeDirtyString, tagsDirtyString }
}