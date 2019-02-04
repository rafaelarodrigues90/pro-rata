// css beautify
var gulp = require('gulp');
var csslint = require('gulp-csslint');
var uglyfly = require('gulp-uglyfly');

// csslint
gulp.task('csslint', function(done) {
    gulp.src('/*.css')
        .pipe(csslint())
        .pipe(csslint.formatter())
        .pipe(csslint.formatter('fail'));
    done();
});


// uglyfy
gulp.task('compress', function() {
    gulp.src('/*.js')
        .pipe(uglyfly())
        .pipe(gulp.dest('js'))
});