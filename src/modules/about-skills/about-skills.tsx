import s from "./about-skills.module.scss";
import { useTranslation } from "react-i18next";
import { skills } from "./about-skills.constants";

export const AboutSkills = () => {
	const { t } = useTranslation();

	return (
		<div className={s.wrapper}>
			<div className={s.content}>
				<h1 className={s.header}>{t("aboutMeSkills.header")}</h1>
				<ul className={s.skillList}>
					{skills.map((elem, index) => (
						<li className={s.skill} key={index}>
							{elem.name}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
