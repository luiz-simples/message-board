(function() {
  'use strict';

  describe('Service mbCommentsActions', function() {
    var mbActions;
    var mbCommentsActions;

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

    beforeEach(inject(function(_mbActions_, _mbCommentsActions_) {
      mbActions = _mbActions_;
      mbCommentsActions = _mbCommentsActions_;
    }));

    it('should be registered', function() {
      expect(mbCommentsActions).not.toEqual(null);
    });

    it('should register listen comments', function() {
      var actionName = 'action:board:on:comment';
      var callbackOnComment = jasmine.createSpy('callbackOnComment');

      mbCommentsActions.onComment(callbackOnComment);
      expect(mbActions.onAction).toHaveBeenCalledWith(actionName, callbackOnComment);
    });

    it('should send comment action', function() {
      var actionName = 'action:board:send:comment';
      var commentObj = {};

      mbCommentsActions.sendComment(commentObj);
      expect(mbActions.sendAction).toHaveBeenCalledWith(jasmine.objectContaining({
        actionName: actionName,
        comment: commentObj
      }));
    });
  });
})();
