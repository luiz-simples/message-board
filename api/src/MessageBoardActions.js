'use strict';

var glob = require('glob');
var patternPathActions = __dirname.concat('/**/actions/*.js');

function MessageBoardActions(mbServer) {
  var mbActions = this;
  mbActions.allActions = {};

  mbActions.findListActions = function() {
    return glob.sync(patternPathActions) || [];
  };

  mbActions.loadListActions = function() {
    return mbActions.findListActions().map(function(actionFile) {
      var action = require(actionFile)(mbServer);
      action.actionFile = actionFile;
      return action;
    });
  };

  mbActions.requireListActions = function() {
    var actionsObject = {};

    mbActions.loadListActions().forEach(function(action) {
      var withoutActionName = Boolean(!action || !action.hasOwnProperty('actionName') || !action.actionName);
      if (withoutActionName) throw new Error('Without ActionName in '.concat(action.actionFile));

      var duplicatedAction = actionsObject.hasOwnProperty(action.actionName);
      if (duplicatedAction) throw new Error('Duplicated Action in '.concat(action.actionFile, ' and ', actionsObject[action.actionName].actionFile));

      actionsObject[action.actionName] = action;
    });

    return actionsObject;
  };

  // mbActions.onAction = function() {
  //
  // };
  //
  // mbActions.onDisconnection = function () {
  //
  // };
  //
  // mbActions.onConnection = function (ioClient) {
  //   ioClient.on('disconnect', mbActions.onDisconnection);
  //   ioClient.on('message-board-actions', mbActions.onAction);
  // };

  mbActions.registerActions = function() {
    mbActions.allActions = mbActions.requireListActions();
    // mbServer.ioActions = mbServer.appSocket.of('/actions');
    // mbServer.ioActions.on('connection', mbActions.onConnection);
  };
}

module.exports = MessageBoardActions;
