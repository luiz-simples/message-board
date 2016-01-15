'use strict';

var port = 2018;
var log = require('log-util');
var MessageBoardServer = require('./src/MessageBoardServer');

var mbServer = new MessageBoardServer();

mbServer.run(port, function() {
  log.info('Server RUN in ', mbServer.ips);
});
