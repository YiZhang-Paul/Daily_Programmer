/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * get sum of all digits for a number
		 * @param {String} [number] - number string
		 *
		 * @return {String} [string of digits sum]
		 */
		function getSum(number) {

			return number.split("")
							     .reduce((acc, val) => acc + Number(val), 0)
							     .toString();
		}
		/**
		 * sum digits of a number until there is only one digit left
		 * @param {String} [number] - number string
		 *
		 * @return {Array} [all sums]
		 */
		function sumDigits(number) {

			let sums = [number];

			while(sums[sums.length - 1].length != 1) {
				sums.push(getSum(sums[sums.length - 1]));
			}

			return sums;
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = "12345";
		console.log(`%c${sumDigits(input).join("\n")}`, "color : orange;");
	});
})();