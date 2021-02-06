import React from 'react';

const UpdatePendingEN = () => (
    <span>App update is waiting!</span>
)

const UpdatePendingPL = () => (
    <span>Aktualizacja dostępna!</span>
)

const RestartEN = () => (
    <span>Restart</span>
)

const RestartPL = () => (
    <span>Restart</span>
)

const OfflineEN = () => (
    <span>No internet...</span>
)

const OfflinePL = () => (
    <span>Brak internetu...</span>
)

const ServicesNotAvailableEN = () => (
    <span>Services are temporairly unavailable</span>
)

const ServicesNotAvailablePL = () => (
    <span>Usługi są chwilowo niedostępne</span>
)

const TryingToConnectEN = () => (
    <span>We are trying to connect...</span>
)

const TryingToConnectPL = () => (
    <span>Próbujemy się połączyć...</span>
)

const LocalisationApp = {};
LocalisationApp[['updatePending', 'en']] = <UpdatePendingEN />;
LocalisationApp[['updatePending', 'pl']] = <UpdatePendingPL />;
LocalisationApp[['restart', 'en']] = <RestartEN />;
LocalisationApp[['restart', 'pl']] = <RestartPL />;
LocalisationApp[['offline', 'en']] = <OfflineEN />;
LocalisationApp[['offline', 'pl']] = <OfflinePL />;
LocalisationApp[['servicesNotAvailable', 'en']] = <ServicesNotAvailableEN />;
LocalisationApp[['servicesNotAvailable', 'pl']] = <ServicesNotAvailablePL />;
LocalisationApp[['tryingToConnect', 'en']] = <TryingToConnectEN />;
LocalisationApp[['tryingToConnect', 'pl']] = <TryingToConnectPL />;

export default LocalisationApp;