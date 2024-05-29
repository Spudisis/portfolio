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
		href: "Frankenstein",
		preview: contructor,
	},
	{
		id: 2,
		href: "media",
		preview: media,
	},
	{
		id: 3,
		href: "VK-extenshion-emoji",
		preview: svg,
	},
	{
		id: 4,
		href: "VKFileExtension",
		preview: svg,
	},
	{
		id: 5,
		href: "genshinCalc",
		preview: genshinCalc,
	},
	{
		id: 6,
		href: "gamesApi",
		preview: gamesApi,
	},
	{
		id: 7,
		href: "inetShopTest",
		preview: inetShop,
	},
	
];
