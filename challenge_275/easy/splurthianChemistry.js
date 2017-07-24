/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * check if a symbol is valid
		 * @param {String} [element] - element name
		 * @param {String} [symbol] - proposed symbol
		 *
		 * @return {boolean} [symbol validation]
		 */
		function isValidSymbol(element, symbol) {
			[element, symbol] = [element.toLowerCase().split(""), symbol.toLowerCase()];
			for(let i = 0, start = 0; i < symbol.length; i++) {
				start = element.indexOf(symbol[i], start) + 1;
				if(!start) {
					return false;
				}
			}
			return true;
		}
		/**
		 * find letter in the word that 
		 * comes first in alphabetical order
		 * @param {array} [chars] - characters to be tested
		 *
		 * @return {Char} [letter with lowest ASCII code]
		 */
		function minCharCodeLetter(chars) {
			return String.fromCharCode(Math.min(...chars.map(char => char.charCodeAt())));
		}	
		/**
		 * find valid symbol that's first in alphabetical order
		 * @param {String} [element] - element name
		 *
		 * @return {String} [valid symbol]
		 */
		function validOrderedSymbol(element) {
			let chars = Array.from(new Set(element.toLowerCase()));
			let startIndex = chars.indexOf(minCharCodeLetter(chars.slice(0, -1)));
			return chars[startIndex].toUpperCase() + minCharCodeLetter(chars.slice(startIndex + 1));               
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = ["Spenglerium", "Ee"]; 
		console.log(`${input.join(", ")} -> %c${isValidSymbol(...input)}`, "color : red;");
		input = ["Zeddemorium", "Zr"]; 
		console.log(`${input.join(", ")} -> %c${isValidSymbol(...input)}`, "color : red;");
		input = ["Venkmine", "Kn"]; 
		console.log(`${input.join(", ")} -> %c${isValidSymbol(...input)}`, "color : red;");
		input = ["Stantzon", "Zt"]; 
		console.log(`${input.join(", ")} -> %c${isValidSymbol(...input)}`, "color : red;");
		input = ["Melintzum", "Nn"]; 
		console.log(`${input.join(", ")} -> %c${isValidSymbol(...input)}`, "color : red;");
		input = ["Tullium", "Ty"]; 
		console.log(`${input.join(", ")} -> %c${isValidSymbol(...input)}`, "color : red;");
		//bonus input
		console.log(`%cBonus Input: `, "color : red;");
		input = "Gozerium";
		console.log(`${input} -> %c${validOrderedSymbol(input)}`, "color : red;");
		input = "Slimyrine";
		console.log(`${input} -> %c${validOrderedSymbol(input)}`, "color : red;");
	});
})();		