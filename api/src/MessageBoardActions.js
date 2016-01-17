'use strict';

var glob = require('glob');
var patternPathActions = __dirname.concat('/**/actions/*.js');

function MessageBoardActions() {
  var mbActions = this;
  mbActions.allActions = {};

  mbActions.findListActions = function() {
    return glob.sync(patternPathActions) || [];
  };

  mbActions.requireListActions = function(actionsFiles) {
    return actionsFiles.map(function(actionFile) {
      var ActionClass = require(actionFile);
      ActionClass.actionFile = actionFile;
      return ActionClass;
    });
  };

  mbActions.unifyActions = function(listActions) {
    var actionsObject = {};

    listActions.forEach(function(action) {
      var withoutActionName = Boolean(!action || !action.hasOwnProperty('actionName') || !action.actionName);
      if (withoutActionName) throw new Error('Without ActionName in '.concat(action.actionFile));

      var duplicatedAction = actionsObject.hasOwnProperty(action.actionName);
      if (duplicatedAction) throw new Error('Duplicated Action in '.concat(action.actionFile, ' and ', actionsObject[action.actionName].actionFile));

      actionsObject[action.actionName] = action;
    });

    return actionsObject;
  };

  mbActions.getActionsInstance = function(mbServer) {
    var actionsFiles = mbActions.findListActions();

    var listActions = mbActions.requireListActions(actionsFiles).map(function(ActionClass) {
      return new ActionClass(mbServer);
    });

    var actionsInstance = mbActions.unifyActions(listActions);

    return actionsInstance;
  };
}

module.exports = MessageBoardActions;
