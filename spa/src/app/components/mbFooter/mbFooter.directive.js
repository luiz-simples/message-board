(function() {
  'use strict';

  angular
    .module('spa')
    .directive('mbFooter', mbFooter);

  /** @ngInject */
  function mbFooter() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/mbFooter/mbFooter.html'
    };
  }
})();
