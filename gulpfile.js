
/* Переменные */

const {src, dest, watch, parallel} = require('gulp');
const scss  = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default; 
const autoprefixer = require('gulp-autoprefixer');


/* Браузер */

function browsersync () {
	browserSync.init({
		server: {
			baseDir: 'app/'
		}
	});
}


/* Скрипты */

function main_sсripts () {
	return src([
		'node_modules/jquery/dist/jquery.js',
		'app/js/catalog-items.js',
		'app/js/store.js',
		'app/js/slider.js',
		'app/js/popup.js',
		'app/js/application.js',
		'app/js/menu.js'
	])
	
	.pipe(concat('main.js'))
	.pipe(dest('app/js'))
	.pipe(browserSync.stream())
}

function main_sсripts_min () {
	return src([
		'node_modules/jquery/dist/jquery.js',
		'app/js/catalog-items.js',
		'app/js/store.js',
		'app/js/slider.js',
		'app/js/popup.js',
		'app/js/application.js',
		'app/js/menu.js'
	])
	
	.pipe(concat('main.min.js'))
	.pipe(uglify())
	.pipe(dest('dist/js'))
	.pipe(browserSync.stream())
}

function catalog_scripts () {
	return src([
		'node_modules/jquery/dist/jquery.js',
		'app/js/catalog-items.js',
		'app/js/catalog/store.js',
		'app/js/catalog/general.js',
		'app/js/popup.js',
		'app/js/application.js',
		'app/js/menu.js'
		
	])

	.pipe(concat('catalog.js'))
	.pipe(dest('app/js/catalog'))
	.pipe(browserSync.stream())
}

function catalog_scripts_min () {
	return src([
		'node_modules/jquery/dist/jquery.js',
		'app/js/catalog-items.js',
		'app/js/catalog/store.js',
		'app/js/catalog/general.js',
		'app/js/popup.js',
		'app/js/application.js',
		'app/js/menu.js'
		
	])

	.pipe(concat('catalog.min.js'))
	.pipe(uglify())
	.pipe(dest('dist/js/catalog'))
	.pipe(browserSync.stream())
}

function pages_scripts () {
	return src([
		'node_modules/jquery/dist/jquery.js',
		'app/js/popup.js',
		'app/js/menu.js'
		
	])

	.pipe(concat('pages.js'))
	.pipe(dest('app/js/pages'))
	.pipe(browserSync.stream())
}

function pages_scripts_min () {
	return src([
		'node_modules/jquery/dist/jquery.js',
		'app/js/popup.js',
		'app/js/menu.js'
		
	])

	.pipe(concat('pages.min.js'))
	.pipe(uglify())
	.pipe(dest('dist/js/pages'))
	.pipe(browserSync.stream())
}


/* Стили */

function main_styles () {
return src('app/scss/main-page/style.scss')
	.pipe(scss({outputStyle: 'expanded'}))
	.pipe(concat('style.css'))
	.pipe(autoprefixer({
		overrideBrowsersList: ['last 10 version'],
		grid: true
	}))
		
	.pipe(dest('app/css/main-page'))
	.pipe(browserSync.stream()) 
}

function main_min_styles () {
	return src('app/scss/main-page/style.scss')
		.pipe(scss({outputStyle: 'compressed'}))
		.pipe(concat('style.min.css'))
		.pipe(autoprefixer({
			overrideBrowsersList: ['last 10 version'],
			grid: true
		}))
			
		.pipe(dest('dist/css/main-page'))
		.pipe(browserSync.stream()) 
}

function about_styles () {
	return src('app/scss/pages/about/style.scss')
		.pipe(scss({outputStyle: 'expanded'}))
		.pipe(concat('style.css'))
		.pipe(autoprefixer({
			overrideBrowsersList: ['last 10 version'],
			grid: true
		}))
			
		.pipe(dest('app/css/pages/about'))
		.pipe(browserSync.stream()) 
}

function about_min_styles () {
	return src('app/scss/pages/about/style.scss')
		.pipe(scss({outputStyle: 'compressed'}))
		.pipe(concat('style.min.css'))
		.pipe(autoprefixer({
			overrideBrowsersList: ['last 10 version'],
			grid: true
		}))
			
		.pipe(dest('dist/css/pages/about'))
		.pipe(browserSync.stream()) 
}

function catalog_styles () {
	return src('app/scss/pages/catalog/style.scss')
		.pipe(scss({outputStyle: 'expanded'}))
		.pipe(concat('style.css'))
		.pipe(autoprefixer({
			overrideBrowsersList: ['last 10 version'],
			grid: true
		}))
			
		.pipe(dest('app/css/pages/catalog'))
		.pipe(browserSync.stream()) 
}

function catalog_min_styles () {
	return src('app/scss/pages/catalog/style.scss')
		.pipe(scss({outputStyle: 'compressed'}))
		.pipe(concat('style.min.css'))
		.pipe(autoprefixer({
			overrideBrowsersList: ['last 10 version'],
			grid: true
		}))
			
		.pipe(dest('dist/css/pages/catalog'))
		.pipe(browserSync.stream()) 
}

function contacts_styles () {
	return src('app/scss/pages/contacts/style.scss')
		.pipe(scss({outputStyle: 'expanded'}))
		.pipe(concat('style.css'))
		.pipe(autoprefixer({
			overrideBrowsersList: ['last 10 version'],
			grid: true
		}))
			
		.pipe(dest('app/css/pages/contacts'))
		.pipe(browserSync.stream()) 
}

function contacts_min_styles () {
	return src('app/scss/pages/contacts/style.scss')
		.pipe(scss({outputStyle: 'compressed'}))
		.pipe(concat('style.min.css'))
		.pipe(autoprefixer({
			overrideBrowsersList: ['last 10 version'],
			grid: true
		}))
			
		.pipe(dest('dist/css/pages/contacts'))
		.pipe(browserSync.stream()) 
}

function delivery_styles () {
	return src('app/scss/pages/delivery/style.scss')
		.pipe(scss({outputStyle: 'expanded'}))
		.pipe(concat('style.css'))
		.pipe(autoprefixer({
			overrideBrowsersList: ['last 10 version'],
			grid: true
		}))
			
		.pipe(dest('app/css/pages/delivery'))
		.pipe(browserSync.stream()) 
}

function delivery_min_styles () {
	return src('app/scss/pages/delivery/style.scss')
		.pipe(scss({outputStyle: 'compressed'}))
		.pipe(concat('style.min.css'))
		.pipe(autoprefixer({
			overrideBrowsersList: ['last 10 version'],
			grid: true
		}))
			
		.pipe(dest('dist/css/pages/delivery'))
		.pipe(browserSync.stream()) 
}

function payment_styles () {
	return src('app/scss/pages/payment/style.scss')
		.pipe(scss({outputStyle: 'expanded'}))
		.pipe(concat('style.css'))
		.pipe(autoprefixer({
			overrideBrowsersList: ['last 10 version'],
			grid: true
		}))
			
		.pipe(dest('app/css/pages/payment'))
		.pipe(browserSync.stream()) 
}

function payment_min_styles () {
	return src('app/scss/pages/payment/style.scss')
		.pipe(scss({outputStyle: 'compressed'}))
		.pipe(concat('style.min.css'))
		.pipe(autoprefixer({
			overrideBrowsersList: ['last 10 version'],
			grid: true
		}))
			
		.pipe(dest('dist/css/pages/payment'))
		.pipe(browserSync.stream()) 
}

function policy_styles () {
	return src('app/scss/pages/policy/style.scss')
		.pipe(scss({outputStyle: 'expanded'}))
		.pipe(concat('style.css'))
		.pipe(autoprefixer({
			overrideBrowsersList: ['last 10 version'],
			grid: true
		}))
			
		.pipe(dest('app/css/pages/policy'))
		.pipe(browserSync.stream()) 
}

function policy_min_styles () {
	return src('app/scss/pages/policy/style.scss')
		.pipe(scss({outputStyle: 'compressed'}))
		.pipe(concat('style.min.css'))
		.pipe(autoprefixer({
			overrideBrowsersList: ['last 10 version'],
			grid: true
		}))
			
		.pipe(dest('dist/css/pages/policy'))
		.pipe(browserSync.stream()) 
}


/* Папка dist */

function build() {
	return src ([
		'app/fonts/**/*',
		'app/img/**/*',
		'app/js/**/*.min.js',
		'app/*.html'
	], {base: 'app'})
	.pipe(dest('dist'))
}


/* Слежение */

function watching() {
	watch(['app/scss/**/*.scss'], main_styles);
	watch(['app/scss/**/*.scss'], main_min_styles);
	watch(['app/scss/**/*.scss'], about_styles);
	watch(['app/scss/**/*.scss'], about_min_styles);
	watch(['app/scss/**/*.scss'], catalog_styles);
	watch(['app/scss/**/*.scss'], catalog_min_styles);
	watch(['app/scss/**/*.scss'], contacts_styles);
	watch(['app/scss/**/*.scss'], contacts_min_styles);
	watch(['app/scss/**/*.scss'], delivery_styles);
	watch(['app/scss/**/*.scss'], delivery_min_styles);
	watch(['app/scss/**/*.scss'], payment_styles);
	watch(['app/scss/**/*.scss'], payment_min_styles);
	watch(['app/scss/**/*.scss'], policy_styles);
	watch(['app/scss/**/*.scss'], policy_min_styles);

	watch(['app/js/*.js', '!app/js/main.js'], main_sсripts);
	watch(['app/js/*.js', '!app/js/main.js', '!dist/js/main.min.js'], main_sсripts_min);
	watch(['app/js/**/*.js', '!app/js/catalog/catalog.js'], catalog_scripts);
	watch(['app/js/**/*.js', '!app/js/catalog/catalog.js', '!dist/js/catalog/catalog.min.js'], catalog_scripts_min);
	watch(['app/js/*.js', '!pages/js/pages/pages.js'], pages_scripts);
	watch(['app/js/*.js', '!app/js/pages/pages.js', '!dist/js/pages/pages.min.js'], pages_scripts_min);

	watch(['app/*.html']).on('change', browserSync.reload)
}


/* Итог */

exports.main_styles = main_styles;
exports.main_min_styles = main_min_styles;
exports.about_styles = about_styles;
exports.about_min_styles = about_min_styles;
exports.catalog_styles = catalog_styles;
exports.catalog_min_styles = catalog_min_styles;
exports.contacts_styles = contacts_styles;
exports.contacts_min_styles = contacts_min_styles;
exports.delivery_styles = delivery_styles;
exports.delivery_min_styles = delivery_min_styles;
exports.payment_styles = payment_styles;
exports.payment_min_styles = payment_min_styles;
exports.policy_styles = policy_styles;
exports.policy_min_styles = policy_min_styles;

exports.watching = watching;
exports.browsersync = browsersync;

exports.main_sсripts = main_sсripts;
exports.main_sсripts_min = main_sсripts_min;
exports.catalog_scripts = catalog_scripts;
exports.catalog_scripts_min = catalog_scripts_min;
exports.pages_scripts = pages_scripts;
exports.pages_scripts_min = pages_scripts_min;

exports.build = build; 

exports.default = parallel(main_sсripts, catalog_scripts, pages_scripts, browsersync, watching);
