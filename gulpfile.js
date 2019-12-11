var gulp = require('gulp'),
	sass = require('gulp-sass'),
	scss = require('gulp-scss'),
	browserSync = require('browser-sync'),
	del = require('del'),
	autoprefixer = require('gulp-autoprefixer') ;

gulp.task('scss', function() {
	return gulp.src('app/scss/*.scss')
	.pipe(sass())
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 10'], {cascade: true}))
	.pipe(gulp.dest('app/style'))
	.pipe(browserSync.reload({stream: true}))
});


gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('watch', function() {
	gulp.watch('app/scss/*.scss', gulp.parallel('scss'));
	gulp.watch('app/**/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});


gulp.task('default', gulp.parallel('watch', 'scss', 'browser-sync'));