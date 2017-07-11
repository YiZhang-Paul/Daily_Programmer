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
		/**
		 * sort digits in a number in descending order
		 * @param int
		 *
		 * number : number to be sorted
		 *
		 * returns int
		 */
		function descDigit(number) {
			let desc = number.toString().split("").sort((a, b) => Number(b) - Number(a));
			return desc.join("") + "0".repeat(4 - desc.length); 
		} 
		//default input
		console.log(`largestDigit(1234) -> ${largestDigit(1234)}`);
		console.log(`largestDigit(3253) -> ${largestDigit(3253)}`);
		console.log(`largestDigit(9800) -> ${largestDigit(9800)}`);
		console.log(`largestDigit(3333) -> ${largestDigit(3333)}`);
		console.log(`largestDigit(120) -> ${largestDigit(120)}`);
		//bonus 1 input
		console.log(`descDigit(1234) -> ${descDigit(1234)}`);
		console.log(`descDigit(3253) -> ${descDigit(3253)}`);
		console.log(`descDigit(9800) -> ${descDigit(9800)}`);
		console.log(`descDigit(3333) -> ${descDigit(3333)}`);
		console.log(`descDigit(120) -> ${descDigit(120)}`);
	});
})();			