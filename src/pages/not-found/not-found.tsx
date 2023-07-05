import s from "./not-found.module.scss";
import { useTranslation } from "react-i18next";

export const NotFound = () => {
	const { t } = useTranslation();
	return <div className={s.blockCenter}>{t("notFound")}</div>;
};
