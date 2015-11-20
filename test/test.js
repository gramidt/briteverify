'use strict';
const API_KEY = 'YOUR_BRITEVERIFY_API_KEY_HERE';

var assert = require('assert');
var briteverify = require('../briteverify')(API_KEY);

describe('briteverify node module', function () {

  let invalidEmail = 'james@yahoo.com';

  describe('#email.verify()', function () {

      it ('should return a valid response', function (done) {
        this.timeout(10000);
        briteverify
          .verifyEmail(invalidEmail)
          .then(function (response) {
            assert(response);
            assert.equal(response.error_code, 'email_account_invalid');
            done();
          });
      });
  });
});
