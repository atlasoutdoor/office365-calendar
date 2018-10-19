var gulp = require('gulp');
var removeCode = require('gulp-remove-code');

gulp.task('default', function() {
    gulp.src(['index.html', 'deptHostEvents.html'])
        .pipe(removeCode({ production: true }))
        .pipe(gulp.dest('./dist'))
});