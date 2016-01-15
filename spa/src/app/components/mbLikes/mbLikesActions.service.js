(function() {
  'use strict';

  angular
    .module('spa')
    .service('mbLikesActions', mbLikesActions);

  /** @ngInject */
  function mbLikesActions(mbActions) {
    var service = this;
    var actionBase = 'action:board:';
    var actionNameLike = 'like';
    var onAction = actionBase.concat('on:');
    var sendAction = actionBase.concat('send:');

    service.onLike = function(onLike) {
      var actionLike = onAction.concat(actionNameLike);
      return mbActions.onAction(actionLike, onLike)
    };

    service.sendLike = function(like) {
      var actionLike = sendAction.concat(actionNameLike);
      return mbActions.sendAction({ actionName: actionLike, like: like });
    };
  }
})();
