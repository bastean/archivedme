const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['index.html', './src/**/*.jsx'],
	theme: {
		extend: {
			colors: {
				'transparent': 'transparent',
				'current': 'currentColor',
				'catcha-dark': '#00071B',
				'catcha-cream': '#F6E6C5',
				'catcha-rose': '#EAB29C',
				'catcha-pink': '#DF7E74',
				'catcha-red': '#D44A4C'
			}
		},
		screens: {
			xs: '540px',
			...defaultTheme.screens
		}
	},
	plugins: []
};
