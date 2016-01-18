(function() {
  'use strict';

  angular
    .module('spa')
    .directive('mbLogin', mbLogin);

  /** @ngInject */
  function mbLogin(mbLogin) {
    return {
      restrict: 'E',
      templateUrl: 'app/components/mbLogin/mbLogin.html',
      controller: 'mbLoginController',
      controllerAs: 'vm',
      scope: {},
      link: function(scope, element) {
        var dialog = element.children().first();

        mbLogin.onOpenModalLogin(function() {
          dialog.modal('show');
        });

        mbLogin.onCloseModalLogin(function() {
          dialog.modal('hide');
        });
      }
    };
  }
})();
