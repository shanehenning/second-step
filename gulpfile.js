'use strict';

let gulp = require('gulp');
let watch = require('gulp-watch');
let less = require('gulp-less');

gulp.task('less', function() {
  console.log('watching less file');
  return watch (['less/**/*.less'], function() {
    console.log('gulp');
    gulp.src('./less/working/working-master.less')
      .pipe(less())
      .pipe(gulp.dest('./less/working'));
  });
});

gulp.task('default', function() {
  console.log('default gulp');
});
