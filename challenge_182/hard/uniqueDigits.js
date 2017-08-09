/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * calculate factorial
		 * @param {int} [base] - base number for factorial
		 *
		 * @return {int} [factorial]
		 */
		function factorial(base) {
			return base == 1 ? base : base * factorial(base - 1);
		}
		/**
		 * find all unique numbers
		 * @param {int} [base] - number base
		 * @param {Array} [specials] - special numbers
		 *
		 * @return {int} [total unique numbers]
		 */
		function findUnique(base, specials) {
			let uniques = 0, hasZero = new Set(specials).has(0);
			for(let i = specials.length; i <= 7; i++) {
				let orders = factorial(i) / factorial(Math.max(i - specials.length, 1)); 
				let [restDigit, restLen] = [base - specials.length, i - specials.length];
				uniques += hasZero ? 
					orders / i * (i - 1) * Math.pow(restDigit, restLen) :
					orders / i * specials.length * Math.pow(restDigit, restLen) + orders / i * restLen * ((restDigit - 1) * Math.pow(restDigit, restLen - 1));
			}
			return uniques;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let time = new Date().getTime();
		let input = [2, [1]];
		console.log(`Base ${input[0]}, Special Numbers {${input[1].join(", ")}} -> %c${findUnique(...input)} (${new Date().getTime() - time}ms)`, "color : orange;");
		time = new Date().getTime();
		input = [8, [3, 5, 6]];
		console.log(`Base ${input[0]}, Special Numbers {${input[1].join(", ")}} -> %c${findUnique(...input)} (${new Date().getTime() - time}ms)`, "color : orange;");
		time = new Date().getTime();
		input = [10, [1, 3, 9]];
		console.log(`Base ${input[0]}, Special Numbers {${input[1].join(", ")}} -> %c${findUnique(...input)} (${new Date().getTime() - time}ms)`, "color : orange;");
		time = new Date().getTime();
		input = [16, ["A", "E", 1, 0]];
		console.log(`Base ${input[0]}, Special Numbers {${input[1].join(", ")}} -> %c${findUnique(...input)} (${new Date().getTime() - time}ms)`, "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		for(let i = 2; i <= 16; i++) {
			let time = new Date().getTime();
			let input = [i, [0, 1]];
			console.log(`Base ${input[0]}, Special Numbers {${input[1].join(", ")}} -> %c${findUnique(...input)} (${new Date().getTime() - time}ms)`, "color : orange;");
		}
	});
})();			