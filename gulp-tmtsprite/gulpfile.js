var gulp = require('gulp');
var del = require('del');
var tmtsprite = require('gulp-tmtsprite');
var gulpif = require('gulp-if');
var lazyImg = require('gulp-lazyimagecss');

function clean() {
    return del(['dist']);
}

function doSprites() {
    return gulp.src('./src/css/*.css')
        .pipe(lazyImg({
            imagePath: ['src/slice']
        }))
        .pipe(tmtsprite({margin: 4}))
        .pipe(gulpif('*.png', gulp.dest('./dist/sprite/'), gulp.dest('./dist/css/')));
}

gulp.task('do', gulp.series(clean, doSprites));
