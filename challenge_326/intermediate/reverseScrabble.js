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
		 * @return {Array} [starting word and its starting coordinate]
		 */
		function getStartWord(board) {
			let midRow = board[(board.length - 1) * 0.5];
			let rowCenter = (midRow.length - 1) * 0.5;
			let startWord = midRow.match(/\w\w+/g).find(word => {
				let startIndex = midRow.search(word);
				let wordCenter = word.length % 2 ? (word.length - 1) * 0.5 : word.length * 0.5 - 1;
				return startIndex + wordCenter == rowCenter;
			});
			return [startWord, {x : midRow.search(startWord), y : (board.length - 1) * 0.5}];
		}
		/**
		 * find all horizontal words
		 * @param {Array} [board] - game board
		 * @param {Object} [list] - word dictionary
		 *
		 * @return {Array} [horizontal words and respective starting coordinate]
		 */
		function getHorizontalWord(board, list) {
			let words = [], startWord = getStartWord(board)[0];
			board.forEach((row, index) => {
				if(/\w\w+/g.test(row)) {
					let validWord = row.match(/\w\w+/g).filter(word => word != startWord && list.has(word));
					if(validWord.length) {
						words.push(...validWord.map(word => [word, {x : row.search(word), y : index}]));
					}
				}
			});
			return words;
		}
		/**
		 * find all vertical words
		 * @param {Array} [board] - game board
		 * @param {Object} [list] - word dictionary
		 *
		 * @return {Array} [vertical words and respective starting coordinate]
		 */
		function getVerticalWord(board, list) {
			let words = [];
			board[0].split("").forEach((col, index) => {
				col = board.map(row => row[index]).join("");
				if(/\w\w+/g.test(col)) {
					let validWord = col.match(/\w\w+/g).filter(word => list.has(word));
					if(validWord.length) {
						words.push(...validWord.map(word => [word, {x : index, y : col.search(word)}]));
					}
				}
			});
			return words;
		}
		/**
		 * check if two words intersects
		 * @param {Array} [horizontal] - horizontal placed word 
		 * @param {Array} [vertical] - vertical placed word
		 *
		 * @return {boolean} [test result] 
		 */
		function isIntersect(horizontal, vertical) {
			return horizontal[1].x <= vertical[1].x && 
			       horizontal[1].x + horizontal[0].length - 1 >= vertical[1].x &&
			       vertical[1].y <= horizontal[1].y &&
			       vertical[1].y + vertical[0].length - 1 >= horizontal[1].y;
		}
		/**
		 * pick out word that intersects with current word
		 * @param {Array} [curWord] - current word
		 * @param {String} [orientation] - orientation of current word
		 * @param {Array} [others] - other words that may intersect with current word
		 *
		 * @return {Array} [intersect word]
		 */
		function pickIntersect(curWord, orientation, others) {
			let index = others.findIndex(word => orientation == "h" ? isIntersect(curWord, word) : isIntersect(word, curWord));
			return others.splice(index, 1)[0];
		}
		/**
		 * reverse scrabble game
		 * @param {String} [layout] - board layout
		 * @param {Object} [list] - word dictionary
		 *
		 * @return {String} [reversed scrabble words]
		 */
		function reverseScrabble(layout, list) {
			let board = makeBoard(layout);
			let [startWord, hWords, vWords] = [getStartWord(board), getHorizontalWord(board, list), getVerticalWord(board, list)];
			let sequence = [startWord], restWord = hWords.length + vWords.length; 
			for(let i = 0; i < restWord; i++) {
				let lastWord = sequence[sequence.length - 1];
				sequence.push(i % 2 ? pickIntersect(lastWord, "v", hWords) : pickIntersect(lastWord, "h", vWords)); 
			}
			return sequence.map(word => word[0]).join("\n");
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
			console.log(`%c${reverseScrabble(input, new Set(list))}`, "color : skyblue;");  
			//challenge input
			console.log(`%cChallenge Input: `, "color : red;");
			input = `.........
               .........
               .ferries.
               .l.....t.
               .o..an.a.
               .e...e.f.
               .short.f.
               .......e.
               ..called.`;
			console.log(makeBoard(input).join("\n"));
			console.log(`%cReversed Words -> `, "color : orange;");
			console.log(`%c${reverseScrabble(input, new Set(list))}`, "color : skyblue;"); 
			console.log(`Time Spent: %c${new Date().getTime() - time}ms`, "color : orange;"); 	              
		});
	});
})();		