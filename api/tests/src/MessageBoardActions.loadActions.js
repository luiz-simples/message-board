'use strict';

var globMock = require('glob');
var actionMock = 'action'.requireMock();

var MessageBoardActions = 'MessageBoardActions'.requireSrc();

describe('MessageBoardActions', function() {
  var mbServer;
  var mbActions;
  var listActionsPrepared;

  beforeEach(function() {
    listActionsPrepared = ['action'.pathMock()];

    globMock.mockClear();
    actionMock.mockClear();

    globMock.sync = jest.genMockFunction().mockImplementation(function() {
      return listActionsPrepared;
    });

    mbServer = jest.genMockFunction();
    mbActions = new MessageBoardActions(mbServer);
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
});
