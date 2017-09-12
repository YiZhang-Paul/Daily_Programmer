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
		 * randomly generate words with given pattern
		 * @param {String} [pattern] - pattern to be followed
		 *
		 * @return {String} [randomly generated word]
		 */
		function generateWord(pattern) {
			if(!isValid(pattern)) {
				return null;
			}
			return pattern.split("").map(char => pickChar(char.toLowerCase())).join("");
		}
		//challenge & bonus input
		console.log(`%cChallenge & Bonus Input: `, "color : red;");
		let input = "cvcvcc";
		console.log(generateWord(input));
		input = "CcvV";
		console.log(generateWord(input));
		input = "cvcvcvcvcvcvcvcvcvcv"; 
		console.log(generateWord(input));
	});
})();		