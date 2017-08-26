/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * construct grid
		 * @param {Array} [square] - all elements in square
		 *
		 * @return {Array} [constructed grid]
		 */
		function makeGrid(square) {
			let width = Math.sqrt(square.length);
			return square.reduce((acc, val, index) => 
				index % width ? [...acc.slice(0, -1), [...acc[acc.length - 1], val]] : [...acc, [val]], []);
		}
		/**
		 * check if a row of the square adds up to a given number
		 * @param {Array} [row] - row to be examined
		 * @param {int} [target] - target sum
		 *
		 * @return {boolean} [test result] 
		 */
		function isValidRow(row, target = 15) {
			return row.reduce((acc, val) => acc + val) == target;
		}
		/**
		 * retrieve a column from a grid
		 * @param {Array} [grid] - grid to be examined
		 * @param {int} [index] - column index
		 *
		 * @return {Array} [column on given index]
		 */
		function getColumn(grid, index) {
			return grid.map(row => row[index]);
		}
		/**
		 * check if a column of the square adds up to a given number
		 * @param {Array} [col] - column to be examined
		 * @param {int} [target] - target sum
		 *
		 * @return {boolean} [test result]
		 */
		function isValidColumn(col, target = 15) {
			return col.reduce((acc, val) => acc + val) == target;
		}
		/**
		 * check if a square is a magic square
		 * @param {Array} [square] - square to be verified
		 *
		 * @return {boolean} [test result]
		 */
		function isMagicSquare(square) {
			let grid = makeGrid(square);
			return grid.every(row => isValidRow(row)) &&
			       grid.every((col, index) => isValidColumn(getColumn(grid, index))); 
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = [8, 1, 6, 3, 5, 7, 4, 9, 2];
		console.log(`%c[${input.join(", ")}] -> %c${isMagicSquare(input)}`, "color : skyblue;", "color : orange;");
		input = [2, 7, 6, 9, 5, 1, 4, 3, 8];
		console.log(`%c[${input.join(", ")}] -> %c${isMagicSquare(input)}`, "color : skyblue;", "color : orange;");
		input = [3, 5, 7, 8, 1, 6, 4, 9, 2];
		console.log(`%c[${input.join(", ")}] -> %c${isMagicSquare(input)}`, "color : skyblue;", "color : orange;");
		input = [8, 1, 6, 7, 5, 3, 4, 9, 2];
		console.log(`%c[${input.join(", ")}] -> %c${isMagicSquare(input)}`, "color : skyblue;", "color : orange;");
	});
})();		