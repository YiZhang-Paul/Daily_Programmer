/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * make two dimensional array to hold all numbers
		 * @param int
		 *
		 * num : total number of digits on each row and column
		 *
		 * returns array []  
		 */
		function makeSquare(num) {
			return new Array(num).fill(new Array(num).fill(0));
		}
		//let input = prompt("Please Enter a Number: ");
		let input = 5;
		let square = makeSquare(input);
		console.log(square);
	});
})();				