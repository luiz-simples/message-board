'use strict';

function ActionLike(mbServer) {
  var action = this;

  action.actionName = 'send:action:likes:add';

  action.execute = function(properties) {
    var message = mbServer.worldAllMessages.filter(function(msg) {
      return msg.id === properties.messageId;
    }).pop();

    message.likes.push(properties);
    var likeCode = message.likes.indexOf(properties) + 1;

    properties.id = likeCode;
    properties.actionName = 'receive:action:likes:add';

    mbServer.worldMessages.warnAboutIt(properties);
  };
}

module.exports = ActionLike;
