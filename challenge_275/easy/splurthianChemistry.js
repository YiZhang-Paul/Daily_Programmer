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
	});
})();		