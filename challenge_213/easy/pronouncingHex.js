/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * convert HEX value to string
		 * @param {int} [HEX] - HEX value for conversion
		 *
		 * @return {String} [HEX string]
		 */
		function hexToString(hex) {
			return hex.toString(16).toUpperCase();
		}
		/**
		 * read ones of HEX value
		 * @param {char} [hex] - HEX value to read
		 *
		 * @return {String} [HEX pronunciation]
		 */
		function readOnes(hex) {
			const table = {
				1 : "one", 2 : "two", 3 : "three", 4 : "four", 5 : "five", 
				6 : "six", 7 : "seven", 8 : "eight", 9 : "nine", 10 : "ten",
				a : "ehh", b : "bee", c : "cee", d : "dee", e : "eee", f : "eff"
			};
			return table[hex.toLowerCase()] || "";
		}
		/**
		 * read tens of HEX value
		 * @param {char} [hex] - HEX value to read
		 *
		 * @return {String} [HEX pronunciation]
		 */
		function readTens(hex) {
			const table = {a : "Atta", b : "Bibbity", c : "City", d : "Dickety", e : "Ebbity", f : "Fleventy"};
			return table[hex.toLowerCase()] || "";
		}
		/**
		 * read HEX value
		 * @param {int} [hex] - HEX value to read
		 *
		 * @return {String} [HEX pronunciation]
		 */
		function readHex(hex) {
			hex = hexToString(hex);
			const hexStr = hex.length == 4 ? hex : "0".repeat(4 - hex.length) + hex;
			let pronunciation = "";
			for(let i = 0; i < hexStr.length; i++) {
				pronunciation += i % 2 ? readOnes(hexStr[i]) : readTens(hexStr[i]);
				if(hexStr[i] != "0" && i < hexStr.length - 1) {
					pronunciation += "-";
				}
				if(i == 1 && pronunciation) {
					pronunciation += "bitey ";
				}
			}
			return pronunciation;
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
    let input = 0xF5;
    console.log(`%c0x${hexToString(input)} -> %c${readHex(input)}`, "color : skyblue;", "color : orange;");
    input = 0xB3;
    console.log(`%c0x${hexToString(input)} -> %c${readHex(input)}`, "color : skyblue;", "color : orange;");
    input = 0xE4;
    console.log(`%c0x${hexToString(input)} -> %c${readHex(input)}`, "color : skyblue;", "color : orange;");
    input = 0xBBBB;
    console.log(`%c0x${hexToString(input)} -> %c${readHex(input)}`, "color : skyblue;", "color : orange;");
    input = 0xA0C9; 
    console.log(`%c0x${hexToString(input)} -> %c${readHex(input)}`, "color : skyblue;", "color : orange;");
	});
})();		