/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * retrieve test base for Miller-Rabin primality test
		 */
		function getTestBase(number) {

			const bases = Object.freeze({

				2047 : [2],
				1373653 : [2, 3],
				9080191	: [31, 73],
				25326001 : [2, 3, 5],
				3215031751 : [2, 3, 5, 7],
				4759123141 : [2, 7, 61]
			});
			//sort all limits in ascending order
			let limits = Object.keys(bases).map(Number).sort((a, b) => a - b);	

			return bases[limits.find(limit => number < limit)];
		}
		/**
		 * calculate coefficient for Miller-Rabin primality test
		 * @param {int} [number] - number for primality test
		 */
		function getCoefficients(number) {

			let s = 0, b = number - 1;

			while(b % 2 === 0) {

				[s, b] = [s + 1, b * 0.5];
			}

			return [s, b];
		}
		/**
		 * check if a test base proves a number's primality
		 * @param {int} [s] - Miller-Rabin primality test coefficient
		 * @param {int} [b] - Miller-Rabin primality test coefficient
		 */
		function isValidBase(number, base, s, b) {

			for(let i = 0; i < s; i++) {

				let remainder = Math.pow(base, Math.pow(2, i) * b) % number;
			
				if(remainder === number - 1 || (i === 0 && remainder === 1)) {

					return true;
				}
			}

			return false;
		}
		/**
		 * Miller-Rabin primality test
		 */
		function isPrime(number) {

			if(number <= 2) {

				return number === 2;
			}

			let [s, b] = getCoefficients(number);

			return getTestBase(number).some(base => isValidBase(number, base, s, b));
		}
		/**
		 * find adjacent prime
		 * @param {boolean} [findLow] - find smaller prime when true, larger prime otherwise
		 */
		function adjacentPrime(number, findLow) {

			let prime = number;

			while(!isPrime(prime)) {

				prime += findLow ? -1 : 1;
			}

			return prime;
		}
		/**
		 * find nearest primes
		 */
		function nearestPrime(number) {

			if(isPrime(number)) {

				return `${number} is Prime.`;
			}

			return `${adjacentPrime(number, true)} < ${number} < ${adjacentPrime(number)}`;
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
		//time = new Date().getTime();
		//console.log(`${nearestPrime(2010741)} %c(${new Date().getTime() - time}ms)`, "color : orange;");
	});
})();