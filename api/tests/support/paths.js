'use strict';

var path = require('path');
var pathRoot = path.resolve(__dirname.concat('/../..'));
var pathSrc = path.resolve(__dirname.concat('/../../src'));

String.prototype.pathSrc = function() {
  return pathSrc.concat('/', this);
};

String.prototype.pathRoot = function() {
  return pathRoot.concat(this);
};

String.prototype.requireSrc = function(dontMock) {
  if (dontMock === undefined) dontMock = true;
  var path = this.pathSrc();
  if (dontMock) jest.dontMock(path);
  return require(path);
};
