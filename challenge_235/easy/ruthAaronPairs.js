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
		console.log(new Array(100).fill(0).map((num, index) => index + 1).filter(num => isPrime(num)));
	});
})();