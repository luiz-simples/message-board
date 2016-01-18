'use strict';

function ActionMessageAdd(mbServer) {
  var action = this;

  action.actionName = 'send:action:message:add';

  action.execute = function(properties) {
    properties.likes = [];
    properties.comments = [];

    mbServer.worldAllMessages.push(properties);
    var code = mbServer.worldAllMessages.indexOf(properties) + 1;

    properties.id = code;
    properties.actionName = 'receive:action:message:add';

    mbServer.worldMessages.warnAboutIt(properties);
  };
}

module.exports = ActionMessageAdd;
