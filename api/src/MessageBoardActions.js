'use strict';

var glob = require('glob');
var patternPathActions = __dirname.concat('/**/actions/*.js');

function MessageBoardActions(mbServer) {
  var mbActions = this;

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

  mbActions.registerActions = function() {
    var allActions = {};

    mbActions.loadListActions().forEach(function(action) {
      var withoutActionName = Boolean(!action || !action.hasOwnProperty('actionName') || !action.actionName);
      if (withoutActionName) throw new Error('Without ActionName in '.concat(action.actionFile));

      var duplicatedAction = allActions.hasOwnProperty(action.actionName);
      if (duplicatedAction) throw new Error('Duplicated Action in '.concat(action.actionFile, ' and ', allActions[action.actionName].actionFile));

      allActions[action.actionName] = action;
    });

    return allActions;
  };
}

module.exports = MessageBoardActions;
