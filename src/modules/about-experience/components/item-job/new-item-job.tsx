import React from "react";
import s from "./item-job.module.scss";
import { useTranslation } from "react-i18next";
import gradientDark from "../../pictures/meta-gradient-dark.png";
import gradientLight from "../../pictures/meta-gradient.png";
import { ThemeContext } from "styles/provider/context";
import { useInView } from "react-intersection-observer";
import { useWindowSize } from "utils/useWindowSize";
export const NewItemJob = ({
	date,
    description,
    nameJob,
	listReq,
	listStack,
	index,
}: {
    date:string,
    description: string,
    nameJob:string,
	index: number;
	listReq: string[];
	listStack: string[];
}) => {
	const { theme } = React.useContext(ThemeContext) as { theme: string };
	const { width } = useWindowSize();

	const { t } = useTranslation();
	const { ref, inView } = useInView({
		threshold: 0,
	});

	return (
		<div className={s.item} ref={ref}>
			<div
				className={`${s.dateName} ${index % 2 === 1 ? s.dateNameEven : ""} ${
					inView ? (index % 2 === 1 && width > 960 ? s.animationInfo : s.animationDateName) : ""
				}`}
				style={{
					backgroundImage: `url(${ theme === "dark" ? gradientDark : gradientLight})`,
				}}
			>
				<div className={s.wrapper}>
					<div className={s.date}>{t(date)}</div>
					<div className={s.description}>{t(description)}</div>
				</div>
			</div>
			<div
				className={`${s.info} ${index % 2 === 1 ? s.infoEven : ""} ${
					inView ? (index % 2 === 1 && width > 960 ? s.animationDateName : s.animationInfo) : ""
				}`}
			>
				<h3 className={s.nameJob}>{t(nameJob)}</h3>
				<div className={s.infoAboutJob}>
					<div className={s.list}>
						<h4 className={s.nameSectionList}>{t('Job responsibilities')}</h4>
						<ul className={s.sectionList}>
							{listReq.map((item, index) => (
								<li key={index}>{t(item)}</li>
							))}
						</ul>
					</div>
					<div className={s.list}>
						<h4 className={s.nameSectionList}>{t(`Development stack`)}</h4>
						<ul className={s.sectionList}>
							{listStack.map((item, index) => (
								<li key={index}>{t(item)}</li>
							))}
						</ul>
					</div>
					
				</div>
			</div>
		</div>
	);
};
