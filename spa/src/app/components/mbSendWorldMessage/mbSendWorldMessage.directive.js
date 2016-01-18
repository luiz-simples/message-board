(function() {
  'use strict';

  angular
    .module('spa')
    .directive('mbSendWorldMessage', mbSendWorldMessage);

  /** @ngInject */
  function mbSendWorldMessage() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/mbSendWorldMessage/mbSendWorldMessage.html',
      controller: 'mbSendWorldMessageController',
      controllerAs: 'vm',
      scope: {}
    };
  }
})();
