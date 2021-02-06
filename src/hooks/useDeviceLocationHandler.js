import getLocationFromNavigator from '../services/getLocationFromNavigator';
import logMessage from '../services/logMessage';
import useFirestorePostMarkers from './useFirestorePostMarkers';
import useAppStore from './useAppStore';

function useDeviceLocationClickHandler() {
    const markers = useFirestorePostMarkers();
    const { appStore, viewMainStates } = useAppStore();

    async function handle() {
        try {
            appStore.viewMainState.isLoading = true;

            const locationFromNavigator = await getLocationFromNavigator();
            const { clearMarkersSubscriptionCallback, initialPosts } = await markers.subscribe(locationFromNavigator);

            appStore.viewMainState = {
                ...appStore.viewMainState,
                screen: viewMainStates.POST_LIST,
                geoPoint: locationFromNavigator,
                placeString: "",
                tagsString: "",
                isLoading: false,
                postSubscriptionClearCallback: clearMarkersSubscriptionCallback,
                posts: initialPosts
            }
        } catch (error) {
            logMessage('useDeviceLocationClickHandler.handle', error);
            appStore.viewMainState = {
                ...appStore.viewMainState,
                screen: viewMainStates.GEOLOCATION_FAILED,
                geoPoint: null,
                placeString: "",
                tagsString: "",
                isLoading: false,
                postSubscriptionClearCallback: null,
                posts: []
            }
        }
    }

    return { handle }
}

export default useDeviceLocationClickHandler;