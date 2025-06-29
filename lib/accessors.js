/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var floor = require( '@stdlib/math-base-special-floor' );
var abs = require( '@stdlib/math-base-special-abs' );


// VARIABLES //

// Blocksize for pairwise summation (NOTE: decreasing the blocksize decreases rounding error as more pairs are summed, but also decreases performance. Because the inner loop is unrolled eight times, the blocksize is effectively `16`.):
var BLOCKSIZE = 128;


// MAIN //

/**
* Computes the sum of absolute values (L1 norm) of strided array elements using pairwise summation.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} sum
*
* @example
* var toAccessorArray = require( '@stdlib/array-base-to-accessor-array' );
* var arraylike2object = require( '@stdlib/array-base-arraylike2object' );
*
* var x = toAccessorArray( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var v = gasumpw( 4, arraylike2object( x ), 2, 1 );
* // returns 9.0
*/
function gasumpw( N, x, strideX, offsetX ) {
	var xbuf;
	var get;
	var ix;
	var s0;
	var s1;
	var s2;
	var s3;
	var s4;
	var s5;
	var s6;
	var s7;
	var M;
	var s;
	var n;
	var i;

	// Cache reference to array data:
	xbuf = x.data;

	// Cache a reference to the element accessor:
	get = x.accessors[ 0 ];

	ix = offsetX;
	if ( strideX === 0 ) {
		return N * ( abs( get( xbuf, ix ) ) );
	}
	if ( N < 8 ) {
		// Use simple summation...
		s = 0.0;
		for ( i = 0; i < N; i++ ) {
			s += abs( get( xbuf, ix ) );
			ix += strideX;
		}
		return s;
	}
	if ( N <= BLOCKSIZE ) {
		// Sum a block with 8 accumulators (by loop unrolling, we lower the effective blocksize to 16)...
		s0 = abs( get( xbuf, ix ) );
		s1 = abs( get( xbuf, ix+strideX ) );
		s2 = abs( get( xbuf, ix+(2*strideX) ) );
		s3 = abs( get( xbuf, ix+(3*strideX) ) );
		s4 = abs( get( xbuf, ix+(4*strideX) ) );
		s5 = abs( get( xbuf, ix+(5*strideX) ) );
		s6 = abs( get( xbuf, ix+(6*strideX) ) );
		s7 = abs( get( xbuf, ix+(7*strideX) ) );
		ix += 8 * strideX;

		M = N % 8;
		for ( i = 8; i < N-M; i += 8 ) {
			s0 += abs( get( xbuf, ix ) );
			s1 += abs( get( xbuf, ix+strideX ) );
			s2 += abs( get( xbuf, ix+(2*strideX) ) );
			s3 += abs( get( xbuf, ix+(3*strideX) ) );
			s4 += abs( get( xbuf, ix+(4*strideX) ) );
			s5 += abs( get( xbuf, ix+(5*strideX) ) );
			s6 += abs( get( xbuf, ix+(6*strideX) ) );
			s7 += abs( get( xbuf, ix+(7*strideX) ) );
			ix += 8 * strideX;
		}
		// Pairwise sum the accumulators:
		s = ( (s0+s1) + (s2+s3) ) + ( (s4+s5) + (s6+s7) );

		// Clean-up loop...
		for ( i; i < N; i++ ) {
			s += abs( get( xbuf, ix ) );
			ix += strideX;
		}
		return s;
	}
	// Recurse by dividing by two, but avoiding non-multiples of unroll factor...
	n = floor( N/2 );
	n -= n % 8;
	return gasumpw( n, x, strideX, ix ) + gasumpw( N-n, x, strideX, ix+(n*strideX) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = gasumpw;
