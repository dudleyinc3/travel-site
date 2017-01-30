var gulp = require("gulp");
var watch = require('gulp-watch');

gulp.task ('default', function(){
	console.log("We created a gulp file");
});

gulp.task ('html', function(){
	console.log("Imagine something useful being done to html here!");
});

gulp.task ('styles', function(){
	console.log("Imagine Sass PostCSS tasks running here!");
});

gulp.task ('watch', function(){
	watch('./apps/index.html', function(){
		gulp.start('html');
	});
	watch('./app/assets/styles/**/*.css', function(){

		gulp.start('styles');
	});

});