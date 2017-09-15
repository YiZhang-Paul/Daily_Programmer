/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * raise all digits of a number to given power and get sum
		 * @param {int} [number] - number to be manipulated
		 * @param {int} [power] - target power
		 *
		 * @return {int} [result number]
		 */
		function getPowerSum(number, power = 2) {
			return String(number).split("")
													 .map(digit => Math.pow(Number(digit), power))
													 .reduce((acc, val) => acc + val);
		}
		console.log(getPowerSum(12));
	});
})();		