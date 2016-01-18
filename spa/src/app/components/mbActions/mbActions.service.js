(function() {
  'use strict';

  angular
    .module('spa')
    .service('mbActions', mbActions);

  /** @ngInject */
  function mbActions($rootScope) {
    var service = this;
    var scpIsolate = true;
    var scopeActions = $rootScope.$new(scpIsolate);

    service.messageBoardAction = 'message-board-action';

    service.sendAction = function(obj) {
      scopeActions.$broadcast(service.messageBoardAction, obj);
    };

    service.onAllActions = function(callback) {
      return scopeActions.$on(service.messageBoardAction, function(e, data) {
        callback(data);
      });
    };

    service.onAction = function(actionName, callback) {
      return service.onAllActions(function(action) {
        var withoutAction = Boolean(!action || action.actionName !== actionName);
        if (withoutAction) return;
        callback(action);
      });
    };
  }
})();
