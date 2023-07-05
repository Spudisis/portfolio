import { ObjectType } from "../modules/list-projects/list-projects.types";
import media from "pictures/media.png";
import genshinCalc from "pictures/genshinCalc.png";
import inetShop from "pictures/inetShop.png";
import gamesApi from "pictures/gamesApi.png";
import svg from "pictures/file.svg";
import contructor from "pictures/contructor.png";
export const projects: ObjectType[] = [
	{
		id: 1,
		href: "media",
		preview: media,
	},
	{
		id: 2,
		href: "VK-extenshion-emoji",
		preview: svg,
	},
	{
		id: 3,
		href: "VKFileExtension",
		preview: svg,
	},
	{
		id: 4,
		href: "genshinCalc",
		preview: genshinCalc,
	},
	{
		id: 5,
		href: "gamesApi",
		preview: gamesApi,
	},
	{
		id: 6,
		href: "inetShopTest",
		preview: inetShop,
	},
	{
		id: 7,
		href: "Frankenstein",
		preview: contructor,
	},
];
