'use strict';

var os = require('os');

module.exports = function(port, separator) {
  var ifaces = os.networkInterfaces();

  var filterWithIP = function(v) {
    return String(v || '').trim();
  };

  return Object.keys(ifaces).map(function (ifname) {
    return ifaces[ifname].map(function (iface, index) {
      if ('IPv4' !== iface.family || iface.internal !== false) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return;
      }

      // if (index) {
      //    this single interface has multiple ipv4 addresses
      //   return ifname + ':' + String(index) + ' ' + iface.address;
      // }

      // this interface has only one ipv4 adress
      return 'http://' + iface.address + ':' + String(port);
    }).filter(filterWithIP).join(separator);
  }).filter(filterWithIP).join(separator);
};
