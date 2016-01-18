(function() {
  'use strict';

  angular
    .module('spa')
    .controller('mbHeaderController', HeaderController);

  /** @ngInject */
  function HeaderController($scope, mbLogin, mbAuth, $localStorage) {
    var vm = this;

    vm.isLogged = Boolean($localStorage.userAuth);

    mbAuth.onLogged(function() {
      vm.isLogged = true;
    });

    mbAuth.onLogout(function() {
      vm.isLogged = false;
    });

    vm.login = function() {
      mbLogin.openModalLogin();
    };

    vm.logout = function() {
      mbAuth.logout();
    };
  }
})();
