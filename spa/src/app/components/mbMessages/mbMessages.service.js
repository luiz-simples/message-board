(function() {
  'use strict';

  angular
    .module('spa')
    .service('mbMessages', MessagesService);

  /** @ngInject */
  function MessagesService(mbActions) {
    var service = this;
    var sendMessage = 'send:action:message:add';
    var receiveMessage = 'receive:action:message:add';

    var callMessages = 'send:action:message:list';
    var receiveMessages = 'receive:action:message:list';

    service.onMessage = function(onMessage) {
      return mbActions.onAction(receiveMessage, onMessage);
    };

    service.sendMessage = function(message) {
      return mbActions.sendAction({
        actionName: sendMessage,
        message: message
      });
    };

    service.onListMessages = function(onListMessages) {
      return mbActions.onAction(receiveMessages, onListMessages);
    };

    service.callMessages = function() {
      return mbActions.sendAction({
        actionName: callMessages
      });
    };
  }
})();
