import { useTranslation } from "react-i18next";
import { ObjectType } from "../../list-projects.types";

import s from "./project.module.scss";
import { Link } from "react-router-dom";
import { PATHS } from "routes/paths-pages";
export const Project = ({ id, preview }: ObjectType) => {
	const { t } = useTranslation();
	return (
		<div className={s.cart}>
			<img className={s.image} src={preview} height={200} alt="screen site" />
			<h3 className={s.name}>{t(`projects.project.${id}.name`)}</h3>
			<Link to={PATHS.PROJECTS + "/" + id} relative="path" className={s.button}>
				{t("More")}
			</Link>
		</div>
	);
};
