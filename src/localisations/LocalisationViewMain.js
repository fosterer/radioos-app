import React from 'react';

const SearchFindPlaceEN = () => (
    'Find a place...'
)

const SearchFindPlacePL = () => (
    'Znajdź miejsce...'
)

const SearchFindPlaceOrTagsEN = () => (
    'Place or #tags...'
)

const SearchFindPlaceOrTagsPL = () => (
    'Miejsce lub #tagi...'
)

const EmptyFilterEN = () => (
    <span>Hmm, try something else...</span>
)

const EmptyFilterPL = () => (
    <span>Hmm, spróbuj czegoś innego...</span>
)

const EmptyLocationEN = () => (
    <span>Hmm, try somewhere else...</span>
)

const EmptyLocationPL = () => (
    <span>Hmm, spróbuj gdzie indziej...</span>
)

const LocationNotFoundEN = () => (
    <span>Hmm, we did not recognize this place...</span>
)

const LocationNotFoundPL = () => (
    <span>Hmm, nie rozpoznaliśmy takiego miejsca...</span>
)

const GeolocationFailedEN = () => (
    <span>Location of your device was not accessible...</span>
)

const GeolocationFailedPL = () => (
    <span>Lokalizacja Twojego urządzenia nie była dostępna...</span>
)

const LocalisationViewMain = {};
LocalisationViewMain[['searchFindPlace', 'en']] = SearchFindPlaceEN();
LocalisationViewMain[['searchFindPlace', 'pl']] = SearchFindPlacePL();
LocalisationViewMain[['searchFindPlaceOrTags', 'en']] = SearchFindPlaceOrTagsEN();
LocalisationViewMain[['searchFindPlaceOrTags', 'pl']] = SearchFindPlaceOrTagsPL();
LocalisationViewMain[['emptyFilter', 'en']] = <EmptyFilterEN />;
LocalisationViewMain[['emptyFilter', 'pl']] = <EmptyFilterPL />;
LocalisationViewMain[['emptyLocation', 'en']] = <EmptyLocationEN />;
LocalisationViewMain[['emptyLocation', 'pl']] = <EmptyLocationPL />;
LocalisationViewMain[['locationNotFound', 'en']] = <LocationNotFoundEN />;
LocalisationViewMain[['locationNotFound', 'pl']] = <LocationNotFoundPL />;
LocalisationViewMain[['geolocationFailed', 'en']] = <GeolocationFailedEN />;
LocalisationViewMain[['geolocationFailed', 'pl']] = <GeolocationFailedPL />;

export default LocalisationViewMain;