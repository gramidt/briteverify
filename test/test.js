'use strict';
var apiKey = 'YOUR_BRITEVERIFY_API_KEY_HERE';

var assert = require('assert');
var briteverify = require('../briteverify')(apiKey);

describe('briteverify node module', function () {

  var query = {
    address: 'james@yahoo.com'
  };

  describe('#email.verify()', function () {

      it ('should return a valid response', function (done) {
        this.timeout(10000);
        briteverify.email.verify(query, function (err, body) {
          assert(!err);
          assert(body);
          assert.equal(body.error_code, 'email_account_invalid');
          done();
        });
      });
  });
});
