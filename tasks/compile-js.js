const gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify');

// Task to compile js.
gulp.task('compile-js', () => {
    // app.js is your main JS file with all your module inclusions
    browserify({
        extensions: ['.js'],
        entries: ['./app/js/application.js'],
        debug: true
    })
    .transform('babelify', {
        presets: ['@babel/preset-env']
    })
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('application.min.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/js'))
});