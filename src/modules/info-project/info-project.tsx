import { useParams } from "react-router";
import s from "./info-project.module.scss";
import { useTranslation } from "react-i18next";

import { images } from "./info-project.constants";
import { Slider } from "./components";

export const InfoProject = () => {
	const { id } = useParams();
	const { t } = useTranslation();

	if (!id) {
		return <div></div>;
	}
	const obj = images[Number(id) - 1];
	return (
		<div className={s.wrapper}>
			<div className={s.content}>
				<h1 className={s.header}>{t(`projects.project.${id}.name`)}</h1>
				<div className={s.project}>
					<div>
						<div className={s.description}>{t(`projects.project.${id}.description`)}</div>
						<div className={s.buttonsHref}>
							<a href={obj.gitHub} className={s.href} target="_blank">
								GitHub
							</a>
							{obj.visit && (
								<a href={obj.visit} className={s.href} target="_blank">
									{t(`projects.visit`)}
								</a>
							)}
						</div>
					</div>
					<div className={s.imagesList}>
						{obj.images.map((elem, index) => (
							<Slider img={elem} key={index} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
