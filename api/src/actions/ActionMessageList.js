'use strict';

function ActionMessageList(mbServer) {
  var action = this;

  action.actionName = 'send:action:message:list';

  action.execute = function() {
    var iniMessages = [];
    var totMessage = 30;
    var lastMessage = mbServer.worldAllMessages.length;

    for (var i = 1; i <= totMessage && i <= lastMessage; i++)
      iniMessages.push(mbServer.worldAllMessages[lastMessage-i]);

    mbServer.worldMessages.warnAboutIt({
      actionName: 'receive:action:message:list',
      messages: iniMessages
    });
  };
}

module.exports = ActionMessageList;
