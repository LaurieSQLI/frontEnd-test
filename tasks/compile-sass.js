const gulp   = require('gulp'),
    sass   = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps   = require('gulp-sourcemaps'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload');


gulp.task('compile-sass', () => {
    gulp.src('./app/scss/master.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', console.error.bind(console))

        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('./dist/css/'))
});

gulp.task('minify-css', () => {
    gulp.src([
        './dist/css/master.css'
    ])
    .pipe(sourcemaps.init())
    .pipe(cleanCSS({debug: true}))
    .pipe(concat('css/master.min.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'))
    .pipe(livereload())
})