(function() {
  'use strict';

  angular
    .module('spa')
    .directive('mbMessages', MessagesDirective);

  /** @ngInject */
  function MessagesDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/mbMessages/mbMessages.html',
      controller: 'mbMessagesController',
      controllerAs: 'vm',
      scope: {}
    };
  }
})();
