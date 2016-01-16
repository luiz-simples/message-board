'use strict';

var socketIoMock = jest.genMockFunction().mockImplementation(function() {
  socketIoMock.__returnMock__ = { of: jest.genMockFunction() };

  return socketIoMock.__returnMock__;
});

module.exports = socketIoMock;
