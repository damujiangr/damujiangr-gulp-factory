var gulp = require('gulp');
var amdOptimize = require('amd-optimize');
var concat = require('gulp-concat');
var tap = require('gulp-tap');
var del = require('del');
var path = require('path');

function delDist() {
    return del(['dist']);
}

function amd() {
    return gulp.src("src/pkg/*.js")
        // Traces all modules and outputs them in the correct order.
        .pipe(tap(function(file, t) {
            var filePath = file.path;
            var modName = path.basename(filePath, '.js');
            gulp.src(filePath)
                .pipe(amdOptimize(modName))
                .pipe(concat(modName + '.js'))
                .pipe(gulp.dest('dist'));
        }));
    // .pipe(gulp.dest("dist"));

}
gulp.task('amd', gulp.series(delDist, amd));
