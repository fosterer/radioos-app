import { createContext } from 'react';

const supportedLangs = ['en', 'pl'];
const navlang = navigator.language.slice(0, 2);
const browserLanguage = supportedLangs.includes(navlang) ? navlang : 'en';

const LocalisationContext = createContext();
const LocalisationProvider = LocalisationContext.Provider;

export { LocalisationContext, browserLanguage };
export default LocalisationProvider;