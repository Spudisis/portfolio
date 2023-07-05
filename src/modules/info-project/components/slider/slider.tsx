import { useState } from "react";
import s from "./slider.module.scss";
export const Slider = ({ img }: { img: string }) => {
	const [statusLoad, setStatusLoad] = useState(true);
	const [openImage, setOpenImage] = useState(false);

	return (
		<button
			className={`${s.button} ${statusLoad ? s.loading : ""} ${openImage ? s.openImage : ""}`}
			onClick={() => setOpenImage(!openImage)}
		>
			<img src={img} alt="" onLoad={() => setStatusLoad(false)} className={`${s.image} ${openImage ? s.open : ""}`} />
		</button>
	);
};
