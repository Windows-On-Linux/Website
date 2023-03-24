import { sveltekit } from '@sveltejs/kit/vite';
import { Sitemap } from 'vite-plugin-svelte-sitemap';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), Sitemap({
		baseurl: "https://wineget.pages.dev"   // Don't put trailing slash at the end
	})]
};

export default config;
