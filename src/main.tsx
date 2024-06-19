import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import i18n from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";

import global_en from "./translation/english/general.json";
import global_ar from "./translation/arabic/general.json";

i18n.use(initReactI18next).init({
  interpolation: {
    escapeValue: false,
  },
  lng: "en",
  resources: {
    en: {
      general: global_en,
    },
    ar: {
      general: global_ar,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
