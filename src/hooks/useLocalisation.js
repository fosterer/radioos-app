import { useContext } from 'react';
import { LocalisationContext } from '../providers/Localisation';

function useLocalisation(source, fragment) {
    const appLang = useContext(LocalisationContext);

    return () => source[[fragment, appLang]];
}

export default useLocalisation;