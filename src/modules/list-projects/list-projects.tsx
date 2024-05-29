import s from "./list-projects.module.scss";
import { useTranslation } from "react-i18next";
import { projects } from "../../constants/list-projects.constants";
import { Project } from "./components";
export const ListProjects = () => {
	const { t } = useTranslation();
	return (
		<div className={s.wrapper}>
			<div className={s.content}>
				<h1 className={s.header}>{t("My projects")}</h1>
				<div className={s.listProjects}>
					{projects.map((elem) => (
						<Project key={elem.id} {...elem} />
					))}
					<Project id={-1} preview={'/github.svg'} github href="https://github.com/Spudisis" />
				</div>
			</div>
		</div>
	);
};
