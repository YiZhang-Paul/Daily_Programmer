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
			return Math.pow(Number(half1) + Number(half2), 2) == number;
		}
		console.log(isTornNumber(3025));
	});
})();		