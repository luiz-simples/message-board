'use strict';

var actionMock = jest.genMockFunction().mockImplementation(function() {
  return actionMock.__returnMock__;
});

actionMock.__returnMock__ = { funcActionMock: true };

module.exports = actionMock;
