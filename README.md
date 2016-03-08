cospi
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the [cosine][math-cos] of a number times [π][const-pi].


## Installation

``` bash
$ npm install math-cospi
```


## Usage

``` javascript
var cospi = require( 'math-cospi' );
```

#### cospi( x )

Computes `cos(πx)` more accurately than `cos(pi*x)`, especially for large `x`.


``` javascript
var y = cospi( 0 );
// returns 1

y = cospi( 0.5 );
// returns 0

y = cospi( 0.1 );
// returns ~0.951
```


## Examples

``` javascript
var linspace = require( 'compute-linspace' );
var cospi = require( 'math-cospi' );

var x = linspace( -100, 100, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
	console.log( cospi( x[ i ] ) );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/math-cospi.svg
[npm-url]: https://npmjs.org/package/math-cospi

[build-image]: http://img.shields.io/travis/math-io/cospi/master.svg
[build-url]: https://travis-ci.org/math-io/cospi

[coverage-image]: https://img.shields.io/codecov/c/github/math-io/cospi/master.svg
[coverage-url]: https://codecov.io/github/math-io/cospi?branch=master

[dependencies-image]: http://img.shields.io/david/math-io/cospi.svg
[dependencies-url]: https://david-dm.org/math-io/cospi

[dev-dependencies-image]: http://img.shields.io/david/dev/math-io/cospi.svg
[dev-dependencies-url]: https://david-dm.org/dev/math-io/cospi

[github-issues-image]: http://img.shields.io/github/issues/math-io/cospi.svg
[github-issues-url]: https://github.com/math-io/cospi/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io/
[math-cos]: https://github.com/math-io/cos
[const-pi]: https://github.com/const-io/pi
