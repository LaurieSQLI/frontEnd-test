const gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('browser-sync', () => {
    browserSync.init(["./dist/*.html", "./dist/js/*.js", "./dist/css/*.css", "./dist/images/*.*", "./dist/fonts/*.*"], {
        server: {
            baseDir: "./dist/"
        }
    })
});
