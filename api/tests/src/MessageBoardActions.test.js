'use strict';

var globMock = require('glob');
var actionMock = 'action'.requireMock();

var MessageBoardActions = 'MessageBoardActions'.requireSrc();

describe('MessageBoardActions', function() {
  var mbServer;
  var mbActions;

  var listActionsPrepared;

  var pathActionDefault;
  var pathActionWithoutName;
  var pathActionDuplicatedName;

  var prepareGlobSyncMock = function(listActionsPrepared) {
    globMock.sync = jest.genMockFunction().mockImplementation(function() {
      return listActionsPrepared;
    });
  };

  beforeEach(function() {
    globMock.mockClear();
    actionMock.mockClear();

    pathActionDefault = 'action'.pathMock();
    pathActionWithoutName = 'actionWithoutName'.pathMock();
    pathActionDuplicatedName = 'actionDuplicatedName'.pathMock();

    mbServer = jest.genMockFunction();
    mbActions = new MessageBoardActions(mbServer);
  });

  describe('All methods', function() {
    beforeEach(function() {
      listActionsPrepared = [ pathActionDefault ];
      prepareGlobSyncMock(listActionsPrepared);
    });

    it('#findListActions: should use glob for find actions', function() {
      var listActionsFound = mbActions.findListActions();
      var pathFindActions = '**/actions/*.js'.pathSrc();

      expect(listActionsFound).toEqual(listActionsPrepared);
      expect(globMock.sync.mock.calls).toEqual([[pathFindActions]]);
    });

    it('#loadListActions: should create instance of file action', function() {
      var actionsLoaded = mbActions.loadListActions();
      expect(actionsLoaded).toEqual([actionMock.__returnMock__]);
    });

    it('#registerActions: should return object with all actions', function() {
      mbActions.registerActions();

      expect(mbActions.allActions).toEqual({
        'action:default': actionMock.__returnMock__
      });
    });
  });

  describe('method #registerActions', function() {
    it('should throw error when action name not filled', function() {
      listActionsPrepared = [
        pathActionDefault,
        pathActionWithoutName
      ];

      prepareGlobSyncMock(listActionsPrepared);

      expect(function() { mbActions.registerActions(); }).toThrow('Without ActionName in '.concat(pathActionWithoutName));
    });

    it('should throw error when action name is duplicated', function() {
      listActionsPrepared = [
        pathActionDefault,
        pathActionDuplicatedName
      ];

      prepareGlobSyncMock(listActionsPrepared);

      expect(function() { mbActions.registerActions(); }).toThrow('Duplicated Action in '.concat(pathActionDuplicatedName, ' and ', pathActionDefault));
    });
  });
});
