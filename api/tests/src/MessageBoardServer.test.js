'use strict';

var helmetMock = require('helmet');
var expressMock = require('express');
var socketIoMock = require('socket.io');
var compressionMock = require('compression');

// var MessageBoardServer = 'MessageBoardServer'.requireSrc();

describe('MessageBoardServer', function() {
  describe('new instance server', function() {
    var httpMock;
    // var mbServer;

    beforeEach(function() {
      helmetMock.mockClear();
      socketIoMock.mockClear();
      compressionMock.mockClear();
      expressMock.static.mockClear();

      httpMock = {
        Server: jest.genMockFunction().mockImplementation(function() {
          httpMock.Server.__returnMock__ = { listen: jest.genMockFunction() };
          return httpMock.Server.__returnMock__;
        })
      };

      // mbServer = new MessageBoardServer(httpMock);
    });

    it('should use express', function() {
      var once = 1;
      expect(httpMock.Server.mock.calls.length).toEqual(once);
    });
    
  });
});
