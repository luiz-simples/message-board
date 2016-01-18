'use strict';

var gulp = require('gulp');
var path = require('path');
var childProcess = require('child_process');
var serverProcess = false;
var folderServer = path.dirname(path.dirname(__dirname)).concat('/api/');
var gUtil = require('gulp-util');

gulp.task('api:start', function() {
  serverProcess = childProcess.spawn('node', ['server.js'], {cwd: folderServer});

  serverProcess.stdout.on('data', function (data) {
    gUtil.log(gUtil.colors.green(String(data)));
  });

  serverProcess.stderr.on('data', function (data) {
    gUtil.log(gUtil.colors.red(String(data)));
  });

  return serverProcess;
});

gulp.task('api:stop', function() {
  if (serverProcess)
    serverProcess.kill('SIGTERM');
  serverProcess = false;
  return serverProcess;
});
