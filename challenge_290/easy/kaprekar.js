/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {	
		/**
		 * check if a number is Kaprekar number
		 * @param int
		 *
		 * number : number to be examined
		 *
		 * returns boolean
		 */
		function isKaprekar(number) {
			let square = Math.pow(number, 2).toString();
			for(let i = 1; i < square.length; i++) {
				let [num1, num2] = [Number(square.slice(0, i)), Number(square.slice(i))];
				if((num1 && num2) && num1 + num2 == number) {
					return true;
				}
			}
			return false;
		} 
		/**
		 * find Kaprekar numbers in a given range
		 * @param int, int
		 *
		 * start : starting number 
		 * end   : ending number
		 *
		 * returns array []
		 */
		function findKaprekar(start, end) {
			let kaprekars = [];
			for(let i = start; i <= end; i++) {
				if(isKaprekar(i)) {
					kaprekars.push(i);
				}
			}
			return kaprekars;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;"); 
		console.log(`1 ~ 50 => ${findKaprekar(1, 50)}`);
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;"); 
		console.log(`2 ~ 100 => ${findKaprekar(2, 100)}`);
		console.log(`101 ~ 9000 => ${findKaprekar(101, 9000)}`);
	});
})();				