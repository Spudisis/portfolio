import { Routes as RoutesWrap, Route, BrowserRouter } from "react-router-dom";
import { PATHS } from "./paths-pages";
import { AboutMe, Main, MyProjects, NotFound, ProjectInfo } from "pages";
import { Header, NavHref } from "layout";
import s from "./routes.module.scss";
export const Routes = () => {
	return (
		<BrowserRouter>
			<Header />
			<NavHref />
			<div className={s.wrapperPages}>
				<RoutesWrap>
					<Route path={PATHS.MAIN} element={<Main />} />
					<Route path={PATHS.ABOUTME} element={<AboutMe />} />
					<Route path={PATHS.PROJECTS} element={<MyProjects />} />
					<Route path={PATHS.PROJECT} element={<ProjectInfo />} />
					<Route path="*" element={<NotFound />} />
				</RoutesWrap>
			</div>
		</BrowserRouter>
	);
};
