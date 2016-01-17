(function() {
  'use strict';

  angular
    .module('spa')
    .run(runBlock);

  /** @ngInject */
  function runBlock($, $timeout, $location, socket, mbActions) {
    $timeout(function() {
      $.AdminLTE.layout.activate();
    });

    var protocol  = $location.protocol() + '://';
    var hostname  = $location.host();
    var servport  = $location.port();
    var usesport  = servport === 80 ? '' : ':'.concat(servport >= 3000 && servport < 4000 ? 2018 : servport);
    var address   = protocol + hostname + usesport;
    console.log(address);
    var sckServer = socket(address);

    mbActions.onAllActions(function(action) {
      console.log(action);
    });
  }
})();
