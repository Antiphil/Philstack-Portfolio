/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#EDE9D0',
				primaryhover: '#ffed88',
				secondary: '#24201F',
				secondarydark: '#1d1a1a'
			},
		
		typography: ({ theme }) => ({
			pink: {
			  css: {
				'--tw-prose-body': theme('colors.primary'),
				'--tw-prose-headings': theme('colors.primary'),
				'--tw-prose-lead': theme('colors.primary'),
				'--tw-prose-links': theme('colors.primary'),
				'--tw-prose-bold': theme('colors.primary'),
				'--tw-prose-counters': theme('colors.primary'),
				'--tw-prose-bullets': theme('colors.primary'),
				'--tw-prose-hr': theme('colors.primary'),
				'--tw-prose-quotes': theme('colors.primary'),
				'--tw-prose-quote-borders': theme('colors.primary'),
				'--tw-prose-captions': theme('colors.primary'),
				'--tw-prose-code': theme('colors.primary'),
				'--tw-prose-pre-code': theme('colors.primary'),
				'--tw-prose-pre-bg': theme('colors.primary'),
				'--tw-prose-th-borders': theme('colors.primary'),
				'--tw-prose-td-borders': theme('colors.primary'),
				'--tw-prose-invert-body': theme('colors.primary'),
				'--tw-prose-invert-headings': theme('colors.white'),
				'--tw-prose-invert-lead': theme('colors.primary'),
				'--tw-prose-invert-links': theme('colors.white'),
				'--tw-prose-invert-bold': theme('colors.white'),
				'--tw-prose-invert-counters': theme('colors.primary'),
				'--tw-prose-invert-bullets': theme('colors.primary'),
				'--tw-prose-invert-hr': theme('colors.primary'),
				'--tw-prose-invert-quotes': theme('colors.primary'),
				'--tw-prose-invert-quote-borders': theme('colors.primary'),
				'--tw-prose-invert-captions': theme('colors.primary'),
				'--tw-prose-invert-code': theme('colors.white'),
				'--tw-prose-invert-pre-code': theme('colors.primary'),
				'--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
				'--tw-prose-invert-th-borders': theme('colors.primary'),
				'--tw-prose-invert-td-borders': theme('colors.primary'),
			  },
			},
		  }),
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	]
};
