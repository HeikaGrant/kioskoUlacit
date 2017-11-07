var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify');

gulp.task('sass', function() {
  return gulp.src('src/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/**/*.css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('src/**/*.scss', ['sass']);
});

