export default function determineChangesInPlaceAndTagsStrings(
    placeDirtyString,
    tagsDirtyString,
    placeString,
    tagsString) {

    const newPlace = placeDirtyString !== placeString && placeDirtyString.length > 0;  //placeDirtyString.length > 0 makes sense because user may want to clear the box before they type something new
    const newTags = tagsDirtyString !== tagsString;

    return { newPlace, newTags }
}