(function() {
  'use strict';

  angular
    .module('spa')
    .controller('mbMessagesController', MessagesController);

  /** @ngInject */
  function MessagesController($scope, mbMessages) {
    var vm = this;

    vm.messages = [];
    vm.withoutMessage = false;

    mbMessages.onMessage(function(message) {
      $scope.$apply(function() {
        vm.messages.unshift(message);
      });
    });

    mbMessages.onListMessages(function(action) {
      $scope.$apply(function() {
        vm.messages = action.messages;
      });
    });

    mbMessages.callMessages();
  }
})();
