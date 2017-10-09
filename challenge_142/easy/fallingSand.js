/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
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
		function getLandingRow(curRow, column) {
			return column.slice(curRow + 1).findIndex(row => canLand(row)) + curRow;
		}
		console.log(getLandingRow(1, [" ", ".", " ", " ", ".", "#"]));
	});
})();		