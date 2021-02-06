import useAppStore from "./useAppStore";

function useSettingsButtonNavigationHandler() {
    const { appStore, appViews } = useAppStore();

    function handle() {
        appStore.appState.appView = appViews.SETTINGS;
    }

    return { handle };
}

export default useSettingsButtonNavigationHandler;