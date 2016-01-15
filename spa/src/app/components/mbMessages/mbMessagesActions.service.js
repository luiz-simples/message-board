(function() {
  'use strict';

  angular
    .module('spa')
    .service('mbMessagesActions', mbMessagesActions);

  /** @ngInject */
  function mbMessagesActions(mbActions) {
    var service = this;
    var actionBase = 'action:board:';
    var actionNameMessage = 'message';
    var onAction = actionBase.concat('on:');
    var sendAction = actionBase.concat('send:');

    service.onMessage = function(onMessage) {
      var actionMessage = onAction.concat(actionNameMessage);
      return mbActions.onAction(actionMessage, onMessage)
    };

    service.sendMessage = function(message) {
      var actionMessage = sendAction.concat(actionNameMessage);
      return mbActions.sendAction({ actionName: actionMessage, message: message });
    };
  }
})();
