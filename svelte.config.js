import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import tailwind from 'tailwindcss';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$i18n: 'src/i18n'
		}
	},
	preprocess: vitePreprocess({
		plugins: [tailwind()]
	})
};
export default config;
