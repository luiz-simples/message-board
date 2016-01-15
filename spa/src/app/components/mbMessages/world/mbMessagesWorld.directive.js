(function() {
  'use strict';

  angular
    .module('spa')
    .directive('mbMessagesWorld', mbMessagesWorld);

  /** @ngInject */
  function mbMessagesWorld() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/mbMessages/world/mbMessagesWorld.html'
    };
  }
})();
