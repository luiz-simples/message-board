'use strict';

var helmetMock = require('helmet');
var expressMock = require('express');
var socketIoMock = require('socket.io');
var compressionMock = require('compression');
var MessageBoardServer = 'MessageBoardServer'.requireSrc();

describe('MessageBoardServer', function() {
  describe('new instance server', function() {
    var httpMock;
    var mbServer;

    beforeEach(function() {
      helmetMock.mockClear();
      socketIoMock.mockClear();
      compressionMock.mockClear();
      expressMock.static.mockClear();

      httpMock = {
        Server: jest.genMockFunction().mockImplementation(function() {
          httpMock.Server.__returnMock__ = { httpServer: true };
          return httpMock.Server.__returnMock__;
        })
      };

      mbServer = new MessageBoardServer(httpMock);
    });

    it('should use express', function() {
      var once = 1;
      expect(httpMock.Server.mock.calls.length).toEqual(once);
    });

    it('should use security policy with helmet', function() {
      var firstUse = 0;
      expect(expressMock.__returnMock__.use.mock.calls[firstUse]).toEqual([helmetMock.__returnMock__]);
    });

    it('should use compress gZip|deflate with compression', function() {
      var secondUse = 1;
      expect(expressMock.__returnMock__.use.mock.calls[secondUse]).toEqual([compressionMock.__returnMock__]);
    });

    it('should serve SPA with public folder', function() {
      var thirdUse = 2;
      var homeAddress = '/';
      expect(expressMock.__returnMock__.use.mock.calls[thirdUse]).toEqual([homeAddress, expressMock.static.__returnMock__]);
    });

    it('should use express.static to public folder', function() {
      var pathPublic = 'public'.pathRoot();
      expect(expressMock.static.mock.calls).toEqual([[pathPublic]]);
    });

    it('should pass instance express to http server', function() {
      expect(httpMock.Server.mock.calls).toEqual([[expressMock.__returnMock__]]);
    });

    it('should pass instance http.Server to socket server', function() {
      expect(socketIoMock.mock.calls).toEqual([[httpMock.Server.__returnMock__]]);
    });

    it('should register express in instance', function() {
      expect(mbServer.appExpress).toEqual(expressMock.__returnMock__);
    });

    it('should register http in instance', function() {
      expect(mbServer.appHttp).toEqual(httpMock.Server.__returnMock__);
    });

    it('should register socket in instance', function() {
      expect(mbServer.appSocket).toEqual(socketIoMock.__returnMock__);
    });
  });
});
