'use strict';

var port = 2018;
var http = require('http');
var log = require('log-util');
var MessageBoardServer = require('./src/MessageBoardServer');
var MessageBoardActions = require('./src/MessageBoardActions');

var mbActions = new MessageBoardActions();
var mbServer = new MessageBoardServer(http, mbActions);

mbServer.run(port, function() {
  log.info('Server RUN in ', mbServer.ips);
});
