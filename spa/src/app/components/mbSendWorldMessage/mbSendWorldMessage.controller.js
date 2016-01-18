(function() {
  'use strict';

  angular
    .module('spa')
    .controller('mbSendWorldMessageController', mbSendWorldMessageController);

  /** @ngInject */
  function mbSendWorldMessageController(mbMessages, mbAuth, $localStorage) {
    var vm = this;

    vm.isLogged = Boolean($localStorage.userAuth);

    mbAuth.onLogged(function() {
      vm.isLogged = true;
    });

    mbAuth.onLogout(function() {
      vm.isLogged = false;
    });

    vm.message = undefined;
    vm.withoutMessage = false;

    vm.sendMessageToWorld = function() {
      var withMessage = Boolean((vm.message || '').trim());

      vm.withoutMessage = !withMessage;

      if (withMessage) {
        mbMessages.sendMessage(vm.message);
        vm.message = undefined;
      }

      var desableRequestForm = false;
      return desableRequestForm;
    };
  }
})();
