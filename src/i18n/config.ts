import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en-trans.json";
import translationRU from "./locales/ru-trans.json";

const resources = {
	en: {
		translation: translationEN,
	},
	ru: {
		translation: translationRU,
	},
};

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: "en",
		supportedLngs: ["en", "ru"],

		debug: true,
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
