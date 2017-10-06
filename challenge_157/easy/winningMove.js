/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * read current board
		 * @param {String} [layout] - current layout
		 *
		 * @return {Array} [current board]
		 */
		function readBoard(layout) {
			return layout.match(/\S+(?=\n)|\S+(?!.)/g).map(row => row.split(""));
		}
		let board = `XX-
                 -XO
                 OO-`;
		console.log(readBoard(board));
	});
})();		