/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * simulate game board
		 * @param {String} [layout] - board layout
		 *
		 * @return {Array} [simulated board]
		 */
		function makeBoard(layout) {
			return layout.split("\n").map(row => row.trim());
		}
		/**
		 * get first word
		 * @param {Array} [board] - game board
		 *
		 * @return {String} [starting word]
		 */
		function getStartWord(board) {
			let midRow = board[(board.length - 1) * 0.5];
			let rowCenter = (midRow.length - 1) * 0.5;
			return midRow.match(/\w\w+/g).find(word => {
				let startIndex = midRow.search(word);
				let wordCenter = word.length % 2 ? (word.length - 1) * 0.5 : word.length * 0.5 - 1;
				return startIndex + wordCenter == rowCenter;
			});
		}
		/**
		 * find all horizontal words
		 * @param {Array} [board] - game board
		 *
		 * @return {Array} [horizontal words]
		 */
		function getHorizontalWord(board) {
			let startWord = getStartWord(board);
			return board.join(" ").match(/\w\w+/g).filter(word => word != startWord);
		}
		/**
		 * find all vertical words
		 * @param {Array} [board] - game board
		 *
		 * @return {Array} [vertical words]
		 */
		function getVerticalWord(board) {
			let columns = board[0].split("").map((col, index) => board.map(row => row[index]).join(""));
			return columns.join(" ").match(/\w\w+/g);
		}
		/**
		 * reverse scrabble game
		 * @param {String} [layout] - board layout
		 *
		 * @return {Array} [reversed scrabble words]
		 */
		function reverseScrabble(layout) {
			let board = makeBoard(layout);
			console.log(getStartWord(board));
			console.log(getHorizontalWord(board));
			console.log(getVerticalWord(board));
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = `...cite
                 .tilt..
                 ...e...
                 .planes
                 ...n...
                 .......
                 .......`;
		console.log(makeBoard(input).join("\n"));
		console.log(`%cReversed Words -> `, "color : orange;");
		reverseScrabble(input);                 
	});
})();		