(function() {
  'use strict';

  angular
    .module('spa')
    .directive('mbMessagesDirect', mbMessagesDirect);

  /** @ngInject */
  function mbMessagesDirect() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/mbMessages/direct/mbMessagesDirect.html'
    };
  }
})();
