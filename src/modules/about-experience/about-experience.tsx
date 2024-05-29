import s from "./about-experience.module.scss";

import { Job } from "./about-experience.constants";
import { ItemJob, NewItemJob } from "./components";
import { useTranslation } from "react-i18next";

export const AboutExperience = () => {
	const { t } = useTranslation();
	return (
		<div className={s.wrapper}> 
			<div className={s.content}>
				<h1 className={s.header}>{t("My experience")}</h1>
				<div className={s.listItem}>
					<NewItemJob date={"Jule 2023 - Now"} description={"Layout and development of new functionality in the main application, development of the admin panel. Involved in migration of an existing application to NextJS, development of a common UI-kit on TW for two applications. Rewrote the main application from JS to TS."} nameJob={"Vision Antidetect"} index={-1} listReq={['Layout and development of new functionality', 'Application support and development of new related projects', 'Refactoring existing code', 'Designing new applications', "Code review"]} listStack={['React', 'NextJS', 'Mobx', 'Redux toolkit', 'MUI', 'Tailwind', 'styled-components']}  />
					{Job.map((element, index) => (
						<ItemJob key={index} {...element} index={index} />
					))}
				</div>
			</div>
		</div>
	);
};
