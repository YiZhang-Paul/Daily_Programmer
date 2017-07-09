/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * generate all possible values that 
		 * have factors of a given string length
		 * @param int
		 *
		 * length : string length of given number
		 *
		 * returns array []
		 */
		function allNumber(length) {
			let lowest = length == 1 ? 0 : Math.pow(10, length - 1);
			let highest = Number("9".repeat(length));
			let allNums = [];
			for(let i = Math.pow(lowest, 2), j = Math.pow(highest, 2); i <= j; i++) {
				allNums.push(i);
			}
			return allNums;
		} 
	});
})();		