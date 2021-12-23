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
			colors: {
				'cyan': 'rgb(14, 116, 144)',
			},
			fontFamily: {
				sans: ['hyunday-st', ...defaultTheme.fontFamily.sans],
			},
		},
	},
}
