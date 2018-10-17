const gulp   = require('gulp'),
    htmlmin = require('gulp-htmlmin');

gulp.task('minify-html', () => {
    gulp.src('./app/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/'))
});