'use strict';

var http = require('http');
var express = require('express');
var socketIO = require('socket.io');
var machineIPs = require('./lib/machine.ips');

function MessageBoardServer() {
  var server = this;

  server.appExpress = express();
  server.appExpress.use('/', express.static(__dirname.concat('/public')));

  server.appHttp = http.Server(server.appExpress);
  server.appSocket = socketIO(server.appHttp);

  server.run = function(port, cb) {
    server.ips = machineIPs(port);
    server.appHttp.listen(port, cb);
  };
}

module.exports = MessageBoardServer;
