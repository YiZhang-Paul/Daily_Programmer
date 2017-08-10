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
		 * check if a number is a Miller-Rabin witness
		 * @param {int} [base] - test base
		 * @param {int} [number] - number to be checked
		 * @param {int} [b] - Miller-Rabin variable
		 * @param {int} [k] - Miller-Rabin variable
		 *
		 * @return {boolean} [test result]
		 */
		function isWitness(base, number, b, k) {
			if(Math.pow(base, k) % number == 1) {
				return false;
			}
			return new Array(b).fill(0).map((num, index) => index)
			                           .every(num => Math.pow(base, Math.pow(2, num) * k) % number - number != -1);
		}
		/**
		 * check if a number is prime using Miller–Rabin primality test
		 * @param {int} [number] - number to be tested
		 * @param {Object} [bases] - test bases
		 *
		 * @return {boolean} [test result]
		 */
		function isPrime(number, bases = testBase) {
			if(number == 2) {
				return true;
			}
			let b = 0, k = number - 1;
			while(k % 2 === 0) {
				[b, k] = [b + 1, k * 0.5];
			}
			return getTestBase(number, testBase).some(base => !isWitness(base, number, b, k));
		}
		for(let i = 2; i <= 100; i++) {
			if(isPrime(i)) {
				console.log(i);
			}
		}
	});
})();