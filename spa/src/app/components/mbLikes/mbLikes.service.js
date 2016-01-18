(function() {
  'use strict';

  angular
    .module('spa')
    .service('mbLikes', LikesService);

  /** @ngInject */
  function LikesService(mbActions) {
    var service = this;
    var sendLike = 'send:action:likes:add';
    var receiveLike = 'receive:action:likes:add';
    var sendDislike = 'send:action:likes:remove';
    var receiveDislike = 'receive:action:likes:remove';

    service.sendLike = function(messageId) {
      return mbActions.sendAction({
        actionName: sendLike,
        messageId: messageId
      });
    };

    service.sendDislike = function(messageId) {
      return mbActions.sendAction({
        actionName: sendDislike,
        messageId: messageId
      });
    };

    service.onLike = function(messageId, onLike) {
      return mbActions.onAction(receiveLike, function(action) {
        var ignoreLike = Boolean(!action || action.messageId !== messageId);
        if (ignoreLike) return;
        onLike(action);
      });
    };

    service.onDislike = function(messageId, onDislike) {
      return mbActions.onAction(receiveDislike, function(action) {
        var ignoreLike = Boolean(!action || action.messageId !== messageId);
        if (ignoreLike) return;
        onDislike(action);
      });
    };
  }
})();
