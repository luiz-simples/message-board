'use strict';

var MessageBoardServer = 'MessageBoardServer'.requireSrc();

describe('MessageBoardServer', function() {
  describe('method #run', function() {
    var httpMock;
    var mbServer;

    beforeEach(function() {
      httpMock = {
        Server: jest.genMockFunction().mockImplementation(function() {
          httpMock.Server.__returnMock__ = { listen: jest.genMockFunction() };
          return httpMock.Server.__returnMock__;
        })
      };

      mbServer = new MessageBoardServer(httpMock);
    });

    it('should listen port passed', function() {
      var port = 2018;
      var callbackListen = { callbackListen: true };
      mbServer.run(port, callbackListen);
      expect(httpMock.Server.__returnMock__.listen.mock.calls).toEqual([[port, callbackListen]]);
    });
  });
});
