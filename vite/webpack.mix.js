let mix = require('laravel-mix');

require('mix-tailwindcss');

mix
	.js('src/js/app.js', 'assets/js/scripts.js')
	.sass('src/scss/app.scss', 'assets/css/styles.css')
	.tailwind();

mix.setPublicPath('./')


if (mix.inProduction()) {
	mix.version();
} else {
	mix.sourceMaps().webpackConfig({ devtool: 'inline-source-map' });
	mix.browserSync({
		server: {
			baseDir: "_site",
		},
		files: ['_site/**/*.html', 'assets/css/styles.css', 'assets/js/scripts.js'],
		notify: false
	});
}

mix.disableSuccessNotifications();