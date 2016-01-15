(function() {
  'use strict';

  describe('Service mbOnlineActions', function() {
    var mbActions;
    var mbOnlineActions;

    beforeEach(module('spa'));

    beforeEach(function(){
      module(function($provide){
        $provide.service('mbActions', function() {
          var mbActionsMocked = this;
          mbActionsMocked.onAction = jasmine.createSpy('onAction');
        });
      });
    });

    beforeEach(inject(function(_mbActions_, _mbOnlineActions_) {
      mbActions = _mbActions_;
      mbOnlineActions = _mbOnlineActions_;
    }));

    it('should be registered', function() {
      expect(mbOnlineActions).not.toEqual(null);
    });

    it('should register listen user connect', function() {
      var actionName = 'action:board:on:connect';
      var callbackOnConnect = jasmine.createSpy('callbackOnConnect');

      mbOnlineActions.onConnect(callbackOnConnect);
      expect(mbActions.onAction).toHaveBeenCalledWith(actionName, callbackOnConnect);
    });

    it('should register listen user disconnect', function() {
      var actionName = 'action:board:on:disconnect';
      var callbackOnConnect = jasmine.createSpy('callbackOnConnect');

      mbOnlineActions.onDisconnect(callbackOnConnect);
      expect(mbActions.onAction).toHaveBeenCalledWith(actionName, callbackOnConnect);
    });
  });
})();
