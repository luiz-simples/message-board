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
      return scopeActions.$on(service.messageBoardAction, callback);
    };

    service.onAction = function(actionName, callback) {
      var watchAction = service.watchAction(actionName, callback);
      return service.onAllActions(watchAction);
    };

    service.watchAction = function(actionName, cb) {
      return function(e, obj) {
        var withoutAction = Boolean(!obj || obj.actionName !== actionName);
        if (withoutAction) return;
        cb(obj);
      }
    };
  }
})();
