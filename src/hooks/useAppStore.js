import appStore, { appStates, appViews, viewMainStates, loginFlowStates } from '../appStore';

function useAppStore() {
    return { appStore, appStates, appViews, viewMainStates, loginFlowStates };
}

export default useAppStore;