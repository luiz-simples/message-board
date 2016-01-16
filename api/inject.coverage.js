'use strict';

var fs = require('fs');
var glob = require('glob');
var pkg = require('./package');

glob("src/**/*.js", function (er, files) {
  var testFiles = {};
  files.map(function(path) {
    testFiles[path] = true;
  });

  pkg.jest.collectCoverageOnlyFrom = testFiles;

  fs.writeFileSync('./package.json', JSON.stringify(pkg, undefined, 2));
});
