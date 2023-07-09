import s from "./slide-image.module.scss";
import reactIcon from "../../pictures/React-icon.svg.png";
import mobxIcon from "../../pictures/mobx-icon-1024x1024-c9qpjcmj.png";
import reduxIcon from "../../pictures/redux-icon.png";
import js from "../../pictures/js.png";
import ts from "../../pictures/ts.png";
import styledComponent from "../../pictures/styled-components.png";
import webpack from "../../pictures/webpack.svg";
import rhf from "../../pictures/rhf.png";
import sass from "../../pictures/sass.png";
import mui from "../../pictures/mui.png";
import { observer } from "mobx-react";
import { StatusModal } from "layout/store/store";
export const SlideImage = observer(() => {
	const statusModal = StatusModal.statusModal;
	return (
		<>
			{!statusModal && (
				<div className={s.wrapper}>
					<div className={s.container}>
						<img src={mobxIcon} alt="mobxIcon" />
						<img src={reactIcon} alt="reactIcon" />
						<img src={reduxIcon} alt="reduxIcon" />
						<img src={js} alt="js" />
						<img src={ts} alt="ts" />
						<img src={styledComponent} alt="styledComponent" />
						<img src={webpack} alt="webpack" />
						<img src={rhf} alt="react hook form" />
						<img src={sass} alt="sass" />
						<img src={mui} alt="mui" />
					</div>
				</div>
			)}
		</>
	);
});
