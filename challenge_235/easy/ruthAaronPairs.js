/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * get test base for Miller-Rabin primality test
		 * @param {int} [number] - number to be tested
		 *
		 * @return {Array} [test bases]
		 */
		function getTestBase(number) {
			const bases = {2047 : [2], 1373653 : [2, 3], 9080191 : [31, 73], 25326001 : [2, 3, 5]};
			return bases[Object.keys(bases).map(Number).sort((a, b) => a - b).find(base => number <= base)];
		}
		/**
		 * get Miller-Rabin primality test coefficients
		 * @param {int} [number] - number to be tested
		 *
		 * @return {Array} [Miller-Rabin primality test coefficients]
		 */
		function getCoefficient(number) {
			let curNum = number - 1, factor = 0;
			while(curNum % 2 === 0) {
				curNum /= 2;
				factor++;
			}
			return [factor, curNum];
		}
		/**
		 * Miller-Rabin primality test
		 * @param {int} [number] - number to be tested
		 *
		 * @return {boolean} [test result]
		 */
		function isPrime(number) {
			if(number == 1 || number == 2) {
				return number == 2; 
			}
			const [s, d, testBase] = [...getCoefficient(number), getTestBase(number)];
			for(let i = 0; i < testBase.length; i++) {
				for(let j = 0; j <= s; j++) {
					const mod = Math.pow(testBase[i], Math.pow(2, j) * d) % number;
					if(mod == number - 1 || (mod == 1 && j === 0)) {
						return true;
					}
				}
			}
			return false;
		}
		/**
		 * get all prime factors of a number
		 * @param {int} [number] - number to be tested
		 *
		 * @return {Array} [all prime factors]
		 */
		function getPrimeFactor(number) {
			return new Array(number - 1).fill(0)
			 														.map((num, index) => index + 2)
			 														.filter(num => number % num === 0 && isPrime(num));
		}
		/**
		 * get sum of all prime factors of a number
		 * @param {int} [number] - number to be tested
		 *
		 * @return {int} [sum of all prime factors]
		 */
		function getPrimeSum(number) {
			return getPrimeFactor(number).reduce((acc, val) => acc + val, 0);
		}
		/**
		 * check if a number pair is Ruth-Aaron pair
		 * @param {Array} [pair] - pair to be tested
		 *
		 * @return {boolean} [test result]
		 */
		function isRuthAaronPair(pair) {
			return getPrimeSum(pair[0]) == getPrimeSum(pair[1]);
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = `(714,715)
								 (77,78)
								 (20,21)`;
		input.split("\n").forEach(pair => {
			console.log(`%c${pair.trim()} -> %c${isRuthAaronPair(pair.match(/\d+/g).map(Number)) ? "VALID" : "NOT VALID"}`, "color : skyblue;", "color : orange;");
		});								 
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");			
		input = `(5,6) 
					   (2107,2108) 
					   (492,493) 
					   (128,129)`;					 
		input.split("\n").forEach(pair => {
			console.log(`%c${pair.trim()} -> %c${isRuthAaronPair(pair.match(/\d+/g).map(Number)) ? "VALID" : "NOT VALID"}`, "color : skyblue;", "color : orange;");
		});	
	});
})();