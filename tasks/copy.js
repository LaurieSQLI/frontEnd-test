const gulp = require('gulp');

gulp.task('copy-fonts', () =>
    gulp.src([
        './app/fonts/*.{eot,svg,ttf,woff,woff2}',
        './app/fonts/**/*.{eot,svg,ttf,woff,woff2}'
    ])
    .pipe(gulp.dest('./dist/fonts/'))
);

// Task to copy images to dist.
gulp.task('copy-images', () => {
    gulp.src([
        './app/images/*.{jpg,png,gif,svg}',
        '.app/images/**/*.{jpg,png,gif,svg}'
    ])
    .pipe(gulp.dest('./dist/images/'))
});

// Task to copy json to dist.
gulp.task('copy-json', () => {
    gulp.src([
        './app/json/*.json',
        './app/json/**/*.json'
    ])
    .pipe(gulp.dest('./dist/json/'))
});
