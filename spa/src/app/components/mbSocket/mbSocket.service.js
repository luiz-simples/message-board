(function() {
  'use strict';

  angular
    .module('spa')
    .service('mbSocket', SocketService);

  /** @ngInject */
  function SocketService($location, socket, mbActions, hostServer) {
    var service = this;

    var hostWorldMessages = hostServer + '/world-messages';

    service.register = function() {
      var socketWorldMessages = socket(hostWorldMessages);

      mbActions.onAllActions(function(action) {
        var actionSendServer = 'send:action';

        if (!action) return;
        if (!action.actionName) return;

        var notSendServer = action.actionName.indexOf(actionSendServer) !== 0;
        if (notSendServer) return;

        socketWorldMessages.emit('send:action:world', action);
      });

      socketWorldMessages.on('connect', function () {
        socketWorldMessages.on('receive:action:world', mbActions.sendAction);
      });
    };
  }
})();
