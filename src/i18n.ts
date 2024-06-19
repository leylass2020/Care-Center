import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import global_en from './translation/english/general.json';
import global_ar from './translation/arabic/general.json';
i18n.use(initReactI18next).init({
    resources: {
        en: { 
            global:global_en
        },
        ar: {
            global:global_ar
          },
    }, 
    lng: "en", 
});