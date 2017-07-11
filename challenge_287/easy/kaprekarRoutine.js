/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * find largest digit in a number
		 * @param int
		 * 
		 * number : number to be examined
		 *
		 * returns int
		 */
		function largestDigit(number) {
			return Math.max(...number.toString().split("").map(digit => Number(digit)));
		} 
		//default input
		console.log(`largestDigit(1234) -> ${largestDigit(1234)}`);
		console.log(`largestDigit(3253) -> ${largestDigit(3253)}`);
		console.log(`largestDigit(9800) -> ${largestDigit(9800)}`);
		console.log(`largestDigit(3333) -> ${largestDigit(3333)}`);
		console.log(`largestDigit(120) -> ${largestDigit(120)}`);
	});
})();			