/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * check if a number is a torn number
		 * @param {int} [number] - number to check
		 *
		 * @return {boolean} [test result]
		 */
		function isTornNumber(number) {
			const numStr = String(number);
			if(numStr.length % 2 || new Set(numStr).size != numStr.length) {
				return false;
			}
			const [half1, half2] = [numStr.slice(0, numStr.length * 0.5), numStr.slice(numStr.length * 0.5)];
			return Math.pow(Number(half1) + Number(half2), 2)  == number;
		}
		/**
		 * find torn numbers from all numbers of a given length
		 * @param {int} [digits] - total number of digits in number
		 *
		 * @return {Array} [all torn numbers]
		 */
		function findTornNumber(digits) {
			const [start, end] = [Math.pow(10, digits - 1), Math.pow(10, digits) - 1];
			let tornNumber = [];
			for(let i = start; i <= end; i++) {
				if(isTornNumber(i)){
					tornNumber.push(i);
				}
			}
			return tornNumber;
		}
		//challenge & bonus input
		console.log(`%cChallenge & Bonus Input: `, "color : red;");
		console.log(`%cTorn Numbers: %c${findTornNumber(4).join(", ")}`, "color : skyblue;", "color : orange;");
	});
})();		