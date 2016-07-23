var gulp = require('gulp');
var del = require('del');
var RevAll = require('gulp-rev-all');
var revDel = require('gulp-rev-delete-original');

function delDir() {
    return del(['build']);
}

function revision() {
    var revAll = new RevAll({
      dontRenameFile: ['.html']
    });
    return gulp.src(['src/**/*'])
        .pipe(gulp.dest('build'))
        .pipe(revAll.revision())
        .pipe(gulp.dest('build'))
        .pipe(revDel({
            exclude: /(.html|.htm)$/
        }))
        .pipe(revAll.manifestFile())
        .pipe(gulp.dest('build'));
}

gulp.task('default', gulp.series(
    delDir,
    revision
));
