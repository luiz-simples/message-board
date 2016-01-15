(function() {
  'use strict';

  angular
    .module('spa')
    .config(mainRoute);

  /** @ngInject */
  function mainRoute($stateProvider) {
    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'app/main/main.html'
    });
  }
})();
