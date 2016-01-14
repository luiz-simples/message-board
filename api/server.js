'use strict';

var portHttp = 2018;
var express = require('express');
var machineIPs = require('./machine.ips');

var pathStaticHome = __dirname.concat('/public');

var app = express();

app.use('/', express.static(pathStaticHome));

app.listen(portHttp, function() {
  var separatorIP = '\r\n';
  var ips = machineIPs(portHttp, separatorIP);
  console.log('Server RUN in:\r\n', ips);
});
