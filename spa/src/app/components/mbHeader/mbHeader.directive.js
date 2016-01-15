(function() {
  'use strict';

  angular
    .module('spa')
    .directive('mbHeader', mbHeader);

  /** @ngInject */
  function mbHeader() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/mbHeader/mbHeader.html'
    };
  }
})();
