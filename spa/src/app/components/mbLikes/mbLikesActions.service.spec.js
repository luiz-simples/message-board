(function() {
  'use strict';

  describe('Service mbLikesActions', function() {
    var mbActions;
    var mbLikesActions;

    beforeEach(module('spa'));

    beforeEach(function(){
      module(function($provide){
        $provide.service('mbActions', function() {
          var mbActionsMocked = this;
          mbActionsMocked.onAction = jasmine.createSpy('onAction');
          mbActionsMocked.sendAction = jasmine.createSpy('onAction');
        });
      });
    });

    beforeEach(inject(function(_mbActions_, _mbLikesActions_) {
      mbActions = _mbActions_;
      mbLikesActions = _mbLikesActions_;
    }));

    it('should be registered', function() {
      expect(mbLikesActions).not.toEqual(null);
    });

    it('should register listen likes', function() {
      var actionName = 'action:board:on:like';
      var callbackOnLike = jasmine.createSpy('callbackOnLike');

      mbLikesActions.onLike(callbackOnLike);
      expect(mbActions.onAction).toHaveBeenCalledWith(actionName, callbackOnLike);
    });

    it('should send like action', function() {
      var actionName = 'action:board:send:like';
      var likeObj = {};

      mbLikesActions.sendLike(likeObj);
      expect(mbActions.sendAction).toHaveBeenCalledWith(jasmine.objectContaining({
        actionName: actionName,
        like: likeObj
      }));
    });
  });
})();
