/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * record all available tiles
		 * @param {Object} [table] - table of all tiles
		 *
		 * @return {Object} [tile table]
		 */
		function getAllTile(table) {
			let allTile = new Map();
			for(let letter in table) {
				allTile.set(letter, table[letter][0]);
			}
			return allTile;
		}
		/**
		 * record all tiles on play
		 * @param {String} [onPlay] - all tiles on play
		 *
		 * @return {Object} [tile table]
		 */
		function tileOnPlay(onPlay) {
			let tileOnPlay = new Map();
			for(let i = 0; i < onPlay.length; i++) {
				let curLetter = onPlay[i] == "_" ? "Blank" : onPlay[i];
				tileOnPlay.set(curLetter, tileOnPlay.has(curLetter) ? tileOnPlay.get(curLetter) + 1 : 1);
			}
			return tileOnPlay;
		}
		/**
		 * display remaining tile
		 * @param {Object} [table] - table of all tiles
		 * @param {String} [onPlay] - all tiles on play
		 *
		 * @return {Object} [remaining tiles in the bag]
		 */
		function tileInBag(table, onPlay) {
			let allTile = getAllTile(table);
			let curOnPlay = tileOnPlay(onPlay);
			for(let i = 0, letters = curOnPlay.keys(); i < curOnPlay.size; i++) {
				let curLetter = letters.next().value;
				let remain = allTile.get(curLetter) - curOnPlay.get(curLetter);
				if(remain < 0) {
					return [curLetter];
				}
				allTile.set(curLetter, remain);
			} 
			return allTile;
		}
		/**
		 * count remaining tiles and group tiles 
		 * with same amount remaining together
		 * @param {Object} [remain] - remaining tiles
		 *
		 * @return {Array} [grouped tiles by remaining amount]
		 */
		function countRemain(remain) {
			let groups = [];
			remain.forEach((num, letter) => {
				let curLetter = letter == "Blank" ? "_" : letter;
				groups[num] = groups[num] ? groups[num] + curLetter : curLetter; 
			});
			return groups;
		}
		/**
		 * show remain tiles in alphabetical order
		 * @param {Object} [remain] - remaining tiles
		 */
		function showRemainTile(remain) {
			for(let i = remain.length - 1; i >= 0; i--) {
				if(remain[i]) {
					console.log(`${i}: ${remain[i].split("").sort((a, b) => a.charCodeAt() - b.charCodeAt()).join(", ")}`);
				}
			}
		}
		/**
		 * display tiles on play
		 * @param {Object} [onPlay] - tiles on play
		 */
		function showOnPlay(onPlay) {
			showRemainTile(countRemain(tileOnPlay(onPlay)));
		}
		/**
		 * display remaining tiles in bag
		 * @param {Object} [table] - table of all tiles
		 * @param {String} [onPlay] - all tiles on play
		 */
		function showInBag(table, onPlay) {
			let remain = tileInBag(table, onPlay);
			if(Array.isArray(remain)) {
				console.log(`Invalid input. More ${remain[0]}'s have been taken from the bag than possible.`);
			}
			showRemainTile(countRemain(remain));
		}
		/**
		 * calculate total score for a set of tiles
		 * @param {Object} [table] - tile table
		 * @param {Object} [tiles] - current word tiles
		 *
		 * @return {int} [total score]
		 */
		function totalScore(table, tiles) {
			let total = 0;
			tiles.forEach((num, tile) => {
				total += table[tile][1] * num;
			});
			return total;
		}
		/**
		 * display final result
		 * @param {Object} [table] - table of all tiles
		 * @param {String} [onPlay] - all tiles on play
		 */
		function displayResult(table, onPlay) {
			let inBag = tileInBag(table, onPlay);
			console.log(`%cRemain: (Total Score -> %c${Array.isArray(inBag) ? 0 : totalScore(table, inBag)}%c)`, "color : orange;", "color : red;", "color : orange;");
			showInBag(table, onPlay);
			console.log(`%cOn Play: (Total Score -> %c${totalScore(table, tileOnPlay(onPlay))}%c)`, "color : orange;", "color : red;", "color : orange;");
			showOnPlay(onPlay);		
		}
		//scrabble table
		const table = {
			E :	[12, 1], A : [9,	1], I :	[9,	1], O :	[8,	1], N :	[6,	1], R :	[6,	1], T :	[6,	1], 
			L :	[4,	1], S :	[4,	1], U :	[4,	1], D :	[4,	2], G :	[3,	2], Blank :	[2,	0], B :	[2,	3], 
			C :	[2,	3], M :	[2,	3], P :	[2,	3], F :	[2,	4], H :	[2,	4], V :	[2,	4], W :	[2,	4], 
			Y :	[2,	4], K :	[1,	5], J :	[1,	8], X :	[1,	8], Q :	[1,	10], Z : [1,	10]
		};
		//default input & bonus
		console.log(`%cDefault Input: `, "color : red;");
		let input = "AEERTYOXMCNB_S";
		console.log(`%c${input}: `, "color : yellow;");
		displayResult(table, input);
		//challenge input & bonus
		console.log(`%cChallenge Input: `, "color : red;");
		input = "PQAREIOURSTHGWIOAE_";
		console.log(`%c${input}: `, "color : yellow;");
		displayResult(table, input);
		input = "LQTOONOEFFJZT";
		console.log(`%c${input}: `, "color : yellow;");
		displayResult(table, input);
		input = "AXHDRUIOR_XHJZUQEE";
		console.log(`%c${input}: `, "color : yellow;");
		displayResult(table, input);
	});
})();		