'use strict';

var portHttp = 2018;
var log = require('log-util');
var http = require('http');
var express = require('express');
var socketIO = require('socket.io');
var machineIPs = require('./machine.ips');

var app = express();
var serverHttp = http.Server(app);
var serverSocket = socketIO(serverHttp);

var pathStaticHome = __dirname.concat('/public');

app.use('/', express.static(pathStaticHome));

serverHttp.listen(portHttp, function(){
  var separatorIP = '\r\n';
  var ips = machineIPs(portHttp, separatorIP);
  log.info('Server RUN in ', ips);
});
