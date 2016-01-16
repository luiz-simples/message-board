'use strict';

var helmetMock = jest.genMockFunction().mockImplementation(function() {
  helmetMock.__returnMock__ = { funcHelmet: true };
  return helmetMock.__returnMock__;
});

module.exports = helmetMock;
