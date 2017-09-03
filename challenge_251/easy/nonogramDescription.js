/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * get row descriptions 
		 * @param {Array} [grid] - rows to be described
		 *
		 * @return {Array} [row descriptions]
		 */
		function getRowDesc(grid) {
			return grid.map(row => row.match(/\*+/g).map(match => match.length));
		}
		/**
		 * get a column from grid
		 * @param {Array} [grid] - grid to be examined
		 * @param {int} [index] - column index
		 *
		 * @return {String} [column from the grid]
		 */
		function getColumn(grid, index) {
			return grid.map(row => row[index]).join("");
		}
		/**
		 * get column descriptions
		 * @param {Array} [grid] - column to be described 
		 *
		 * @return {Array} [column descriptions]
		 */
		function getColDesc(grid) {
			return getRowDesc(grid[0].split("").map((col, index) => getColumn(grid, index)));
		}
		/**
		 * describe nonogram
		 * @param {String} [nonogram] - nonogram to be described 
		 *
		 * @return {Array} [nonogram description]
		 */
		function describeNonogram(nonogram) {
			let grid = nonogram.split("\n").slice(1);
			let rowDesc = getRowDesc(grid);
			console.log(rowDesc);
			let colDesc = getColDesc(grid); 
			console.log(colDesc);
		}
		//challenge & bonus input
		console.log(`%cChallenge & Bonus Input: `);
		let input = `
    *
   **
  * *
 *  *
*****`;
		console.log(`%c${input.split("\n").slice(1).join("\n")}`, "color : skyblue;");
		console.log(describeNonogram(input));
		input = `
    ** *  
   *****  
  ******  
 ******** 
**********
 *      * 
 * ** * * 
 * ** * * 
 * **   * 
 ********`; 
		input = `
     ***       
  **** **      
 ****** ****** 
 * **** **    *
 ****** ***  **
 ****** *******
****** ********
 *   **********
 *   **********
 *   **********
 * * ****  ****
 *** ****  ****
     ****  ****
     ****  ****
     ****  ****`;                              
	});
})();		