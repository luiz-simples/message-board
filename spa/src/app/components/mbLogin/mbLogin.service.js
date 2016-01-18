(function() {
  'use strict';

  angular
    .module('spa')
    .service('mbLogin', LoginService);

  /** @ngInject */
  function LoginService(mbActions) {
    var service = this;
    var openModalLogin = 'open:model:login';
    var closeModalLogin = 'close:model:login'

    service.onOpenModalLogin = function(onOpenModalLogin) {
      return mbActions.onAction(openModalLogin, onOpenModalLogin);
    };

    service.onCloseModalLogin = function(onCloseModalLogin) {
      return mbActions.onAction(closeModalLogin, onCloseModalLogin);
    };

    service.openModalLogin = function() {
      return mbActions.sendAction({
        actionName: openModalLogin
      });
    };

    service.closeModalLogin = function() {
      return mbActions.sendAction({
        actionName: closeModalLogin
      });
    };
  }
})();
