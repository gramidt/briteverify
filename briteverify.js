'use strict';

var _ = require('underscore');
var request = require('request');

module.exports = function (apiKey) {

  if (!apiKey) {
    throw new Error('briteverify missing "apiKey" parameter');
  }

  function _request (method, path, query, done) {
    var data = {
      apikey: apiKey
    };
    data = _(data).extend(query);

    var opts = {
      url: 'https://bpi.briteverify.com' + path,
      method: method,
      qs: data,
      timeout: 10000 // 10 seconds
    };

    request(opts, function (error, res, body) {
      if (error) {
        done(error);
      } else {
        done(null, JSON.parse(body), res);
      }
    });
  }

  function _get(path, query, done) {
    _request('GET', path, query, done);
  }

  return {

    email: {

      verify: function (query, callback) {
        _get('/emails.json', query, callback);
      }
    }
  };
};
