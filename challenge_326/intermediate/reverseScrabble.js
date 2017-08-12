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
		 * @param {String} [layout] - game board layout
		 *
		 * @return {Array} [simulated game board and all its slots]
		 */
		function makeBoard(layout) {
			let board = layout.split("\n").map(row => row.trim());
			return [board, board.map(row => new Array(row.length).fill(0))];
		}
		/**
		 * get first word 
		 * @param {Array} [boad] - game board
		 *
		 * @return {Array} [starting word]
		 */
		function getStartWord(board) {
			let midRow = board[(board.length - 1) * 0.5];
			let midCol = (midRow.length - 1) * 0.5;
			let startWord = midRow.match(/\w{2,}/g).find(word => midRow.search(word) + word.length >= midCol);
			return [startWord, {x : midRow.search(startWord), y : (board.length - 1) * 0.5, dir : "h"}];
		}
		/**
		 * find all horizontal words on game board
		 * @param {Array} [board] - game board
		 * @param {Object} [list] - word dictionary
		 *
		 * @return {Array} [all horizontal words]
		 */
		function getHorizontalWord(board, list) {
			let words = [], startWord = getStartWord(board)[0];
			board.forEach((row, index) => {
				if(/\w{2,}/.test(row)) {
					let validWord = row.match(/\w{2,}/g).filter(word => word != startWord && list.has(word));
					if(validWord.length) {
						words.push(...validWord.map(word => [word, {x : row.search(word), y : index, dir : "h"}]));
					}
				}
			});
			return words;
		}
		/**
		 * find all vertical words on game board
		 * @param {Array} [board] - game board
		 * @param {Object} [list] - word dictionary
		 *
		 * @return {Array} [all vertical words]
		 */
		function getVerticalWord(board, list) {
			let words = [];
			board[0].split("").forEach((col, index) => {
				col = board.map(row => row[index]).join("");
				if(/\w{2,}/.test(col)) {
					let validWord = col.match(/\w{2,}/g).filter(word => list.has(word));
					if(validWord.length) {
						words.push(...validWord.map(word => [word, {x : index, y : col.search(word), dir : "v"}]));
					}
				}
			});
			return words;
 		}
		/**
		 * get all other words on game board except for starting word
		 * @param {Array} [board] - game board
		 * @param {Object} [list] - word dictionary
		 *
		 * @return {Array} [remaining words]
		 */
		function getOtherWord(board, list) {
			return [...getHorizontalWord(board, list), ...getVerticalWord(board, list)];
		}
		/**
		 * check for empty slots to put down words
		 * @param {Array} [slots] - current slots on game board
		 * @param {Array} [word] - word to put down
		 *
		 * @return {boolean} [slot availability]
		 */
		function hasSlot(slots, word) {
			return word[0].split("").some((letter, index) => 
				word[1].dir == "h" ? !slots[word[1].y][word[1].x + index] : !slots[word[1].y + index][word[1].x]);
		}
		/**
		 * check if two words intersect with each other
		 * @param {Array} [word1] - word 1
		 * @param {Array} [word2] - word 2
		 *
		 * @return {boolean} [test result]
		 */
		function isIntersect(word1, word2) {
			if(word1[1].dir == word2[1].dir) {
				return false;
			}
			let [hWord, vWord] = word1[1].dir == "h" ? [word1, word2] : [word2, word1];
			return (hWord[1].x <= vWord[1].x && hWord[1].x + hWord[0].length - 1 >= vWord[1].x) &&
			       (vWord[1].y <= hWord[1].y && vWord[1].y + vWord[0].length - 1 >= hWord[1].y);
		}
		/**
		 * check if a word intersects with any words from a given set
		 * @param {Array} [others] - other words to be checked against
		 * @param {Array} [curWord] - word to be checked
		 *
		 * @return {boolean} [test result] 
		 */
		function hasIntersect(others, curWord) {
			return others.some(word => isIntersect(word, curWord));
		}
		/**
		 * place a word on game board
		 * @param {Array} [slots] - current slots on game board
		 * @param {Array} [word] - word to put down
		 */
		function placeWord(slots, word) {
			word[0].split("").forEach((letter, index) => {
				let curX = word[1].x + (word[1].dir == "h" ? index : 0);  
				let curY = word[1].y + (word[1].dir == "h" ? 0 : index); 
				slots[curY][curX] = 1;
			});
		}
		/**
		 * filter all words that has no available slots on game board
		 * @param {Array} [slots] - current slots on game board
		 * @param {Array} [words] - words to be filtered
		 *
		 * @return {Array} [filtered words]
		 */
		function filterSlotFull(slots, words) {
			return words.filter(word => hasSlot(slots, word));
		}
		/**
		 * reverse scrabble game
		 * @param {String} [layout] - board layout
		 * @param {Object} [list] - word dictionary
		 *
		 * @return {String} [reversed scrabble words]
		 */
		function reverseScrabble(layout, list) {
			let [board, slots] = makeBoard(layout);
			let otherWord = getOtherWord(board, list);
			let sequence = [getStartWord(board)];
			while(otherWord.length) {
				for(let i = 0; i < otherWord.length; i++) {
					if(hasSlot(slots, otherWord[i]) && hasIntersect(sequence, otherWord[i])) {
						placeWord(slots, otherWord[i]);
						sequence.push(otherWord.splice(i, 1)[0]);
						otherWord = filterSlotFull(slots, otherWord);
						break;
					}
				}
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
			console.log(makeBoard(input)[0].join("\n"));
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
			console.log(makeBoard(input)[0].join("\n"));
			console.log(`%cReversed Words -> `, "color : orange;");
			console.log(`%c${reverseScrabble(input, new Set(list))}`, "color : skyblue;"); 
			console.log(`Time Spent: %c${new Date().getTime() - time}ms`, "color : orange;"); 	              
		});
	});
})();		