import s from "./nav-href.module.scss";
import gitHub from "./pictures/git.png";
import gitHubWebp from "./pictures/git.webp";
import { Icon } from '@iconify/react';
import tg from "./pictures/tg.png";
import tgWebp from "./pictures/tg.webp";
import React from 'react'
import email from "./pictures/gmail.png";
import emailWebp from "./pictures/gmail.webp";

export const NavHref = () => {
	const timer = React.useRef<null | NodeJS.Timer>(null)
	const [hasCopy, setHasCopy] = React.useState(false)

	const handleCopy = ()=> {
		if (timer.current){
			clearTimeout(timer.current)
		}
		navigator.clipboard.writeText('alekasisbb@gmail.com')
		setHasCopy(true)
		timer.current = setTimeout(()=> {
			setHasCopy(false)
		}, 1000)
	}
	

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
					<a href='mailto:alekasisbb@gmail.com' className={s.hrefEmail}>
						<picture>
							<source srcSet={emailWebp} type="image/webp" />
							<img src={email} alt="icon gmail" className={s.image} />
						</picture>
					</a>
					<div className={s.wrapperSideEmail}>
							<div className={s.email}>
								<span>alekasisbb@gmail.com</span> 
							<button className={s.buttonCopy} onClick={handleCopy}>
								<Icon icon="lets-icons:copy-light" style={{ color: hasCopy ? 'green' : ''}} />
							</button>
						</div>
					</div>
				</li>
			</ul>
		</nav>
	);
};
