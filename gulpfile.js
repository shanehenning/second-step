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

gulp.task('default', function() {
  console.log('default gulp');
});
