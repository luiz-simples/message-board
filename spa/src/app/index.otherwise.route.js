(function() {
  'use strict';

  angular
    .module('spa')
    .config(otherwiseRoute);

  /** @ngInject */
  function otherwiseRoute($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }
})();
