'use strict';

// NOTES //

/**
* Notes:
*	=> cos(-x) = cos(x)
*	=> sin(-x) = -sin(x)
*	=> cos(π/2) = 0
*	=> cos(0) = 1
*	=> cos(π) = -1
*/


// MODULES //

var abs = require( 'math-abs' );
var cos = require( 'math-cos' );
var sin = require( 'math-sin' );
var floor = require( 'math-floor' );


// CONSTANTS //

var PI = require( 'const-pi' );
var PINF = require( 'const-pinf-float64' );
var NINF = require( 'const-ninf-float64' );
var MAX_INTEGER = require( 'const-max-safe-integer-float64' ) + 1;


// COSPI //

/**
* FUNCTION: cospi( x )
*	Computes the value of `cos(πx)`.
*
* @param {Number} x - input value
* @returns {Number} function value
*/
function cospi( x ) {
	var ax;
	var ix;
	var rx;
	var y;
	if ( x !== x ) {
		return NaN;
	}
	if ( x === PINF || x === NINF ) {
		throw new RangeError( 'invalid input argument. Must provide a finite number. Value: `' + x + '`.' );
	}
	ax = abs( x );
	if ( ax > MAX_INTEGER ) {
		// Always even integer...
		return 1.0;
	}
	// Argument reduction (reduce to [0,1))...
	ix = floor( ax );
	rx = ax - ix;
	if ( rx === 0.5 ) {
		return 0.0;
	}
	if ( rx < 0.25 ) {
		y = cos( PI*rx );
	}
	else if ( rx < 0.75 ) {
		rx = 0.5 - rx;
		y = sin( PI*rx ); // recall sin(-x) = -sin(x), thus returned result will be properly signed
	}
	else {
		rx = 1.0 - rx;
		y = -cos( PI*rx );
	}
	// If the integer of `x` is odd, we need to flip the sign...
	return ( ix%2 === 1 ) ? -y : y;
} // end FUNCTION cospi()


// EXPORTS //

module.exports = cospi;
