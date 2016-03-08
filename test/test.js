'use strict';

// MODULES //

var tape = require( 'tape' );
var incrspace = require( 'compute-incrspace' );
var pinf = require( 'const-pinf-float64' );
var ninf = require( 'const-ninf-float64' );
var abs = require( 'math-abs' );
var cospi = require( './../lib/' );


// FIXTURES //

var integers = require( './fixtures/integers.json' );
var decimals = require( './fixtures/decimals.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof cospi, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws a range error if provided either positive or negative infinity', function test( t ) {
	t.throws( foo, RangeError, 'throws range error' );
	t.throws( bar, RangeError, 'throws range error' );
	t.end();

	function foo() {
		cospi( pinf );
	}
	function bar() {
		cospi( ninf );
	}
});

tape( 'if provided `NaN`, the function returns `NaN`', function test( t ) {
	var y = cospi( NaN );
	t.ok( y !== y, 'returns NaN when provided NaN' );
	t.end();
});

tape( 'if provided an integer, the function returns `+-1.0`', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = integers.x;
	expected = integers.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = cospi( x[i] );
		t.equal( y, expected[ i ], 'returns '+expected[i] );
	}
	t.end();
});

tape( 'the function returns `0` for any value with fractional part equal to 1/2', function test( t ) {
	var x = incrspace( 0.5, 100.5, 1 );
	var y;
	var i;

	for ( i = 0; i < x.length; i++ ) {
		y = cospi( x[i] );
		if ( y === 0 ) {
			t.equal( y, 0, 'x: '+x[i]+'. Expected: 0' );
		}
	}
	t.end();
});

tape( 'the function computes `cos(πx)`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = decimals.x;
	expected = decimals.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = cospi( x[i] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'x: '+x[i]+'. Expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 1e-15 * Math.max( 1, abs( y ), abs( expected[i] ) );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+y+'. Expected: '+expected[i]+'. Tolerance: '+tol+'.' );
		}
	}
	t.end();
});
