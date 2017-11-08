var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify');

gulp.task('default',function() {
  gulp.watch('./src/**/*.sass',['sass']);
});
gulp.task('sass', function() {
  return gulp.src('./src/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./src'))
});




