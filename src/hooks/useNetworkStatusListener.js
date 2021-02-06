import React from 'react';
import { useSnackbar } from 'notistack';
import { fromEvent } from 'rxjs';
import useLocalisation from './useLocalisation';
import LocalisationApp from '../localisations/LocalisationApp';
import useAppStore from './useAppStore';

function useNetworkStatusListener() {
    const { appStore } = useAppStore();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const Offline = useLocalisation(LocalisationApp, 'offline');
    const displayNoInternetSnack = () => enqueueSnackbar(<Offline />, { key: 'no-internet', variant: 'warning', persist: true });

    function listen() {
        const isOnline = navigator.onLine;

        if (isOnline === false) { displayNoInternetSnack() };

        fromEvent(window, 'online').subscribe(() => {
            appStore.appState.appOnline = true;
            closeSnackbar('no-internet');
        });

        fromEvent(window, 'offline').subscribe(() => {
            appStore.appState.appOnline = false;
            displayNoInternetSnack();
        });

        appStore.appState.appOnline = isOnline;
    }

    return { listen };
}

export default useNetworkStatusListener;