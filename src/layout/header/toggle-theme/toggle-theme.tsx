import s from "./toggle-theme.module.scss";
export const ToggleTheme = ({ value, onChange }: { value: boolean; onChange: any }) => {
	return (
		<div>
			<input
				type="checkbox"
				className={s.hide_checkbox}
				checked={!value}
				id="hide-checkbox"
				onClick={onChange}
				readOnly
			/>
			<label htmlFor="hide-checkbox" className={s.toggle}>
				<span className={s.toggle_button}>
					<span className={`${s.crater} ${s.crater_1}`}></span>
					<span className={`${s.crater} ${s.crater_2}`}></span>
					<span className={`${s.crater} ${s.crater_3}`}></span>
					<span className={`${s.crater} ${s.crater_4}`}></span>
					<span className={`${s.crater} ${s.crater_5}`}></span>
					<span className={`${s.crater} ${s.crater_6}`}></span>
					<span className={`${s.crater} ${s.crater_7}`}></span>
				</span>
				<span className={`${s.star} ${s.star_1}`}></span>
				<span className={`${s.star} ${s.star_2}`}></span>
				<span className={`${s.star} ${s.star_3}`}></span>
				<span className={`${s.star} ${s.star_4}`}></span>
				<span className={`${s.star} ${s.star_5}`}></span>
				<span className={`${s.star} ${s.star_6}`}></span>
				<span className={`${s.star} ${s.star_7}`}></span>
				<span className={`${s.star} ${s.star_8}`}></span>
			</label>
		</div>
	);
};
