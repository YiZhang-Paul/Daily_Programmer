/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * create grids
		 * @param {int} [dimension] - grids dimension
		 * @param {String} [layout] - current grid layout
		 *
		 * @return {Array} [current grids]
		 */
		function makeGrids(dimension, layout) {
			return layout.split("\n").map(row => 
				row ? row.split("") : new Array(dimension).fill(" "));
		}
		/**
		 * check if target row can be landed on
		 * @param {char} [target] - target row
		 *
		 * @return {boolean} [test result]
		 */
		function canLand(target) {
			return /\S/.test(target);
		}
		/**
		 * find landing row for sand
		 * @param {int} [curRow] - current row of sand
		 * @param {Array} [column] - current sand column
		 *
		 * @return {int} [landing row index]
		 */
		function getLandRow(curRow, column) {
			const landRow = column.slice(curRow + 1).findIndex(row => canLand(row));
			return landRow === -1 ? column.length - 1 : landRow + curRow;
		}
		/**
		 * retrieve a given column from the grids
		 * @param {Array} [grids] - current grids
		 * @param {int} [colIndex] - target column index
		 *
		 * @return {Array} [target column]
		 */
		function getColumn(grids, colIndex) {
			return grids.map(row => row[colIndex]);
		}
		/**
		 * sand falling down
		 * @param {Array} [grids] - current grids
		 * @param {int} [colIndex] - target column index
		 *
		 * @return {Array} [grids after sand falling]
		 */
		function sandFall(grids, colIndex) {
			let column = getColumn(grids, colIndex);
			for(let i = column.length - 1; i >= 0; i--) {
				if(column[i] === ".") {
					[grids[i][colIndex], grids[getLandRow(i, column)][colIndex]] = [" ", "."];
				}
			}
			return grids;
		}
		/**
		 * simulate falling sand
		 * @param {int} [dimension] - grids dimension
		 * @param {String} [layout] - current grid layout
		 *
		 * @return {String} [end result]
		 */
		function simulateSandFall(dimension, layout) {
			let grids = makeGrids(dimension, layout);
			for(let i = 0; i < grids[0].length; i++) {
				grids = sandFall(grids, i);
			}
			return grids.map(row => row.join("")).join("\n");
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = ".....\n  #  \n#    \n\n    .";
		console.log(`%c${input}`, "color : skyblue;");
		console.log(`%cAfter Falling: `, "color : skyblue;");
		console.log(`%c${simulateSandFall(5, input)}`, "color : orange;");
	});
})();		