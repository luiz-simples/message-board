'use strict';

var os = require('os');

module.exports = function(port) {
  var separator = '\r\n';
  var ifaces = os.networkInterfaces();

  var filterWithIP = function(v) {
    return String(v || '').trim();
  };

  return Object.keys(ifaces).map(function (ifname) {
    return ifaces[ifname].map(function (iface) {
      if ('IPv4' !== iface.family || iface.internal !== false) return;
      return 'http://' + iface.address + ':' + String(port);
    }).filter(filterWithIP).join(separator);
  }).filter(filterWithIP).join(separator);
};
