/* global moment:false, $:false, io:false, window:false */

(function() {
  'use strict';

  /*eslint-disable */
  var location = window.location;
  /*eslint-enable */

  var protocol = location.protocol + '//';
  var hostname = location.hostname;
  var servport = location.port;
  var usesport = servport === 80 ? '' : ':'.concat(servport >= 3000 && servport < 4000 ? 2018 : servport);
  var hostServer = protocol + hostname + usesport;

  angular
    .module('spa')
    .constant('$', $)
    .constant('socket', io)
    .constant('hostServer', hostServer)
    .constant('moment', moment);
})();
