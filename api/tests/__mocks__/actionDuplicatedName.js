'use strict';

var actionDuplicatedNameMock = jest.genMockFunction().mockImplementation(function() {
  return actionDuplicatedNameMock.__returnMock__;
});

actionDuplicatedNameMock.__returnMock__ = {
  funcActionMock: true,
  actionName: 'action:default',
  actionFile: 'actionDuplicatedName'.pathMock()
};

module.exports = actionDuplicatedNameMock;
