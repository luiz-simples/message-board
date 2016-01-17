(function() {
  'use strict';

  angular
    .module('spa')
    .service('mbMessagesActions', mbMessagesActions);

  /** @ngInject */
  function mbMessagesActions(mbActions) {
    var service = this;
    var sendMessage = 'send:message';
    var receiveMessage = 'receive:message';

    service.onMessage = function(onMessage) {
      return mbActions.onAction(receiveMessage, onMessage)
    };

    service.sendMessage = function(message) {
      return mbActions.sendAction({
        actionName: sendMessage,
        message: message
      });
    };
  }
})();
