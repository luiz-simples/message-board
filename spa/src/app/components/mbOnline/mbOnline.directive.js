(function() {
  'use strict';

  angular
    .module('spa')
    .directive('mbOnline', mbOnline);

  /** @ngInject */
  function mbOnline() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/mbOnline/mbOnline.html'
    };
  }
})();
