var jwt = require('express-jwt');
var secret = require('../config').secret;

function getTokenFromHeader(req) {
  if(req.headers && req.headers.authorization) {
    var components = req.headers.authorization.split(' ');
    if(components.length == 2 && components[0] == 'Token') {
      return components[1];
    }
  }

  return null;
}

var auth = {
  required: jwt({
    secret: secret,
    userProperty: 'payload',
    getToken: getTokenFromHeader
  }),
  optional: jwt({
    secret: secret,
    userProperty: 'payload',
    credentialsRequired: false,
    getToken: getTokenFromHeader,
  })
}

module.exports = auth;
