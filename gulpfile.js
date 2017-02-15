var gulp = require('gulp');
var less = require('gulp-less');
var gutil = require('gutil');
var jade = require('gulp-jade');
var clean = require('gulp-clean');
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

gulp.task('copy', ['clean'], () =>
  gulp.src('./public/**/*')
    .pipe(gulp.dest('./dist/public')));

gulp.task('clean', () => gulp.src('./dist', {read: false}).pipe(clean()));

gulp.task('build', ['styles', 'copy'], () =>    gulp.src('./views/index.jade').pipe(jade({
  pretty: true
})).pipe(gulp.dest('./dist')));
