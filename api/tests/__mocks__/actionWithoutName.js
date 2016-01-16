'use strict';

var actionWithoutNameMock = jest.genMockFunction().mockImplementation(function() {
  return actionWithoutNameMock.__returnMock__;
});

actionWithoutNameMock.__returnMock__ = {
  funcActionMock: true,
  actionFile: 'actionWithoutName'.pathMock()
};

module.exports = actionWithoutNameMock;
