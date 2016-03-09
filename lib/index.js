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
var floor = require( 'math-floor' );
var sin = require( 'math-sin' );


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
	var rx;
	if ( x !== x ) {
		return NaN;
	}
	if ( x === PINF || x === NINF ) {
		throw new RangeError( 'invalid input argument. Must provide a finite number. Value: `' + x + '`.' );
	}
	if ( x > MAX_INTEGER ) {
		// Always even integer...
		return 1.0;
	}
	// Argument reduction (reduce to [0,1))...
	ax = abs( x );
	rx = ax - floor( ax );

	if ( rx === 0.5 ) {
		return 0.0;
	}
	if ( rx < 0.25 ) {
		return cos( PI*rx );
	}
	if ( rx < 0.75 ) {
		rx = 0.5 - rx;
		return sin( PI*rx ); // recall sin(-x) = -sin(x), thus returned result will be properly signed
	}
	rx = 1.0 - rx;
	return -cos( PI*rx );
} // end FUNCTION cospi()


// EXPORTS //

module.exports = cospi;
