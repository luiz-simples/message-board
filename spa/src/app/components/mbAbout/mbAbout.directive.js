(function() {
  'use strict';

  angular
    .module('spa')
    .directive('mbAbout', mbAbout);

  /** @ngInject */
  function mbAbout() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/mbAbout/mbAbout.html'
    };
  }
})();
