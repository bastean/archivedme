const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['index.html', './src/**/*.jsx'],
	theme: {
		extend: {
			colors: {
				'transparent': 'transparent',
				'current': 'currentColor',
				'mern-dark': '#000000',
				'mern-white': '#97989A'
			}
		},
		screens: {
			xs: '540px',
			...defaultTheme.screens
		}
	},
	plugins: []
};
