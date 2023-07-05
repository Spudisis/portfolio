import { InfoProject } from "modules";
import React from "react";
export const ProjectInfo = () => {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return <InfoProject />;
};
