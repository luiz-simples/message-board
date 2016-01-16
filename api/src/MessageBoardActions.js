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
      var Action = require(actionFile);
      return new Action(mbServer);
    });
  };
}

module.exports = MessageBoardActions;
