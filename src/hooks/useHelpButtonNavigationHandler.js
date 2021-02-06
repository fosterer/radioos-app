import useAppStore from "./useAppStore";

function useHelpButtonNavigationHandler() {
    const { appStore, appViews } = useAppStore();

    function handle() {
        appStore.appState.appView = appViews.HELP;
    }

    return { handle };
}

export default useHelpButtonNavigationHandler;