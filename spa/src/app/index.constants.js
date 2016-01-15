/* global moment:false, $:false */
(function() {
  'use strict';

  angular
    .module('spa')
    .constant('$', $)
    .constant('moment', moment);
})();
