var gulp = require('gulp'),
    grunt = require('gulp-grunt')(gulp),
    psi = require('psi'),
    tmi = require('tmi');

gulp.task('default', ['psi', 'wpt', 'phantomas']);

gulp.task('psi', function (cb) {
	psi({
	    nokey: 'true', // or use key: ‘YOUR_API_KEY’
	    url: 'http://mascots-staging.azurewebsites.net/',
	    strategy: 'desktop',
	    threshold: 90
	}, cb);
});

gulp.task('tmi', function (cb) {
    tmi({
        nokey: 'true',
        url: 'http://mascots-staging.azurewebsites.net/',
        strategy: 'desktop',  // optional
        threshold: 90       // optional
    }, cb);
});

gulp.task('phantomas', ['grunt-phantomas']);

gulp.task('perfbudget', ['grunt-perfbudget']);