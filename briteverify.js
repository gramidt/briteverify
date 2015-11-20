'use strict';

var _ = require('underscore');
var request = require('request');

const DEFAULT_TIMEOUT_IN_MILLISECONDS = 10000;

class BriteVerifyApi {

  constructor (apiKey) {
    if (!apiKey) {
      throw new Error('briteverify missing "apiKey" parameter');
    }

    this.apiKey = apiKey;
  }

  verifyEmail (email) {
    let query = { address: email };

    return this._get('/emails.json', query);
  }

  _request (method, path, query) {
    let data = { apikey: this.apiKey };
    data = _(data).extend(query);

    const BASE_API_PATH = 'https://bpi.briteverify.com';

    var opts = {
      url: BASE_API_PATH + path,
      method: method,
      qs: data,
      timeout: DEFAULT_TIMEOUT_IN_MILLISECONDS
    };

    return new Promise (function (resolve, reject) {

      request(opts, function (err, res, serializedBody) {
        if (err) reject(err);

        let body = JSON.parse(serializedBody);

        resolve(body);
      });
    });
  }

  _get (path, query) {
    return this._request('GET', path, query);
  }
}

module.exports = (apiKey) => new BriteVerifyApi(apiKey);
