import React from "react";
import s from "./item-job.module.scss";
import { useTranslation } from "react-i18next";
import gradientDark from "../../pictures/meta-gradient-dark.png";
import gradientLight from "../../pictures/meta-gradient.png";
import { ThemeContext } from "styles/provider/context";
import { useInView } from "react-intersection-observer";
import { useWindowSize } from "utils/useWindowSize";
export const ItemJob = ({
	name,
	countReq,
	countStack,
	index,
}: {
	name: string;
	index: number;
	countReq: number;
	countStack: number;
}) => {
	const { theme } = React.useContext(ThemeContext) as { theme: string };
	const { width } = useWindowSize();
	console.log(width);
	const { t } = useTranslation();
	const { ref, inView } = useInView({
		threshold: 0,
	});
	const masReq = new Array(countReq).fill("a");
	const masStack = new Array(countStack).fill("a");
	return (
		<div className={`${s.item}`} ref={ref}>
			<div
				className={`${s.dateName} ${index % 2 === 1 ? s.dateNameEven : ""} ${
					inView ? (index % 2 === 1 && width > 960 ? s.animationInfo : s.animationDateName) : ""
				}`}
				style={{
					backgroundImage: theme === "dark" ? `url(${gradientDark})` : `url(${gradientLight})`,
				}}
			>
				<div className={s.wrapper}>
					<div className={s.date}>{t(`job.${name}.date`)}</div>
					<div className={s.description}>{t(`job.${name}.description`)}</div>
				</div>
			</div>
			<div
				className={`${s.info} ${index % 2 === 1 ? s.infoEven : ""} ${
					inView ? (index % 2 === 1 && width > 960 ? s.animationDateName : s.animationInfo) : ""
				}`}
			>
				<h3 className={s.nameJob}>{t(`job.${name}.nameJob`)}</h3>
				<div className={s.infoAboutJob}>
					<div className={s.list}>
						<h4 className={s.nameSectionList}>{t(`job.jobResponse`)}</h4>
						<ul className={s.sectionList}>
							{masReq.map((_, index) => (
								<li key={index}>{t(`job.${name}.requiredJob.${index + 1}`)}</li>
							))}
						</ul>
					</div>
					<div className={s.list}>
						<h4 className={s.nameSectionList}>{t(`job.developStack`)}</h4>
						<ul className={s.sectionList}>
							{masStack.map((_, index) => (
								<li key={index}>{t(`job.${name}.stack.${index + 1}`)}</li>
							))}
						</ul>
					</div>
					{t(`job.${name}.achievepments`) && (
						<div className={s.achieve}>
							<span>{t(`job.achievements`)}:&nbsp;</span>
							{t(`job.${name}.achievepments`)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
