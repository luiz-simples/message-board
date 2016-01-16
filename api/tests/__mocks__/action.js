'use strict';

var actionMock = jest.genMockFunction().mockImplementation(function() {
  return actionMock.__returnMock__;
});

actionMock.__returnMock__ = {
  funcActionMock: true,
  actionName: 'action:default',
  actionFile: 'action'.pathMock()
};

module.exports = actionMock;
