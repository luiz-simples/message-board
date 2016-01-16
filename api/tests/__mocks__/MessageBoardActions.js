'use strict';

var mbActionsMock = jest.genMockFunction().mockImplementation(function() {
  mbActionsMock.__returnMock__ = {
    registerActions: jest.genMockFunction()
  };

  return mbActionsMock.__returnMock__;
});

module.exports = mbActionsMock;
