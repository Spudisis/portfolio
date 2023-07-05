import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import s from "./nav-links.module.scss";
import { PATHS } from "routes/paths-pages";
export const NavLinks = ({ click }: { click: (b: boolean) => void }) => {
	const { t } = useTranslation();

	const checkActive = (isActive: boolean) => {
		return s.link + " " + (isActive ? s.active : s.inactive);
	};
	return (
		<nav className={s.listLink}>
			<NavLink to={PATHS.MAIN} className={({ isActive }) => checkActive(isActive)} onClick={() => click(false)}>
				{t("header.main")}
			</NavLink>

			<NavLink to={PATHS.ABOUTME} className={({ isActive }) => checkActive(isActive)} onClick={() => click(false)}>
				{t("header.aboutMe")}
			</NavLink>

			<NavLink to={PATHS.PROJECTS} className={({ isActive }) => checkActive(isActive)} onClick={() => click(false)}>
				{t("header.projects")}
			</NavLink>
		</nav>
	);
};
