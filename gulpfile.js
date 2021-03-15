const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-dart-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const del = require('del');

function browsersync() {
  browserSync.init({
    server: { baseDir: 'app/' },
    notify: false
  })
}

function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.min.js',
    'app/js/stackedCards.js',
    'app/js/index.js'
  ])
  .pipe(concat('index.min.js'))
  .pipe(uglify())
  .pipe(dest('app/js/'))
  .pipe(browserSync.stream())
}

function styles() {
  return src('app/sass/index.sass')
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('index.min.css'))
  .pipe(autoprefixer({ overrideBrowserlist: ['last 10 versions'], grid: true }))
  .pipe(cleancss(( { level: {1: { specialComments: 0 }} })))
  .pipe(dest('app/css/'))
  .pipe(browserSync.stream())
}

function images() {
  return src('app/images/src/**/*')
  .pipe(newer('app/images/dest'))
  .pipe(imagemin())
  .pipe(dest('app/images/dest'))
}

function cleanimg() {
  return del('app/images/dest/**/*', { force: true })
}

function buildcopy() {
  return src([
    'app/css/**/*.min.css',
    'app/js/**/*.min.js',
    'app/images/dest/**/*',
    'app/vendor/**/*',
    'app/**/*.html',
    ], { base: 'app' })
  .pipe(dest('dist'));
}

function startwatch() {
  watch('app/sass/**/*', styles);
  watch(['app/**/*.js', '!app/**/*.min.js'], scripts);
  watch('app/**/*.html').on('change', browserSync.reload);
  watch('app/images/src/**/*', images);
}

exports.browsersync = browsersync;
exports.scripts = scripts;
exports.styles = styles;
exports.images = images;
exports.cleanimg = cleanimg;
exports.build = series(styles, scripts, images, buildcopy);

exports.default = parallel(styles, scripts, images, browsersync, startwatch);
