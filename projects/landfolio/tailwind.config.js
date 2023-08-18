const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['index.html', './src/**/*.jsx'],
	theme: {
		extend: {
			colors: {
				'transparent': 'transparent',
				'current': 'currentColor',
				'landfolio-white': '#F6F6F6',
				'landfolio-dark': '#12181F',
				'landfolio-blue': '#4D96F4',
				'landfolio-soft-blue': '#7281D6',
				'landfolio-purple': '#976CB8',
				'landfolio-fuchsia': '#BC579A'
			}
		},
		screens: {
			xs: '540px',
			...defaultTheme.screens
		}
	},
	plugins: []
};
