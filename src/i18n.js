import { initReactI18next } from "react-i18next";
import { uz } from "./lang/uz";
import { ru } from "./lang/ru";
import i18n from "i18next";
import { en } from "./lang/en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    uz: {
      translation: uz,
    },
    ru: {
      translation: ru,
    },
  },

  lng: localStorage.getItem("language") || "en",

  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
