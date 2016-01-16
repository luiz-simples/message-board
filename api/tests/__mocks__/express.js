'use strict';

var expressMock = jest.genMockFunction().mockImplementation(function() {
  expressMock.__returnMock__ = {
    use: jest.genMockFunction(),
    static: jest.genMockFunction()
  };

  return expressMock.__returnMock__;
});

expressMock.static = jest.genMockFunction().mockImplementation(function() {
  expressMock.static.__returnMock__ = { funcExpressStatic: true };
  return expressMock.static.__returnMock__;
});

module.exports = expressMock;
