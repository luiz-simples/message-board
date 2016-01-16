'use strict';

var port = 2018;
var http = require('http');
var log = require('log-util');
var MessageBoardServer = require('./src/MessageBoardServer');

var mbServer = new MessageBoardServer(http);

mbServer.run(port, function() {
  log.info('Server RUN in ', mbServer.ips);
});
