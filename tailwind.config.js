/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				xs: '400px'
			},
			colors: {
				primary: {
					main: '#EDE9D0',
					hover: '#ffed88'
				},
				secondary: {
					800: '#24201F',
					900: '#1d1a1a'
				}
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
						// Listenpunkte
						ul: {
							listStyleType: 'disc', // Punkte anzeigen
							listStylePosition: 'outside' // Punkte außerhalb des Textbereichs anzeigen
						},
						li: {
							padding: '0px'
						},
						// Nummerierte Listen
						ol: {
							listStyleType: 'decimal', // Zahlen anzeigen
							listStylePosition: 'outside' // Zahlen außerhalb des Textbereichs anzeigen
						},
						// Tabellen
						table: {
							width: '100%',
							borderCollapse: 'collapse',
							borderRadius: '20px'
						},
						th: {
							textAlign: 'left',
							borderWidth: theme('borderWidth.DEFAULT'),
							borderColor: theme('colors.gray.300')
						},
						td: {
							textAlign: 'left',
							borderWidth: theme('borderWidth.DEFAULT'),
							borderColor: 'rgba(255,255,255,0.10)',
							padding: '6px'
						},
						'table tr': {
							'&:nth-child(odd)': {
								backgroundColor: 'rgba(0,0,0,0.40)' // Hintergrundfarbe für jede zweite Reihe
							},
							'&:first-child': {
								borderTopLeftRadius: '15px', // Hintergrundfarbe für jede zweite Reihe
								borderTopRightRadius: '15px' // Hintergrundfarbe für jede zweite Reihe
							},
							'&:last-child': {
								borderBottomLeftRadius: '15px', // Hintergrundfarbe für jede zweite Reihe
								borderBottomRightRadius: '15px' // Hintergrundfarbe für jede zweite Reihe
							}
						},
						hr: {
							height: '3px',
							backgroundColor: '#EDE9D0',
							opacity: '0.7'
						}
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
