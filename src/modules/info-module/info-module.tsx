import s from "./info-module.module.scss";
import { useTranslation } from "react-i18next";
import { SlideImage } from "./components";

export const InfoModule = () => {
	const { t } = useTranslation();
	return (
		<div className={s.wrapper}>
			<SlideImage />
			<div className={s.info}>
				<h3 className={s.hello}>{t("infoBlock.hello")}</h3>
				<h1 className={s.name}>{t("infoBlock.name")}</h1>
				<span className={s.nextInfo}>{t("infoBlock.nextInfo")}</span>
				<h2 className={s.frontend}>{t("infoBlock.frontend")}</h2>
			</div>
		</div>
	);
};
