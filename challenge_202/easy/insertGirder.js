/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * translate 8-bit binary representation to character
		 * @param {String} [binary] - binary representation to be translated
		 *
		 * @return {char} [corresponding character]
		 */
		function toChar(binary) {
			return String.fromCharCode(Number.parseInt(binary, 2));
		}
		/**
		 * translate binary representation to English
		 * @param {String} [binary] - binary representation to be translated
		 *
		 * @return {String} [translated sentence]
		 */
		function translate(binary) {
			let translated = "";
			for(let i = 0; i < binary.length; i += 8) {
				translated += toChar(binary.slice(i, i + 8));
			}
			return translated;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = `0100100001100101011011000110110001101111001000000101011101101111011100100110110001100100`;
		console.log(`%c${input}`, "color : skyblue;");
		console.log(`%c${translate(input)}`, "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = "0111000001101100011001010110000101110011011001010010000001110100011000010110110001101011001000000111010001101111001000000110110101100101";
		console.log(`%c${input}`, "color : skyblue;");
		console.log(`%c${translate(input)}`, "color : orange;");
		input = "011011000110100101100110011001010010000001110010011010010110011101101000011101000010000001101110011011110111011100100000011010010111001100100000011011000110111101101110011001010110110001111001";
		console.log(`%c${input}`, "color : skyblue;");
		console.log(`%c${translate(input)}`, "color : orange;");
	});
})();		