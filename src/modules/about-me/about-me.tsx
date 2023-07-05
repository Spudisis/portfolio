import s from "./about-me.module.scss";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
export const AboutMeGeneral = () => {
	const { t } = useTranslation();
	const { ref, inView } = useInView({
		threshold: 0,
	});
	return (
		<div className={s.wrapper}>
			<div ref={ref} className={`${s.content} ${inView && s.animation}`}>
				<h1 className={s.header}>{t("aboutMeGeneral.header")}</h1>
				<p className={s.text}>{t("aboutMeGeneral.me")}</p>
				<p className={s.text}>{t("aboutMeGeneral.me2")}</p>
				<p className={s.text}>{t("aboutMeGeneral.me3")}</p>
			</div>
		</div>
	);
};
