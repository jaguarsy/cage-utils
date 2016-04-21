/**
 * Created by johnnycage on 16/4/21.
 */
var gulp = require('gulp');
var requirejsOptimize = require('gulp-requirejs-optimize');

gulp.task('scripts', function () {
    return gulp.src('src/index.js')
        .pipe(requirejsOptimize())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['scripts']);