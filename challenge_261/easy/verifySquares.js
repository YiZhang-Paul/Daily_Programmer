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
		 * check if a diagonal adds up to a given number
		 * @param {Array} [square] - square to be examined
		 * @param {int} [target] - target sum
		 *
		 * @return {boolean} [test result]
		 */
		function isValidDiagonal(square, target = 15) {
			return square.reduce((acc, row, index) => acc + row[index], 0) == target;
		}
		/**
		 * check if major diagonals of a square adds up to a given number
		 * @param {Array} [square] - square to be examined
		 * @param {int} [target] - target sum
		 *
		 * @return {boolean} [test result]
		 */
		function hasValidDiagonals(square, target = 15) {
			return isValidDiagonal(square, target) && isValidDiagonal(square.slice().reverse(), target);
		}
		/**
		 * check if a square is a magic square
		 * @param {Array} [square] - square to be verified
		 * @param {int} [target] - target sum
		 *
		 * @return {boolean} [test result]
		 */
		function isMagicSquare(square, target) {
			let grid = Array.isArray(square[0]) ? square : makeGrid(square);
			return hasValidDiagonals(grid, target) &&
						 grid.every(row => isValidRow(row, target)) &&
			       grid.every((col, index) => isValidColumn(getColumn(grid, index), target)); 
		}
		/**
		 * calculate the possible value to fill up a column
		 * @param {Array} [square] - square to be checked
		 * @param {int} [index] - column index
		 * @param {int} [target] - target sum
		 *
		 * @return {int} [valid number to be filled]
		 */
		function getNumToFill(square, index, target = 15) {
			return target - getColumn(square, index).reduce((acc, val) => acc + val);
		}
		/**
		 * check if an incomplete square can be filled up
		 * @param {Array} [square] - square to be checked
		 * @param {int} [target] - target sun
		 *
		 * @return {boolean} [description]
		 */
		function canFillSquare(square, target = 15) {
			let rowLen = Math.ceil(Math.sqrt(square.length));
			let grid = makeGrid([...square, ...new Array(rowLen).fill(0)]);
			for(let i = 0; i < rowLen; i++) {
				grid[grid.length - 1][i] = getNumToFill(grid, i, target);
			}
			return isMagicSquare(grid, target);
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = [8, 1, 6, 3, 5, 7, 4, 9, 2];
		console.log(`%c[${input.join(", ")}] => %c${isMagicSquare(input)}`, "color : skyblue;", "color : orange;");
		input = [2, 7, 6, 9, 5, 1, 4, 3, 8];
		console.log(`%c[${input.join(", ")}] => %c${isMagicSquare(input)}`, "color : skyblue;", "color : orange;");
		input = [3, 5, 7, 8, 1, 6, 4, 9, 2];
		console.log(`%c[${input.join(", ")}] => %c${isMagicSquare(input)}`, "color : skyblue;", "color : orange;");
		input = [8, 1, 6, 7, 5, 3, 4, 9, 2];
		console.log(`%c[${input.join(", ")}] => %c${isMagicSquare(input)}`, "color : skyblue;", "color : orange;");
		//bonus 1 input
		console.log(`%cBonus 1 Input: `, "color : red;");
    input = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
		console.log(`%c[${input.join(", ")}] => %c${isMagicSquare(input, 25)}`, "color : skyblue;", "color : orange;");
    input = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
		console.log(`%c[${input.join(", ")}] => %c${isMagicSquare(input)}`, "color : skyblue;", "color : orange;");
    //bonus 2 input
		console.log(`%cBonus 2 Input: `, "color : red;");
    input = [8, 1, 6, 3, 5, 7];
		console.log(`%c[${input.join(", ")}] => %c${canFillSquare(input)}`, "color : skyblue;", "color : orange;");
    input = [3, 5, 7, 8, 1, 6];
		console.log(`%c[${input.join(", ")}] => %c${canFillSquare(input)}`, "color : skyblue;", "color : orange;");
		input = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
		console.log(`%c[${input.join(", ")}] => %c${canFillSquare(input, 25)}`, "color : skyblue;", "color : orange;");
    input = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
		console.log(`%c[${input.join(", ")}] => %c${canFillSquare(input)}`, "color : skyblue;", "color : orange;");
	});
})();		