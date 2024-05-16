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
						// Listenpunkte
						ul: {
							listStyleType: 'disc', // Punkte anzeigen
							listStylePosition: 'outside' // Punkte außerhalb des Textbereichs anzeigen
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
						// Nummerierung für Pre-Elemente

						'pre[class*="language-"]': {
							//backgroundColor: '#f5f2f0', // Hintergrundfarbe
							padding: '1em', // Innenabstand
							borderRadius: theme('borderRadius.DEFAULT'), // Abgerundete Ecken
							overflow: 'auto', // Scrollbalken anzeigen, wenn der Inhalt zu groß ist
							margin: '0.5em 0' // Außenabstand
						},
						'code[class*="language-"]': {
							fontFamily: theme('fontFamily.mono'), // Monospace-Schriftart
							fontSize: theme('fontSize.sm') // Schriftgröße
						},
						'code[class*="language-"]': {
							// Andere Stile für Codeelemente
							color: theme('colors.white') // Textfarbe für Prism.js-Code
						},
						'.token': {
							// Textfarbe für Prism.js-Token
							color: theme('colors.white')
						}
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
