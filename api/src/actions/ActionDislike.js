'use strict';

function ActionDislike(mbServer) {
  var action = this;

  action.actionName = 'send:action:likes:remove';

  action.execute = function(properties) {
    var message = mbServer.worldAllMessages.filter(function(msg) {
      return msg.id === properties.messageId;
    }).pop();

    var thisLike = message.likes.filter(function(like) {
      return like.id === action.id;
    }).pop();

    var index = message.likes.indexOf(thisLike);

    message.likes.splice(index, 1);

    properties.actionName = 'receive:action:likes:remove';

    mbServer.worldMessages.warnAboutIt(properties);
  };
}

module.exports = ActionDislike;
