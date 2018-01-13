var gulp = require('gulp');
var less = require('gulp-less');
var gutil = require('gutil');
var jade = require('gulp-jade');
var clean = require('gulp-clean');
var autoprefixer = require('gulp-autoprefixer');
const ftp = require('vinyl-ftp');

const config = require('./config');

gulp.task('default', ['styles', 'watch']);

gulp.task('styles', function() {
  return gulp.src('public/stylesheets/main.less')
    .pipe(less())
    .pipe(autoprefixer())
    //.pipe(gulpif(production, cssmin()))
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
  gulp.watch(['views/**/*.jade','public/**/*.js','public/**/*.less'], ['build']);
});

gulp.task('copy', ['clean'], () =>
  gulp.src(['./public/**/*', '!./public/**/*.zip'])
    .pipe(gulp.dest('./dist/public')));

gulp.task('clean', () => gulp.src('./dist', {read: false}).pipe(clean()));

gulp.task('ftp', () => {
  const conn = ftp.create(Object.assign(config, { log: gutil.log }));
  return gulp.src('./dist/**/*', { base: './dist', buffer: false })
    .pipe(conn.newer('/php'))
    .pipe(conn.dest('/php'))
});

gulp.task('build', ['styles', 'copy'], () =>    gulp.src('./views/index.jade').pipe(jade({
  pretty: true
})).pipe(gulp.dest('./dist')));
