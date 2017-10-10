/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * retrieve translate table
		 *
		 * @return {Object} [translate table]
		 */
		function getTable() {
			return Object.freeze({
		  	"100000" : "a", "101000" : "b", "110000" : "c", "110100" : "d", "100100" : "e", "111000" : "f", "111100" : "g",  
		    "101100" : "h", "011000" : "i", "011100" : "j", "100010" : "k", "101010" : "l", "110010" : "m", "110110" : "n",  
		    "100110" : "o", "111010" : "p", "111110" : "q", "101110" : "r", "011010" : "s", "011110" : "t", "100011" : "u",  
		    "101011" : "v", "011101" : "w", "110011" : "x", "110111" : "y", "100111" : "z"  
		  });
		}
		/**
		 * translate Braille writing system to English character
		 * @param {String} [braille] - Braille writing 
		 * @param {Object} [table] - translate table
		 *
		 * @return {char} [English character]
		 */
		function toEnglish(braille, table) {
			return table[braille.replace(/O|\./g, match => match == "O" ? 1 : 0)];
		}
		/**
		 * read Braille characters
		 * @param {String} [braille] - braille characters to read
		 *
		 * @return {Array} [Braille characters] 
		 */
		function readBraille(braille) {
			return braille.split("\n")
								    .map(row => row.trim().split(" "))
								    .reduce((acc, val) => acc.map((char, index) => char + val[index]));
		}
		/**
		 * translate Braille to English
		 * @param {String} [braille] - Braille writing
		 *
		 * @return {String} [translated English]
		 */
		function translateBraille(braille) {
			let table = getTable(), brailleChars = readBraille(braille);
			return brailleChars.map(char => toEnglish(char, table)).join("");
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = `O. O. O. O. O. .O O. O. O. OO 
                 OO .O O. O. .O OO .O OO O. .O
                 .. .. O. O. O. .O O. O. O. ..`;
    console.log(`%c${translateBraille(input)}`, "color : orange;");
	});
})();		