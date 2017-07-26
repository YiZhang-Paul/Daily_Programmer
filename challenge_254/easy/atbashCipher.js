/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * check if a letter is capitalized
		 * @param {char} [letter] - letter to be examined
		 *
		 * @return {boolean} [result]
		 */
		function isUpperCase(letter) {
			return letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90;
		}
		/**
		 * check if a letter is in lower case
		 * @param {char} [letter] - letter to be examined
		 *
		 * @return {boolean} [result]
		 */
		function isLowerCase(letter) {
			return letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122;
		}
		/**
		 * check if a character is a letter
		 * @param {char} [char] - character to be examined
		 * 
		 * @return {boolean} [result]
		 */
		function isLetter(char) {
			return isUpperCase(char) || isLowerCase(char);
		}
		/**
		 * encode/decode letter using atbash
		 * @param {char} [letter] - letter to be encoded/decoded
		 *
		 * @return {char} [encoded/decoded letter]
		 */
		function atbashLetter(letter) {
			return isLetter(letter) ? String.fromCharCode((isUpperCase(letter) ? 90 : 122) * 2 - letter.charCodeAt() - 25) : letter;
		}
		/**
		 * encode/decode a word using atbash
		 * @param {String} [word] - word to be encoded/decoded
		 *
		 * @return {String} [encoded/decoded word]  
		 */
		function atbashWord(word) {
			return word.split("").map(char => atbashLetter(char)).join("");
		}
		//challenge & bonus
		let input = "foobar";
		console.log(`${input} -> %c${atbashWord(input)}`, "color : red;");
		input = "wizard";
		console.log(`${input} -> %c${atbashWord(input)}`, "color : red;");
		input = "/r/dailyprogrammer";
		console.log(`${input} -> %c${atbashWord(input)}`, "color : red;");
		input = "gsrh rh zm vcznkov lu gsv zgyzhs xrksvi";
		console.log(`${input} -> %c${atbashWord(input)}`, "color : red;");
		input = "fOoBar";
		console.log(`${input} -> %c${atbashWord(input)}`, "color : red;");
		input = "wIZaRD";
		console.log(`${input} -> %c${atbashWord(input)}`, "color : red;");
		input = "/R/daILyproGraMmer";
		console.log(`${input} -> %c${atbashWord(input)}`, "color : red;");
		input = "gsrh rh zm vCZnkov LU gSv zgyZHs xrksvi";
		console.log(`${input} -> %c${atbashWord(input)}`, "color : red;");
	});
})();		