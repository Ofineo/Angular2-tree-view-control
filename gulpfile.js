var gulp = require('gulp');
var webserver = require("gulp-webserver");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var pump = require("pump");
var ngAnnotate = require("gulp-ng-annotate");
var rename = require("gulp-rename");

/*
gulp.task('build', function () {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(rename('all.min.js'))
        .pipe(ngAnnotate()) 
        .pipe(uglify()) 
        .pipe(gulp.dest('dist'));
});

*/
gulp.task('default',/*["build"],*/ function(){
    gulp.src('.')
    .pipe(webserver({
        fallback:'index.html',
        livereload: true,            
        open: true
        
    }));

});
