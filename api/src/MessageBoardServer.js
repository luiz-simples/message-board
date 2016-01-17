'use strict';

var path = require('path');
var helmet = require('helmet');
var express = require('express');
var socketIO = require('socket.io');
var compression = require('compression');
var machineIPs = require('./lib/machine.ips');
var publicPath = path.dirname(__dirname).concat('/public');

function MessageBoardServer(http, mbActions) {
  var server = this;

  server.appExpress = express();
  server.appExpress.use(helmet())
  server.appExpress.use(compression());
  server.appExpress.use('/', express.static(publicPath));

  server.appHttp = http.Server(server.appExpress);
  server.worldMessages = socketIO(server.appHttp).of('/world-messages');

  server.worldMessages.on('connection', function(client) {
    var allActions = mbActions.getActionsInstance(server);
    console.log(client);
    client.on('send:action:world', function (actProps) {
      var actionName = actProps ? actProps.actionName : undefined;
      var withoutAction = Boolean(!actionName || !allActions.hasOwnProperty(actionName) || !allActions[actionName]);
      if (withoutAction) return client.emit('action not found', actProps);

      var actionObj = allActions[actionName];

      actionObj.run(actProps);
    });
  });

  server.run = function(port, cb) {
    server.ips = machineIPs(port);
    server.appHttp.listen(port, cb);
  };
}

module.exports = MessageBoardServer;
