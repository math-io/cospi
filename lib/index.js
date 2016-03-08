'use strict';

/*
* NOTE: the original C++ code and copyright notice is from the [Boost library]{http://www.boost.org/doc/libs/1_55_0/boost/math/special_functions/cos_pi.hpp}.
*
* The implementation has been modified for JavaScript.
*/

/**
* (C) Copyright John Maddock 2006.
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
*/

// MODULES //

var abs = require( 'math-abs' );
var cos = require( 'math-cos' );
var floor = require( 'math-floor' );
var sin = require( 'math-sin' );
var trunc = require( 'math-truncate' );


// CONSTANTS //

var PI = require( 'const-pi' );
var PINF = require( 'const-pinf-float64' );
var NINF = require( 'const-ninf-float64' );


// COSPI //

/**
* FUNCTION: cospi( x )
*	Computes the value of `cos(πx)`.
*
* @param {Number} x - input value
* @returns {Number} function value
*/
function cospi( x ) {
	if ( x !== x ) {
		return NaN;
	}
	if ( x === PINF || x === NINF ) {
		throw new RangeError( 'invalid input argument. Must provide a finite number. Value: `' + x + '`.' );
	}
	var rem;
	var invert;
	invert = false;
	if ( abs( x ) < 0.25 ) {
		return cos( PI * x );
	}
	if ( x < 0 ) {
		x = -x;
	}
	rem = floor( x );
	if ( trunc( rem ) & 1 ) {
		invert = !invert;
	}
	rem = x - rem;
	if ( rem > 0.5 ) {
		rem = 1 - rem;
		invert = !invert;
	}
	if ( rem === 0.5 ) {
		return 0;
	}
	if ( rem > 0.25 ) {
		rem = 0.5 - rem;
		rem = sin( PI * rem );
	} else {
		rem = cos( PI * rem );
	}
	return invert ? -rem : rem;
} // end FUNCTION cospi()


// EXPORTS //

module.exports = cospi;
