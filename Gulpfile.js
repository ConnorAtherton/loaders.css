var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('scss:compile', function() {
  return gulp.src('./src/loaders.scss')
    .pipe(sass())
    .pipe(autoprefixer("last 2 versions", "> 1%", "ie 8", {
      map: false
    }))
    .pipe(gulp.dest('./'))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./'));
});

gulp.task('demo:scss:compile', function() {
  return gulp.src('./demo/src/demo.scss')
    .pipe(sass())
    .pipe(gulp.dest('./demo/'));
});

gulp.task('demo:jade:compile', function() {
  return gulp.src('./demo/src/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./demo/'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.scss', ['scss:compile']);
  gulp.watch('demo/src/**/*.scss', ['demo:scss:compile']);
  gulp.watch('demo/src/**/*.jade', ['demo:jade:compile']);
});

gulp.task('demo', ['demo:scss:compile', 'demo:jade:compile'], function() {})
gulp.task('default', ['scss:compile', 'demo', 'watch']);
