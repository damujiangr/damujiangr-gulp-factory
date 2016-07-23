var gulp = require('gulp');
var del = require('del');
var useref = require('gulp-useref');


// var hub = require('gulp-hub');

// hub(['./../task/gulp-useref.js']);

//清除 dist 目录
function delDist() {
    return del(['dist']);
}

//do useref
function doUseref(){
  return gulp.src('src/*.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'));
}

gulp.task("doUseref", gulp.series(
  delDist,
  doUseref
));
