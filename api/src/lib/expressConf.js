'use strict';

var path = require('path');
var helmet = require('helmet');
var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');
var publicPath = path.dirname(path.dirname(__dirname)).concat('/public');

module.exports = function(server) {
  server.appExpress = express();
  server.appExpress.use(bodyParser.json()); // for parsing application/json
  server.appExpress.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  server.appExpress.use('/', express.static(publicPath));
  server.appExpress.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  server.appExpress.use(helmet())
  server.appExpress.use(compression());
};
