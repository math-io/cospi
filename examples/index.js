'use strict';

var linspace = require( 'compute-linspace' );
var cospi = require( './../lib' );

var x = linspace( -100, 100, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
	console.log( cospi( x[ i ] ) );
}
