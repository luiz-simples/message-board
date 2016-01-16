'use strict';

var compressionMock = jest.genMockFunction().mockImplementation(function() {
  compressionMock.__returnMock__ = { funcCompress: true };
  return compressionMock.__returnMock__;
});

module.exports = compressionMock;
