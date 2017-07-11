/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {	
		/**
		 * check if a number is Kaprekar number
		 * @param int, int
		 *
		 * number : number to be examined
		 * base   : number base
		 *
		 * returns boolean
		 */
		function isKaprekar(number, base) {
			let base10Number = parseInt(number, base);
			if(isNaN(base10Number)) {
				return false;
			}
			let base10Square = Math.pow(base10Number, 2);
			let baseSquare = base10Square.toString(base);
			for(let i = 0; i < baseSquare.length; i++) {
				let num1 = parseInt(baseSquare.slice(0, i), base) || 0;
				let num2 = parseInt(baseSquare.slice(i), base);
				if(num2 && num1 + num2 == base10Number) {
					return true;
				}
			}
			return false;
		} 
		/**
		 * find Kaprekar numbers in a given range
		 * @param int, int, int
		 *
		 * start : starting number 
		 * end   : ending number
		 * base  : number base
		 *
		 * returns array []
		 */
		function findKaprekar(start, end, base = 10) {
			let kaprekars = [];
			for(let i = start; i <= end; i++) {
				if(isKaprekar(i, base)) {
					kaprekars.push(i);
				}
			}
			return kaprekars;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;"); 
		console.log(`1 ~ 50 => ${findKaprekar(1, 50).join(" ")}`);
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;"); 
		console.log(`2 ~ 100 => ${findKaprekar(2, 100).join(" ")}`);
		console.log(`101 ~ 9000 => ${findKaprekar(101, 9000).join(" ")}`);
	});
})();				