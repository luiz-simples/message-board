(function() {
  'use strict';

  angular
    .module('spa')
    .run(runBlock);

  /** @ngInject */
  function runBlock($, $timeout, $localStorage, mbSocket, mbAuth) {
    mbSocket.register();

    mbAuth.onLogged(function(action) {
      $localStorage.userAuth = action.auth;
    });

    mbAuth.onLogout(function() {
      delete $localStorage.userAuth;
    });

    $timeout(function() {
      $.AdminLTE.layout.activate();
    });
  }
})();
