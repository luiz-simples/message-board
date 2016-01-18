(function() {
  'use strict';

  angular
    .module('spa')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, RestangularProvider, hostServer) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    // Set options Restangular
    RestangularProvider.setBaseUrl(hostServer);
    RestangularProvider.setDefaultHeaders(
			{"Content-Type": "application/json;charset=utf-8"},
			{'X-Requested-With': 'XMLHttpRequest'},
      { Authorization: undefined }
    );
  }
})();
