(function() {
  'use strict';

  angular
    .module('spa')
    .controller('mbAboutController', AboutController);

  /** @ngInject */
  function AboutController(mbAuth, $localStorage) {
    var vm = this;

    vm.isLogged = Boolean($localStorage.userAuth);

    mbAuth.onLogged(function() {
      vm.isLogged = true;
    });

    mbAuth.onLogout(function() {
      vm.isLogged = false;
    });
  }
})();
