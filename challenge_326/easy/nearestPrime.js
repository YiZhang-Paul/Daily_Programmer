/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		//test bases for Miller-Rabin test
		const testBase = {2047 : [2], 1373653 : [2, 3], 9080191	: [31, 73], 25326001 : [2, 3, 5], 3215031751 : [2, 3, 5, 7], 4759123141 : [2, 7, 61]};
		/**
		 * retrieve test bases for a given number
		 * @param {int} [number] - designated number of test bases
		 * @param {Object} [bases] - all test bases
		 *
		 * @return {Array} [designated test base]
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
			return new Array(b).fill(0)
			                   .map((num, index) => index)
			                   .every(num => Math.pow(base, Math.pow(2, num) * k) % number - number != -1);
		}
		/**
		 * check if a number is prime using Miller-Rabin primality test
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
			return getTestBase(number, bases).some(base => !isWitness(base, number, b, k));
		}
		/**
		 * find nearest primes
		 * @param {int} [number] - number to be checked
		 *
		 * @return {String} [test result]
		 */
		function nearestPrime(number) {
			if(isPrime(number)) {
				return `${number} is Prime.`;
			}
			let low = number, high = number;
			while(!isPrime(low)) {
				low--;
			}
			while(!isPrime(high)) {	
				high++;
			}
			return `${low} < ${number} < ${high}`;
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let time = new Date().getTime();
		console.log(`${nearestPrime(270)} %c(${new Date().getTime() - time}ms)`, "color : orange;");  
		time = new Date().getTime();
		console.log(`${nearestPrime(541)} %c(${new Date().getTime() - time}ms)`, "color : orange;");  
		time = new Date().getTime();
		console.log(`${nearestPrime(993)} %c(${new Date().getTime() - time}ms)`, "color : orange;");  
		time = new Date().getTime();
		console.log(`${nearestPrime(649)} %c(${new Date().getTime() - time}ms)`, "color : orange;");
		//bonus input
		console.log(`%cBonus Input: `, "color : red;");
		time = new Date().getTime();
		console.log(`${nearestPrime(2010741)} %c(${new Date().getTime() - time}ms)`, "color : orange;");
		time = new Date().getTime();
		console.log(`${nearestPrime(1425172824437700148)} %c(${new Date().getTime() - time}ms)`, "color : orange;");
	});
})();