var gulp = require('gulp');
var less = require('gulp-less');
var gutil = require('gutil');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['styles', 'watch']);

gulp.task('styles', function() {
  return gulp.src('public/stylesheets/main.less')
    .pipe(less())
    .pipe(autoprefixer())
    //.pipe(gulpif(production, cssmin()))
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
  gulp.watch('public/stylesheets/**/*.less', ['styles']);
});
