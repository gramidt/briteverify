#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> The unofficial BriteVerify API Client for NodeJS.


## Install

```sh
$ npm install --save briteverify
```


## Usage

```js
var briteverify = require('briteverify')(apiKey);

var query = {
  address: 'james@yahoo.com'
};

briteverify.email.verify(query, function (err, data) {
  if (err) {
    console.log('error:')
    console.log(err);
  } else {
    console.log(data);
  }
  done();
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
