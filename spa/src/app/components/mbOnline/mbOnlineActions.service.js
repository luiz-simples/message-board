(function() {
  'use strict';

  angular
    .module('spa')
    .service('mbOnlineActions', mbOnlineActions);

  /** @ngInject */
  function mbOnlineActions(mbActions) {
    var service = this;
    var actionBase = 'action:board:on:';

    service.onConnect = function(onConnect) {
      var actionConnect = actionBase.concat('connect');
      return mbActions.onAction(actionConnect, onConnect)
    };

    service.onDisconnect = function(onDisconnect) {
      var actionDisconnect = actionBase.concat('disconnect');
      return mbActions.onAction(actionDisconnect, onDisconnect)
    };
  }
})();
