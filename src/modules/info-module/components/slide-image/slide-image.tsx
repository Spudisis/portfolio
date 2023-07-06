import s from "./slide-image.module.scss";

import mobxIcon from "../../pictures/mobx-icon-1024x1024-c9qpjcmj.png";
import mobxIconWebp from "../../pictures/mobx-icon-1024x1024-c9qpjcmj.webp";
import mobxIconAvif from "../../pictures/mobx-icon-1024x1024-c9qpjcmj.avif";

import reactIcon from "../../pictures/React-icon.svg.png";
import reactIconWebp from "../../pictures/React-icon.svg.webp";
import reactIconAvif from "../../pictures/React-icon.svg.avif";

import reduxIcon from "../../pictures/redux-icon.png";
import reduxIconWebp from "../../pictures/redux-icon.webp";
import reduxIconAvif from "../../pictures/redux-icon.avif";

import js from "../../pictures/js.png";
import jsWebp from "../../pictures/js.webp";
import jsAvif from "../../pictures/js.avif";

import ts from "../../pictures/ts.png";
import tsWebp from "../../pictures/ts.webp";
import tsAvif from "../../pictures/ts.avif";

import styledComponent from "../../pictures/styled-components.png";
import styledComponentWebp from "../../pictures/styled-components.webp";
import styledComponentAvif from "../../pictures/styled-components.avif";

import webpack from "../../pictures/webpack.svg";

import rhf from "../../pictures/rhf.png";
import rhfWebp from "../../pictures/rhf.webp";
import rhfAvif from "../../pictures/rhf.avif";

import sass from "../../pictures/sass.png";
import sassWebp from "../../pictures/sass.webp";
import sassAvif from "../../pictures/sass.avif";

import mui from "../../pictures/mui.png";
import muiWebp from "../../pictures/mui.webp";
import muiAvif from "../../pictures/mui.avif";

export const SlideImage = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.container}>
				<picture>
					<source srcSet={mobxIconWebp} type="image/webp" />
					<img src={mobxIcon} alt="mobxIcon" />
				</picture>
				<picture>
					<source srcSet={reactIconWebp} type="image/webp" />
					<img src={reactIcon} alt="reactIcon" />
				</picture>
				<picture>
					<source srcSet={reduxIconWebp} type="image/webp" />
					<img src={reduxIcon} alt="reduxIcon" />
				</picture>
				<picture>
					<source srcSet={jsWebp} type="image/webp" />
					<img src={js} alt="js" />
				</picture>
				<picture>
					<source srcSet={tsWebp} type="image/webp" />
					<img src={ts} alt="ts" />
				</picture>
				<picture>
					<source srcSet={styledComponentWebp} type="image/webp" />
					<img src={styledComponent} alt="styledComponent" />
				</picture>
				<img src={webpack} alt="webpack" />
				<picture>
					<source srcSet={rhfWebp} type="image/webp" />
					<img src={rhf} alt="react hook form" />
				</picture>

				<picture>
					<source srcSet={sassWebp} type="image/webp" />
					<img src={sass} alt="sass" />
				</picture>
				<picture>
					<source srcSet={muiWebp} type="image/webp" />
					<img src={mui} alt="mui" />
				</picture>
			</div>
		</div>
	);
};
