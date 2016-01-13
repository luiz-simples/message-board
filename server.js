'use strict';

var portHttp = 2018;
var machineIPs = require('./machine.ips');
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(portHttp, function() {
  var separatorIP = '\r\n';
  var ips = machineIPs(portHttp, separatorIP);
  console.log('Server RUN in:\r\n', ips);
});
