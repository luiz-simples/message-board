(function() {
  'use strict';

  angular
    .module('spa')
    .directive('mbTabs', mbTabs);

  /** @ngInject */
  function mbTabs() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/mbTabs/mbTabs.html'
    };
  }
})();
