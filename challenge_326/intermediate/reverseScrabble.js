/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * retrieve word list
		 * @param {String} [url] - word list URL
		 *
		 * @return {Object} [Promise object]
		 */
		function getWordList(url) {
			return new Promise((resolve, reject) => {
				let xhttp = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
				xhttp.onreadystatechange = function() {
					if(this.readyState == 4 && this.status == 200) resolve(this.responseText.split("\n").map(word => word.trim()));
					if(this.status == 404) reject("List Not Found.");
				};
				xhttp.open("GET", url, true);
				xhttp.send();
			});
		}
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
		 * @param {Object} [list] - word dictionary
		 *
		 * @return {Array} [horizontal words]
		 */
		function getHorizontalWord(board, list) {
			let startWord = getStartWord(board);
			return board.join(" ").match(/\w\w+/g).filter(word => word != startWord && list.has(word));
		}
		/**
		 * find all vertical words
		 * @param {Array} [board] - game board
		 * @param {Object} [list] - word dictionary
		 *
		 * @return {Array} [vertical words]
		 */
		function getVerticalWord(board, list) {
			let columns = board[0].split("").map((col, index) => board.map(row => row[index]).join(""));
			return columns.join(" ").match(/\w\w+/g).filter(word => list.has(word));
		}
		/**
		 * reverse scrabble game
		 * @param {String} [layout] - board layout
		 * @param {Object} [list] - word dictionary
		 *
		 * @return {Array} [reversed scrabble words]
		 */
		function reverseScrabble(layout, list) {
			let board = makeBoard(layout);
			console.log(getStartWord(board));
			console.log(getHorizontalWord(board, list));
			console.log(getVerticalWord(board, list));
		}
		getWordList("https://raw.githubusercontent.com/dolph/dictionary/master/enable1.txt").then(list => {
			let time = new Date().getTime();
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
			reverseScrabble(input, new Set(list));  
			console.log(new Date().getTime() - time + "ms");               
		});
	});
})();		