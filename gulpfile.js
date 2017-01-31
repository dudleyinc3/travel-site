var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	cssnested = require('postcss-nested'),
	cssImport = require('postcss-import');

gulp.task ('default', function(){
	console.log("We created a gulp file");
});

gulp.task ('html', function(){
	console.log("Imagine something useful being done to html here!");
});

gulp.task ('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, cssvars, cssnested, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task ('watch', function(){
	watch('./apps/index.html', function(){
		gulp.start('html');
	});
	watch('./app/assets/styles/**/*.css', function(){

		gulp.start('styles');
	});

});