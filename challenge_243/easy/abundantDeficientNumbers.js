/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * find divisors for a number
		 * @param {int} [number] - number to be tested
		 *
		 * @return {Array} [divisors for the number] 
		 */
		function getDivisors(number) {
			const divisors = [1, number];
			for(let i = 2; i < divisors[divisors.length - 1]; i++) {
				if(number % i === 0) {
					divisors.push(...Array.from(new Set([i, number / i])));
				}
			}
			return divisors;
		}
		/**
		 * find type of number
		 * @param {int} [number] - number to be tested
		 *
		 * @return {String} [test result]
		 */
		function getNumberType(number) {
			const double = number * 2;
			const sum = getDivisors(number).reduce((acc, val) => acc + val);
			return sum == double ? 
				`${number} Perfect.` : `${number} ${sum < double ? "Deficient" : "Abundant"} by ${Math.abs(double - sum)}.`;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = 18;
		console.log(getNumberType(input));
		input = 21;
		console.log(getNumberType(input));
		input = 9;
		console.log(getNumberType(input));
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = 6;
		console.log(getNumberType(input));
		input = 111;  
		console.log(getNumberType(input));
		input = 112; 
		console.log(getNumberType(input));
		input = 220; 
		console.log(getNumberType(input));
		input = 69; 
		console.log(getNumberType(input));
		input = 134; 
		console.log(getNumberType(input));
		input = 85; 		
		console.log(getNumberType(input));
	});
})();		