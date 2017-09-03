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
		 * get row length in a 2D array
		 * @param {Array} [row] - row to be examined
		 *
		 * @return {int} [row length]
		 */
		function getRowLen(row) {
			return row.join(" ").length;
		}
		/**
		 * display nonogram description in grid view
		 * @param {Array} [rowDesc] - row descriptions
		 * @param {Array} [colDesc] - col descriptions
		 *
		 * @return {String} [nonogram description]
		 */
		function displayDesc(rowDesc, colDesc) {
			let maxRowLen = rowDesc.reduce((acc, row) => Math.max(acc, getRowLen(row)), 0);
			let description = rowDesc.reduce((acc, row) => acc + " ".repeat(maxRowLen - getRowLen(row)) + row.join(" ") + "\n", "");
			let columns = [], maxColLen = colDesc.reduce((acc, col) => Math.max(acc, col.length), 0);
			for(let i = 0; i < maxColLen; i++) {
				columns.push(new Array(colDesc.length).fill(" "));
			}	
			colDesc.forEach((col, index) => {
				for(let i = col.length - 1; i >= 0; i--) {
					columns[maxColLen - (col.length - i)][index] = col[i];
				}
			});
			return columns.map(line => " ".repeat(maxRowLen + 1) + line.join(" ")).join("\n") + "\n" + description;
		}
		/**
		 * describe nonogram
		 * @param {String} [nonogram] - nonogram to be described 
		 *
		 * @return {Array} [nonogram description]
		 */
		function describeNonogram(nonogram) {
			let grid = nonogram.split("\n").slice(1);
			return displayDesc(getRowDesc(grid), getColDesc(grid));
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
 		console.log(`%c${input.split("\n").slice(1).join("\n")}`, "color : skyblue;");
		console.log(describeNonogram(input));
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
    console.log(`%c${input.split("\n").slice(1).join("\n")}`, "color : skyblue;");
		console.log(describeNonogram(input));                          
	});
})();		