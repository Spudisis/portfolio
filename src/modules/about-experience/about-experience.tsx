import s from "./about-experience.module.scss";

import { Job } from "./about-experience.constants";
import { ItemJob } from "./components";
import { useTranslation } from "react-i18next";
export const AboutExperience = () => {
	const { t } = useTranslation();
	return (
		<div className={s.wrapper}>
			<div className={s.content}>
				<h1 className={s.header}>{t("aboutMeExp.header")}</h1>
				<div className={s.listItem}>
					{Job.map((element, index) => (
						<ItemJob key={index} {...element} index={index} />
					))}
				</div>
			</div>
		</div>
	);
};
