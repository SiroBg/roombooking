const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-dart-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');

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
    'app/js/slick.js',
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

function buildcopy() {
  return src([
    'app/css/**/*.min.css',
    'app/js/**/*.min.js',
    'app/images/dest/**/*',
    'app/vendor/**/*'
    ], { base: 'app' })
  .pipe(dest('dist'));
}

function startwatch() {
  watch('app/sass/**/*', styles);
  watch(['app/**/*.js', '!app/**/*.min.js'], scripts);
  watch('app/**/*.html').on('change', browserSync.reload);
}

function minifyHtml() {
  return src('app/**/*.html') // указываем пути к файлам .html
  .pipe(htmlmin({
    collapseWhitespace: true, // удаляем все переносы
    removeComments: true // удаляем все комментарии
  }))
  .pipe(dest('dist')); // оптимизированные файлы .html переносим на продакшен
};

exports.browsersync = browsersync;
exports.scripts = scripts;
exports.styles = styles;
exports.build = series(styles, scripts, buildcopy, minifyHtml);

exports.default = parallel(styles, scripts, browsersync, startwatch);
