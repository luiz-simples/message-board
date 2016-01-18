'use strict';

var httpConf = require('./lib/httpConf');
var socketConf = require('./lib/socketConf');
var machineIPs = require('./lib/machine.ips');
var expressConf = require('./lib/expressConf');

function MessageBoardServer(http, mbActions) {
  var server = this;

  server.tokens = {};
  server.emails = {};
  server.worldAllMessages = require('./fixturesMessages');

  expressConf(server, http);
  server.appHttp = http.Server(server.appExpress);
  httpConf(server);
  socketConf(server, mbActions);

  server.run = function(port, cb) {
    server.ips = machineIPs(port);
    server.appHttp.listen(port, cb);
  };
}

module.exports = MessageBoardServer;
