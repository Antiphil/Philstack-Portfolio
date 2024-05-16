/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					main: '#EDE9D0',
					hover: '#ffed88'
				},
				secondary: {
					800: '#24201F',
					900: '#1d1a1a'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
