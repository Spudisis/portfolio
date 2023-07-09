import s from "./header.module.scss";
import { ToggleTheme } from "./toggle-theme";
import { ThemeContext, themes } from "styles/provider/context";
import { ChangeLanguage } from "./change-language";
import { NavLinks } from "./nav-links";
import React from "react";
import { Hamburger } from "./hamburger";
import { StatusModal } from "layout/store/store";

export const Header = () => {
	const [modalActive, setModalActive] = React.useState(false);

	React.useEffect(() => {
		StatusModal.changeStatusModal(modalActive);
	}, []);
	const toggleContextChange = (
		<ThemeContext.Consumer>
			{({ theme, setTheme }: any) => (
				<ToggleTheme
					onChange={() => {
						if (theme === themes.light) setTheme(themes.dark);
						if (theme === themes.dark) setTheme(themes.light);
					}}
					value={theme === themes.dark}
				/>
			)}
		</ThemeContext.Consumer>
	);
	return (
		<header className={s.header}>
			<>{toggleContextChange}</>
			<ChangeLanguage />
			<div className={s.listLinks}>
				<NavLinks click={setModalActive} />
			</div>
			<div className={s.menu}>
				<Hamburger click={setModalActive} bool={modalActive} />
				{modalActive && (
					<div className={s.modal}>
						<button
							className={s.close}
							tabIndex={4}
							onClick={() => setModalActive(false)}
							aria-label="close button"
						></button>
						<NavLinks click={setModalActive} />
					</div>
				)}
			</div>
		</header>
	);
};
