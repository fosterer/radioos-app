//@flow
import { store } from '@risingstack/react-easy-state';

const appStates = {
    IS_STARTING: 'IS_STARTING',
    IS_RUNNING: 'IS_RUNNING'
}

const appViews = {
    STARTING: 'STARTING',
    RELOADING: 'RELOADING',
    MAIN: 'MAIN',
    HELP: 'HELP',
    SETTINGS: 'SETTINGS',
    SERVICES_NOT_AVAILABLE: 'SERVICES_NOT_AVAILABLE',
    LINK_SIGNIN_CONFIRM_EMAIL: 'LINK_SIGNIN_CONFIRM_EMAIL',
    LINK_SIGNIN_ERROR: 'LINK_SIGNIN_ERROR'
}

const viewMainStates = {
    WELCOME: 'WELCOME',
    POST_LIST: 'POST_LIST',
    LOCATION_NOT_FOUND: 'LOCATION_NOT_FOUND',
    GEOLOCATION_FAILED: 'GEOLOCATION_FAILED'
}

const loginFlowStates = {
    READY: 'READY',
    LINK_SENT: 'LINK_SENT',
};

const appStore = store({
    appState: {
        appOnline: false,
        appUserAreaPoint: null,  //TODO: refresh this every... 15 min. (?)
        appState: appStates.IS_STARTING,
        appView: appViews.STARTING,
        processingData: false
    },
    viewMainState: {
        screen: viewMainStates.WELCOME,
        isLoading: false,
        searchBoxFocused: false,
        searchBoxPlaceholder: 'searchFindPlace',  //TODO: move to local state of ToolbarSearchBox thing
        searchBoxInput: "",
        geoPoint: null,
        placeString: "",
        tagsString: "",
        postRadius: 50.0,
        postSubscriptionClearCallback: null,
        posts: [],
    },
    loginState: {
        email: '',
        loginFlowState: loginFlowStates.READY,
    }
});

export { appStates, appViews, viewMainStates, loginFlowStates };
export default appStore;