/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * check if a square has valid numbers
		 * @param {int} [width] - square width
		 * @param {Array} [numbers] - numbers in square
		 *
		 * @return {boolean} [test result]
		 */
		function hasValidNum(width, numbers) {
			return numbers.every(num => num >= 1 && num <= width);
		}
		/**
		 * check if a square has valid rows 
		 * @param {int} [rowLen] - row length
		 * @param {Array} [numbers] - numbers in square
		 *
		 * @return {boolean} [test result]
		 */
		function hasValidRow(rowLen, numbers) {
			for(let i = 0; i < numbers.length; i += rowLen) {
				if(new Set(numbers.slice(i, i + rowLen)).size != rowLen) {
					return false;					
				}
			}
			return true;
		}
		/**
		 * check if a square has valid columns 
		 * @param {int} [colLen] - column length
		 * @param {Array} [numbers] - numbers in square
		 *
		 * @return {boolean} [test result]
		 */
		function hasValidCol(colLen, numbers) {
			for(let i = 0; i < colLen; i++) {
				let curCol = new Set();
				for(let j = 0; j < colLen; j++) {
					curCol.add(numbers[i + j * colLen]);
				}
				if(curCol.size != colLen) {
					return false;
				}
			}
			return true;
		}
		/**
		 * test if an array is a latin square
		 * @param {int} [width] - square width
		 * @param {Array} [numbers] - numbers in square
		 *
		 * @return {boolean} [test result]
		 */
		function isLatinSquare(width, numbers) {
			return hasValidNum(width, numbers) ? 
				hasValidRow(width, numbers) && hasValidCol(width, numbers) : false;
		}
		/**
		 * make empty square 
		 * @param {int} [width] - square width
		 *
		 * @return {Array} [empty square]
		 */
		function makeSquare(width) {
			let square = [];
			for(let i = 0; i < width; i++) {
				square.push(new Array(width).fill(null));
			}
			return square;
		}
		/**
		 * transform latin square into reduced form
		 * @param {int} [width] - square width
		 * @param {Array} [numbers] - numbers in square
		 *
		 * @return {String} [reduced latin square]
		 */
		function reduceSquare(width, numbers) {
			if(!isLatinSquare(width, numbers)) {
				return "The Square is not a Latin Square.";
			}
			let square = makeSquare(width);
			for(let i = 0; i < width; i++) {
				for(let j = 0; j < width; j++) {
					square[j][i] = numbers[i + j * width]; 
				}
			}
			return square.sort((row1, row2) => row1[0] - row2[0]).map(row => row.join(" ")).join("\n");
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = [1, 2, 3, 4, 5, 
		             5, 1, 2, 3, 4, 
		             4, 5, 1, 2, 3, 
		             3, 4, 5, 1, 2, 
		             2, 3, 4, 5, 1];
		console.log(isLatinSquare(5, input));
		input = [1, 3, 
		         3, 4];
		console.log(isLatinSquare(2, input));
		input = [1, 2, 3, 4, 
		         1, 3, 2, 4, 
		         2, 3, 4, 1, 
		         4, 3, 2, 1];
		console.log(isLatinSquare(4, input));
		//bonus input
		console.log(`%cBonus Input: `, "color : red;");
		input = [1, 2, 3, 4, 5, 
		         5, 1, 2, 3, 4, 
		         4, 5, 1, 2, 3, 
		         3, 4, 5, 1, 2, 
		         2, 3, 4, 5, 1];
		console.log(`%c${reduceSquare(5, input)}`, "color : orange;");
		input = [1, 3, 
		         3, 4];
		console.log(`%c${reduceSquare(2, input)}`, "color : orange;");         
		input = [1, 2, 3, 4, 
		         1, 3, 2, 4, 
		         2, 3, 4, 1, 
		         4, 3, 2, 1];
		console.log(`%c${reduceSquare(4, input)}`, "color : orange;");
	});
})();		