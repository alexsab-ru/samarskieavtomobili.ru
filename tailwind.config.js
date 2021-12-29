const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',

	purge: ['./dist/**/*.html'],

	darkMode: false, // or 'media' or 'class'

	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		extend: {
			transitionProperty: {
				'height': 'height',
			  },
			colors: {
				// 'cyan': 'rgb(14, 116, 144)',
				'cyan': '#616161',
			},
			fontFamily: {
				sans: ['hyunday-st', ...defaultTheme.fontFamily.sans],
			},
		},
	},
}
