(function() {
  'use strict';

  angular
    .module('spa')
    .controller('mbLoginController', LoginController);

  /** @ngInject */
  function LoginController(Restangular, $localStorage, mbLogin, mbAuth) {
    var vm = this;
    vm.auth = { email: undefined };
    vm.withoutEmail = false;
    vm.serverError = false;

    vm.login = function() {
      vm.serverError = false;
      vm.withoutEmail = !vm.auth.email;
      if (vm.withoutEmail) return;

      Restangular.all('login').post(vm.auth).then(function(res) {
        mbAuth.logged({
          email: vm.auth.email,
          token: res.token
        });

        mbLogin.closeModalLogin();
      }).catch(function() {
        vm.serverError = true;
      });
    };
  }
})();
