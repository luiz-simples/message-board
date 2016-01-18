'use strict';

var randtoken = require('rand-token');

module.exports = function(server) {
  server.appExpress.post('/login', function(req, res) {
    var email = String(req.body.email || '').trim();

    var withToken = Boolean(server.emails.hasOwnProperty(email) && server.emails[email]);
    if (withToken) delete server.tokens[server.emails[email]];

    var token = randtoken.generate(16);
    server.emails[email] = token;
    server.tokens[token] = email;

    res.send({ token: token });
  });
};
