import React from "react";
import { useTranslation } from "react-i18next";
import s from "./change-language.module.scss";
import i18next from "i18next";

export const ChangeLanguage = () => {
	const { i18n } = useTranslation();
	const locale = () => i18next.language || (window.localStorage.i18nextLng as string);
	console.log(locale());
	const [activeCheckbox, setActiveCheckbox] = React.useState(locale() === "en");

	const changeLanguage = (language: string) => {
		i18n.changeLanguage(language);
	};

	const handleClick = (active: boolean) => {
		if (!active) {
			changeLanguage("ru");
		} else {
			changeLanguage("en");
		}
		setActiveCheckbox(active);
	};

	return (
		<button className={s.button} onClick={() => handleClick(!activeCheckbox)}>
			{activeCheckbox ? "EN" : "RU"}
		</button>
	);
};
