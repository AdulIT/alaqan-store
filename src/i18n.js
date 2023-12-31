import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(Backend).use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    backend: {
      // translation file path
      loadPath: '/assets/i18n/{{ns}}/{{lng}}.json'
    },
    // disabled in production
    debug: false,
    fallbackLng: 'en',
    ns: ["common"],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      formatSeparator: ',',
    },
    react:
    {
      useSuspense: true,
    },
    // resources: {
    //   en: {
    //     translation: {
    //       // here we will place our translations...
    //     }
    //   }
    // }
  })

export default i18n