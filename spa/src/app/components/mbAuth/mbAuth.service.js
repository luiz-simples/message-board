(function() {
  'use strict';

  angular
    .module('spa')
    .service('mbAuth', AuthService);

  /** @ngInject */
  function AuthService(mbActions) {
    var service = this;
    var authLogged = 'auth:logged';
    var authLogout = 'auth:logout';

    service.logged = function(auth) {
      return mbActions.sendAction({
        actionName: authLogged,
        auth: auth
      });
    };

    service.logout = function() {
      return mbActions.sendAction({
        actionName: authLogout
      });
    };

    service.onLogged = function(onLogged) {
      return mbActions.onAction(authLogged, onLogged);
    };

    service.onLogout = function(onLogout) {
      return mbActions.onAction(authLogout, onLogout);
    };
  }
})();
