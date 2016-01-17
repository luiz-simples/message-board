/* global moment:false, $:false, io:false */
(function() {
  'use strict';

  angular
    .module('spa')
    .constant('$', $)
    .constant('socket', io)
    .constant('moment', moment);
})();
