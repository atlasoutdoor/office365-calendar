var gulp = require('gulp');
var removeCode = require('gulp-remove-code');

gulp.task('default', function() {
    gulp.src('index.html')
        .pipe(removeCode({ production: true }))
        .pipe(gulp.dest('./dist'))
});