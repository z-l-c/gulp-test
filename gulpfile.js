'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    minifycss = require('gulp-clean-css');

gulp.task('sass', function(){
	return gulp.src('./public/sass/**/*.scss')
		.pipe(sass())
		// .pipe(minifycss())
		.pipe(gulp.dest('./public/css'))
		.pipe(notify({message: 'Styles task finished'}));
});

gulp.task('watchSass', function(){
	watch('./public/sass/**/*.scss', gulp.series('sass'));
})

gulp.task('default', gulp.series('sass', (done)=>done()));
