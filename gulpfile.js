'use strict';
/*-----------------------------------------------------------
 GULP: DEPENDENCIES
 Define the variables of your dependencies in this section
-----------------------------------------------------------*/
const gulp = require('gulp'),
    requireDir = require('require-dir');

/*-----------------------------------------------------------
 GULP: TASKS
 Necessary gulp tasks required to run your application like
 magic. Feel free to add more tasks inside tasks folder
-----------------------------------------------------------*/
const tasks = requireDir('./tasks');

gulp.task('generate', [
    'sass',
    'copy-fonts',
    'copy-images',
    'compile-js',
    'minify-html',
], () => {
    gulp.start(['browser-sync', 'watch'])
});

gulp.task('start', ['copy-json'], () => {
    gulp.start('generate')
});

gulp.task('sass', ['compile-sass'], () => {
    gulp.start('minify-css')
});
