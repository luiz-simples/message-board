(function() {
  'use strict';

  angular
    .module('spa')
    .directive('mbLikes', LikesDirective);

  /** @ngInject */
  function LikesDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/mbLikes/mbLikes.html',
      controller: 'mbLikesController',
      controllerAs: 'vm',
      scope: { message: '=' }
    };
  }
})();
