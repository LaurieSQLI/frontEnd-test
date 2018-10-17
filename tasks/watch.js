const gulp = require('gulp'),
    watch = require('gulp-watch'),
    batch = require('gulp-batch');

function swallowError (error) {

    // If you want details of the error in the console
    console.log(error.toString())

    this.emit('end')
}

gulp.task('watch', () => {

    // Watch all js files recursively.
    gulp.watch([
        './app/js/*.js',
        './app/js/**/*.js'
    ], batch((events, done) =>
        gulp.start('compile-js', done)
    ))

    // Watch all less files recursively.
    gulp.watch([
        './app/scss/*.scss',
        './app/scss/**/*.scss'
    ], batch((events, done) =>
        gulp.start('sass', done)
    ))

    // Watch all image files recursively.
    watch([
        './app/images/*.{jpg,png,gif}',
        './app/images/**/*.{jpg,png,gif}'
    ], batch((events, done) =>
        gulp.start('copy-images', done)
    ))

    // Watch all fonts files recursively.
    watch([
        './app/fonts/*.{eot,svg,ttf,woff,woff2}',
        './app/fonts/**/*.{eot,svg,ttf,woff,woff2}'
    ], batch((events, done) =>
        gulp.start('copy-fonts', done)
    ))

    // Watch all html files
    watch([
        './app/*.html',
        './app/**/*.html'
    ], batch((events, done) =>
        gulp.start('minify-html', done)
    ))
});