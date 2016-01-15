(function() {
  'use strict';

  describe('Service mbActions', function() {
    var rootScope;
    var mbActions;

    beforeEach(module('spa'));

    describe('Using $rootScope', function() {
      var action;
      var callbackAction;

      beforeEach(inject(function($rootScope, _mbActions_) {
        action = { actionName: 'action:teste' };
        mbActions = _mbActions_;
        callbackAction = jasmine.createSpy('callbackAction');
        mbActions.onAction(action.actionName, callbackAction);
      }));

      it('should be registered', function() {
        expect(mbActions).not.toEqual(null);
      });

      it('should execute callback when listen action', function() {
        mbActions.sendAction(action);
        expect(callbackAction).toHaveBeenCalledWith(action);
      });

      it('should ignore callback when listen other action', function() {
        action.actionName = 'action:other';
        mbActions.sendAction(action);
        expect(callbackAction).not.toHaveBeenCalled();
      });

      it('should ignore callback when listen without action', function() {
        mbActions.sendAction(undefined);
        expect(callbackAction).not.toHaveBeenCalled();
      });
    });

    describe('With $rootScopeMocked', function() {
      var messageBoardAction;

      beforeEach(function(){
        module(function($provide){
          $provide.service('$rootScope', function() {
            var newScope = jasmine.createSpy('$newScope');
            newScope.$on = jasmine.createSpy('$on');
            newScope.$broadcast = jasmine.createSpy('$broadcast');

            var $rootScopeMocked = this;
            $rootScopeMocked.newScope = newScope;
            $rootScopeMocked.$new = jasmine.createSpy('$new').and.returnValue(newScope);
          });
        });
      });

      beforeEach(inject(function($rootScope, _mbActions_) {
        rootScope = $rootScope;
        mbActions = _mbActions_;
        messageBoardAction = 'message-board-action';
        mbActions.messageBoardAction = messageBoardAction;
      }));

      it('should be registered', function() {
        expect(mbActions).not.toEqual(null);
      });

      it('should create new isolate scope', function() {
        var isolate = true;
        expect(rootScope.$new).toHaveBeenCalledWith(isolate);
      });

      it('should call global $broadcast when send action', function() {
        var action = { actionName: 'action:teste' };

        mbActions.sendAction(action);
        expect(rootScope.newScope.$broadcast).toHaveBeenCalledWith(messageBoardAction, action);
      });

      it('should register with $on when listen action', function() {
        var action = { actionName: 'action:teste' };
        mbActions.onAction(action.actionName);
        expect(rootScope.newScope.$on).toHaveBeenCalledWith(messageBoardAction, jasmine.any(Function));
      });

      it('should call watchAction when register action', function() {
        var action = { actionName: 'action:teste' };
        var callbackAction = jasmine.createSpy('callbackAction');

        mbActions.watchAction = jasmine.createSpy('watchAction');
        mbActions.onAction(action.actionName, callbackAction);

        expect(mbActions.watchAction).toHaveBeenCalledWith(action.actionName, callbackAction);
      });
    });
  });
})();
