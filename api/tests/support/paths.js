'use strict';

var path = require('path');
var pathSrc = path.resolve(__dirname.concat('/../../src'));
var pathRoot = path.resolve(__dirname.concat('/../..'));
var pathMock = path.resolve(__dirname.concat('/../__mocks__'));

String.prototype.pathSrc = function() {
  return pathSrc.concat('/', this);
};

String.prototype.pathRoot = function() {
  return pathRoot.concat('/', this);
};

String.prototype.pathMock = function() {
  return pathMock.concat('/', this);
};

String.prototype.requireSrc = function(dontMock) {
  if (dontMock === undefined) dontMock = true;
  var path = this.pathSrc();
  if (dontMock) jest.dontMock(path);
  return require(path);
};

String.prototype.requireMock = function(dontMock) {
  if (dontMock === undefined) dontMock = true;
  var path = this.pathMock();
  if (dontMock) jest.dontMock(path);
  return require(path);
};
