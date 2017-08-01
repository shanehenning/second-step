'use strict';

let gulp = require('gulp');
let watch = require('gulp-watch');
let less = require('gulp-less');

gulp.task('less', function() {
  console.log('watching less file');
  return watch (['v6/**/*.less'], function() {
    console.log('gulp');
    gulp.src('./v6/v6.less')
      .pipe(less())
      .pipe(gulp.dest('./v6'));
  });
});

gulp.task('footer', function(){
  console.log('watching footer less');
  return watch (['less/**/*.less'], function(){
    console.log('gulp footer');
    gulp.src('./less/footer.less')
    .pipe(less())
    .pipe(gulp.dest('./css'));
  });
});

gulp.task('default', function() {
  console.log('default gulp');
});
