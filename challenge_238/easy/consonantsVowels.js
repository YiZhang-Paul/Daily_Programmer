/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * pick random character
		 * @param {char} [type] - type of character
		 *
		 * @return {char} [randomly picked character]
		 */
		function pickChar(type = "c") {
			const chars = type == "c" ? "bcdfghjklmnpqrstvwxyz" : "aeiou";
			return chars[Math.floor(Math.random() * chars.length)];
		}
		/**
		 * check if input pattern is valid
		 * @param {String} [pattern] - input pattern to be checked
		 * @param {Object} [allowed] - allowed characters in the pattern
		 *
		 * @return {boolean} [test result]
		 */
		function isValid(pattern, allowed = new Set("cv")) {
			return pattern.toLowerCase().split("").every(char => allowed.has(char));
		}
		/**
		 * check if a character is capitalized 
		 * @param {char} [char] - character to be checked
		 *
		 * @return {boolean} [test result]
		 */
		function isCapital(char) {
			return char == char.toUpperCase();
		}
		/**
		 * randomly generate words with given pattern
		 * @param {String} [pattern] - pattern to be followed
		 *
		 * @return {String} [randomly generated word]
		 */
		function generateWord(pattern) {
			if(!isValid(pattern)) {
				return null;
			}
			return pattern.split("").map(char => {
				const newChar = pickChar(char.toLowerCase());
				return isCapital(char) ? newChar.toUpperCase() : newChar;
			}).join("");
		}
		//challenge & bonus input
		console.log(`%cChallenge & Bonus Input: `, "color : red;");
		let input = "cvcvcc";
		console.log(`%c${input} -> %c${generateWord(input)}`, "color : skyblue;", "color : orange;");
		input = "CcvV";
		console.log(`%c${input} -> %c${generateWord(input)}`, "color : skyblue;", "color : orange;");
		input = "cvcvcvcvcvcvcvcvcvcv"; 
		console.log(`%c${input} -> %c${generateWord(input)}`, "color : skyblue;", "color : orange;");
	});
})();		