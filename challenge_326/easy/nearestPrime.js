/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		//test bases for Miller-Rabin Test
		let testBase = {2047 : [2], 1373653 : [2, 3], 9080191	: [31, 73], 25326001 : [2, 3, 5], 3215031751 : [2, 3, 5, 7], 4759123141 : [2, 7, 61]};
		/**
		 * retrieve test bases for a given number
		 * @param {int} [number] - designated number of test bases
		 * @param {Object} [bases] - test bases
		 *
		 * @return {Array} [desginated test base]
		 */
		function getTestBase(number, bases) {
			let limits = Object.keys(bases).map(num => Number(num));
			return bases[limits.find(limit => limit > number)].filter(num => number >= num);
		}
		/**
		 * check if a number is prime using Miller–Rabin primality test
		 * @param {int} [number] - number to be tested
		 * @param {Object} [bases] - test bases
		 *
		 * @return {boolean} [test result]
		 */
		function isPrime(number, bases = testBase) {
			console.log(number, bases);
			console.log(getTestBase(number, bases));
		}
		console.log(isPrime(13));
	});
})();