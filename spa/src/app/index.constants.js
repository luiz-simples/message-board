/* global moment:false, $:false */
(function() {
  'use strict';

  angular
    .module('spa')
    .constant('moment', moment)
    .constant('$', $);
})();
