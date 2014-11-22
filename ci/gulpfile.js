var gulp = require('gulp'),
    psi = require('psi'),
    grunt = require('gulp-grunt')(gulp);

gulp.task('default', ['psi', 'wpt', 'phantomas']);

gulp.task('psi', function (cb) {
	psi({
	    nokey: 'true', // or use key: ‘YOUR_API_KEY’
	    url: 'http://mascots-staging.azurewebsites.net/',
	    strategy: 'desktop',
	    threshold: 90
	}, cb);
});

gulp.task('phantomas', ['grunt-phantomas']);

gulp.task('wpt', ['grunt-wpt']);