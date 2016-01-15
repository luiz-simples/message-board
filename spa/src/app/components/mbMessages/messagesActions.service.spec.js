(function() {
  'use strict';

  describe('Service mbMessagesActions', function() {
    var mbActions;
    var mbMessagesActions;

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

    beforeEach(inject(function(_mbActions_, _mbMessagesActions_) {
      mbActions = _mbActions_;
      mbMessagesActions = _mbMessagesActions_;
    }));

    it('should be registered', function() {
      expect(mbMessagesActions).not.toEqual(null);
    });

    it('should register listen message', function() {
      var actionName = 'action:board:on:message';
      var callbackOnMessage = jasmine.createSpy('callbackOnMessage');

      mbMessagesActions.onMessage(callbackOnMessage);
      expect(mbActions.onAction).toHaveBeenCalledWith(actionName, callbackOnMessage);
    });

    it('should send message action', function() {
      var actionName = 'action:board:send:message';
      var messageObj = {};

      mbMessagesActions.sendMessage(messageObj);
      expect(mbActions.sendAction).toHaveBeenCalledWith(jasmine.objectContaining({
        actionName: actionName,
        message: messageObj
      }));
    });
  });
})();
