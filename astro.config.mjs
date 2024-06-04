import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import sitemap from "@astrojs/sitemap";
import robots from "astro-robots";
import icon from "astro-icon";
// import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		sitemap(),
		robots(),
		alpinejs(),
		icon(),
		// mdx()
	],
	site: 'https://samarskieavtomobili.ru',
	base: "/"
});
