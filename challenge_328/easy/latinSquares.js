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
		 * @param {String} [arrInfo] [square width and actual array]
		 *
		 * @return {boolean} [test result]
		 */
		function isLatinSquare(arrInfo) {
			let allNums = arrInfo.split("\n").map(line => line.trim()).join(" ")
													 .split(" ").map(num => Number(num));
			let [width, numbers] = [allNums[0], allNums.slice(1)];
			return hasValidNum(width, numbers) ? hasValidRow(width, numbers) && hasValidCol(width, numbers) : false;
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = `5
								 1 2 3 4 5 5 1 2 3 4 4 5 1 2 3 3 4 5 1 2 2 3 4 5 1`;
		console.log(isLatinSquare(input));
		input = `4
             1 2 3 4 1 3 2 4 2 3 4 1 4 3 2 1`;
		console.log(isLatinSquare(input));
		//bonus input
		console.log(`%cBonus Input: `, "color : red;");
	});
})();		