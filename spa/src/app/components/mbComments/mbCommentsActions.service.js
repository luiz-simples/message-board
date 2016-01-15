(function() {
  'use strict';

  angular
    .module('spa')
    .service('mbCommentsActions', mbCommentsActions);

  /** @ngInject */
  function mbCommentsActions(mbActions) {
    var service = this;
    var actionBase = 'action:board:';
    var actionNameComment = 'comment';
    var onAction = actionBase.concat('on:');
    var sendAction = actionBase.concat('send:');

    service.onComment = function(onComment) {
      var actionComment = onAction.concat(actionNameComment);
      return mbActions.onAction(actionComment, onComment)
    };

    service.sendComment = function(comment) {
      var actionComment = sendAction.concat(actionNameComment);
      return mbActions.sendAction({ actionName: actionComment, comment: comment });
    };
  }
})();
