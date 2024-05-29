import s from "./about-me.module.scss";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
export const AboutMeGeneral = () => {
	const { t } = useTranslation();
	const { ref, inView } = useInView({
		threshold: 0,
		triggerOnce: true
	});
	return (
		<div className={s.wrapper}>
			<div ref={ref} className={`${s.content} ${inView && s.animation}`}>
				<h1 className={s.header}>{t("About me")}</h1>
				<p className={s.text}>{t("I am Alexander. I live in Dzerzhinsk, Nizhny Novgorod region. I started immersing myself in IT 4 years ago from learning C#, later moved to frontend and a year later started my career as a layout designer on a freelance exchange.")}</p>
				<p className={s.text}>{t("Studied new technologies and later switched to React. I found my first job in a team, where I improved my skills in both development and communication skills in joint development to achieve common goals. He has also worked on various projects ranging from simple Django template development to a large website builder.")}</p>
				<p className={s.text}>{t("I have a bachelor's degree in space information systems and technologies from NNSTU. Currently, I continue to study new technologies and best practices to write better, more maintainable and readable code. Open for new various offers for full-time work in a friendly team :). Always in touch.")}</p>
			</div>
		</div>
	);
};
