import s from "./nav-href.module.scss";
import gitHub from "./pictures/git.png";
import gitHubWebp from "./pictures/git.webp";

import tg from "./pictures/tg.png";
import tgWebp from "./pictures/tg.webp";

import email from "./pictures/gmail.png";
import emailWebp from "./pictures/gmail.webp";

export const NavHref = () => {
	return (
		<nav className={s.navBar}>
			<ul className={s.list}>
				<li className={s.item_link}>
					<a href="https://github.com/Spudisis" className={s.link} target="_blank">
						<picture>
							<source srcSet={gitHubWebp} type="image/webp" />
							<img src={gitHub} alt="icon github" className={s.image} />
						</picture>
					</a>
				</li>
				<li className={s.item_link}>
					<a href="https://t.me/Amevora" className={s.link} target="_blank">
						<picture>
							<source srcSet={tgWebp} type="image/webp" />
							<img src={tg} alt="icon tg" className={s.image} />
						</picture>
					</a>
				</li>
				<li className={s.item_link}>
					<picture>
						<source srcSet={emailWebp} type="image/webp" />
						<img src={email} alt="icon gmail" className={s.image} />
					</picture>
					<div className={s.email}>alekasisbb@gmail.com</div>
				</li>
			</ul>
		</nav>
	);
};
