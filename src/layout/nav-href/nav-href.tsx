import s from "./nav-href.module.scss";
import gitHub from "./pictures/git.png";
import tg from "./pictures/tg.webp";
import email from "./pictures/gmail.png";
export const NavHref = () => {
	return (
		<nav className={s.navBar}>
			<ul className={s.list}>
				<li className={s.item_link}>
					<a href="https://github.com/Spudisis" className={s.link} target="_blank">
						<img src={gitHub} alt="icon github" className={s.image} />
					</a>
				</li>
				<li className={s.item_link}>
					<a href="https://t.me/Amevora" className={s.link} target="_blank">
						<img src={tg} alt="icon tg" className={s.image} />
					</a>
				</li>
				<li className={s.item_link}>
					<img src={email} alt="icon gmail" className={s.image} />
					<div className={s.email}>alekasisbb@gmail.com</div>
				</li>
			</ul>
		</nav>
	);
};
