'use strict';

var socketIoMock = jest.genMockFunction().mockImplementation(function() {
  socketIoMock.__returnMock__ = { funcSocketIO: true };
  return socketIoMock.__returnMock__;
});

module.exports = socketIoMock;
