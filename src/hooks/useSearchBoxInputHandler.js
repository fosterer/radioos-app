import useFirestorePostMarkers from "./useFirestorePostMarkers";
import extractPlaceAndTagsFromSearchInput from "../services/extractPlaceAndTagsFromSearchInput";
import determineChangesInPlaceAndTagsStrings from "../services/determineChangesInPlaceAndTagsStrings";
import getGeoPointBasedOnSearchInput from "../services/getGeoPointBasedOnSearchInput";
import logMessage from "../services/logMessage";
import useAppStore from "./useAppStore";

function useSearchBoxInputHandler() {
    const markers = useFirestorePostMarkers();
    const { appStore, viewMainStates } = useAppStore();

    async function handle(inputValue) {

        if (appStore.viewMainState.searchBoxInput === inputValue) return;
        appStore.viewMainState.searchBoxInput = inputValue;

        const dirtyStrings = extractPlaceAndTagsFromSearchInput(inputValue);
        const { newPlace, newTags } =
            determineChangesInPlaceAndTagsStrings(
                dirtyStrings.placeDirtyString,
                dirtyStrings.tagsDirtyString,
                appStore.viewMainState.placeString,
                appStore.viewMainState.tagsString
            );

        if (!newPlace && newTags) {
            appStore.viewMainState = {
                ...appStore.viewMainState,
                tagsString: dirtyStrings.tagsDirtyString,
                searchBoxInput: inputValue
            }
        }

        if (newPlace) {
            try {
                appStore.viewMainState.isLoading = true;

                const placePoint = await getGeoPointBasedOnSearchInput(dirtyStrings.placeDirtyString, appStore.appState.appUserAreaPoint);
                const { clearMarkersSubscriptionCallback, initialPosts } = await markers.subscribe(placePoint);

                appStore.viewMainState = {
                    ...appStore.viewMainState,
                    screen: viewMainStates.POST_LIST,
                    geoPoint: placePoint,
                    searchBoxInput: inputValue,
                    placeString: dirtyStrings.placeDirtyString,
                    tagsString: dirtyStrings.tagsDirtyString,
                    isLoading: false,
                    postSubscriptionClearCallback: clearMarkersSubscriptionCallback,
                    posts: initialPosts
                };
            } catch (error) {
                logMessage('handleSearchBoxInput', error, 'info', dirtyStrings);
                appStore.viewMainState = {
                    ...appStore.viewMainState,
                    screen: viewMainStates.LOCATION_NOT_FOUND,
                    geoPoint: null,
                    searchBoxInput: "",
                    placeString: "",
                    tagsString: "",
                    isLoading: false,
                    postSubscriptionClearCallback: null,
                    posts: []
                };
            }
        }
    }

    return { handle }
}

export default useSearchBoxInputHandler;