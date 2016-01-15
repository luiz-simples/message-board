'use strict';

var path = require('path');
var http = require('http');
var express = require('express');
var socketIO = require('socket.io');
var machineIPs = require('./lib/machine.ips');
var publicPath = path.dirname(__dirname).concat('/public');

function MessageBoardServer() {
  var server = this;

  server.appExpress = express();
  server.appExpress.use('/', express.static(publicPath));

  server.appHttp = http.Server(server.appExpress);
  server.appSocket = socketIO(server.appHttp);

  server.run = function(port, cb) {
    server.ips = machineIPs(port);
    server.appHttp.listen(port, cb);
  };
}

module.exports = MessageBoardServer;
