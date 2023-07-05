import s from "./hamburger.module.scss";
export const Hamburger = ({ click, bool }: { click: (boolean: boolean) => void; bool: boolean }) => {
	return (
		<div className={s.hamburger_lines} onClick={() => click(!bool)}>
			<span className={s.line}></span>
			<span className={s.line}></span>
			<span className={s.line}></span>
		</div>
	);
};
