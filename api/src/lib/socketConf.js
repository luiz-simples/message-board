'use strict';

var socketIO = require('socket.io');

module.exports = function(server, mbActions) {
  server.worldMessages = socketIO(server.appHttp).of('/world-messages');

  var emitMessageClient = 'receive:action:world';

  server.worldMessages.warnAboutIt = function(action) {
    server.worldMessages.emit(emitMessageClient, action);
  };

  server.worldMessages.on('connection', function(client) {
    var allActions = mbActions.getActionsInstance(server);

    client.on('send:action:world', function (actProps) {
      var actionName = actProps ? actProps.actionName : undefined;
      var withoutAction = Boolean(!actionName || !allActions.hasOwnProperty(actionName) || !allActions[actionName]);
      if (withoutAction) return client.emit('action not found', actProps);

      var actionObj = allActions[actionName];

      actionObj.execute(actProps);
    });
  });
};
