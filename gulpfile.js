/**
 * Created by ishant on 06-06-2016.
 */
var gulp = require('gulp');
var jsfiles = ['*.js','Nodejs/**/*.js']
gulp.task('style',function(){
    gulp.src(jsfiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish',{
            verbose:true
        }))

});