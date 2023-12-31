import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			pages: "/src/pages",
			components: "/src/components",
			modules: "/src/modules",
			layout: "/src/layout",
			routes: "/src/routes",
			styles: "/src/styles",
			utils: "/src/utils",
			constants: "/src/constants",
			pictures: "/src/pictures",
		},
	},
});
