#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> The unofficial BriteVerify API Client for NodeJS.


## Install

```sh
$ npm install --save briteverify
```


## Usage

```js
var briteverify = require('briteverify')(apiKey);

let emailAddress = 'james@yahoo.com';

briteverify
  .verifyEmail(invalidEmail)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (err) {
    console.log(err);
  });

```


## License

MIT © [Granville Schmidt]()


[npm-image]: https://badge.fury.io/js/briteverify.svg
[npm-url]: https://npmjs.org/package/briteverify
[travis-image]: https://travis-ci.org/granvilleschmidt/briteverify.svg?branch=master
[travis-url]: https://travis-ci.org/granvilleschmidt/briteverify
[daviddm-image]: https://david-dm.org/granvilleschmidt/briteverify.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/granvilleschmidt/briteverify
