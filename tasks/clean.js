const gulp = require('gulp'),
    clean = require('gulp-clean');

gulp.task('clean', () => {
    gulp.src(['./dist'], {read: false})
        .pipe(clean())
});