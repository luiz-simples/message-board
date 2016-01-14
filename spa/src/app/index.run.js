(function() {
  'use strict';

  angular
    .module('spa')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $, $timeout) {
    $timeout(function() {
      $.AdminLTE.layout.activate();
    });
  }

})();
