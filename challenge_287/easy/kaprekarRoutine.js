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
			return Number(desc.join("") + "0".repeat(4 - desc.length)); 
		} 
		/**
		 * sort digits in a number in ascending order
		 * @param int
		 *
		 * number : number to be sorted
		 *
		 * returns int
		 */
		function ascDigit(number) {
			return Number(number.toString().split("").sort((a, b) => Number(a) - Number(b)).join(""));
		}
		/**
		 * check if two numbers have same set of digits
		 * @param int, int
		 *
		 * num1 : number 1
		 * num2 : number 2
		 *
		 * returns boolean 
		 */
		function sameDigit(num1, num2) {
			return ascDigit(num1) == ascDigit(num2);
		} 
		/**
		 * check total number of iteration 
		 * of Kaprekar's routine for a number
		 * @param int
		 *
		 * number : number to be examined
		 *
		 * returns int
		 */
		function kaprekar(number) {
			if(sameDigit(number, 6174)) {
				return 0;
			}
			let [asc, desc, iterations] = [ascDigit(number), descDigit(number), 0];
			while((desc - asc) != 6174) {
				number = desc - asc;
				[asc, desc, iterations] = [ascDigit(number), descDigit(number), iterations + 1];
			}
			return iterations + 1;
		} 
		/**
		 * find largest number of iterations 
		 * for all 4-digit numbers
		 *
		 * returns int
		 */
		function largestIteration() {
			let largest = 0;
			for(let i = 0; i <= 9999; i++) {
				if(descDigit(i) % 1111 === 0) {
					continue;
				}
				let routines = kaprekar(i);
				largest = routines > largest ? routines : largest;
			}
			return largest;
		} 
		//default input
		console.log("%cDefault Input: ", "color : red;");
		console.log(`largestDigit(1234) -> ${largestDigit(1234)}`);
		console.log(`largestDigit(3253) -> ${largestDigit(3253)}`);
		console.log(`largestDigit(9800) -> ${largestDigit(9800)}`);
		console.log(`largestDigit(3333) -> ${largestDigit(3333)}`);
		console.log(`largestDigit(120) -> ${largestDigit(120)}`);
		//bonus 1 input
		console.log("%cBonus 1 Input: ", "color : red;");
		console.log(`descDigit(1234) -> ${descDigit(1234)}`);
		console.log(`descDigit(3253) -> ${descDigit(3253)}`);
		console.log(`descDigit(9800) -> ${descDigit(9800)}`);
		console.log(`descDigit(3333) -> ${descDigit(3333)}`);
		console.log(`descDigit(120) -> ${descDigit(120)}`);
		//bonus 2 input
		console.log("%cBonus 2 Input: ", "color : red;");
		console.log(`kaprekar(6589) -> ${kaprekar(6589)}`);
		console.log(`kaprekar(5455) -> ${kaprekar(5455)}`);
		console.log(`kaprekar(6174) -> ${kaprekar(6174)}`);
		//bonus 3 input
		console.log("%cBonus 3 Output: ", "color : red;");
		console.log(`Largest Number of Iterations: ${largestIteration()}`);
	});
})();			