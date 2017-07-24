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
		/**
		 * group letters in an element name and record 
		 * total number of each letter
		 * @param {String} [element] - element name
		 *
		 * @return {Object} [letter group]
		 */
		function groupLetter(element) {
			return element.toLowerCase().split("")
									  .reduce((acc, val) => {
			                acc[val] = acc[val] ? acc[val] + 1 : 1; 
			                return acc;
			              }, {});
		}
		/**
		 * find total number of unique symbols with length of 2
		 * for a given element name
		 * @param {String} [element] - element name
		 *
		 * @return {int} [total number of valid symbols]
		 */
		function totalUniqueSymbol1(element) {
			let chars = groupLetter(element);
      let charKeys = Object.keys(chars);			                   
      return charKeys.length * (charKeys.length - 1) * 0.5 + charKeys.filter(key => chars[key] > 1).length;
		}
		/**
		 * slice a group of letters from a given element name 
		 * @param {String} [element] - element name
		 * @param {int} [len] - length of slice
		 * @param {Array} [curSlice] - current slice
		 *
		 * @return {Array} [sliced groups]
		 */
		function sliceElement(elements, len = 1, curSlice = []) {
			if(curSlice.length == len || !elements) {
				return curSlice.length == len ? curSlice.join("") : null;
			}
			let slices = [];
			for(let i = 0; i < elements.length; i++) {
				let result = sliceElement(elements.slice(i + 1), len, [...curSlice, elements[i]]);
				if(result) {
					if(Array.isArray(result)) {
						slices.push(...result);
					} else {
						slices.push(result);
					}
				}
			}
			return slices;
		}
		/**
		 * find total number of unique symbols of any length
		 * for a given element name
		 * @param {String} [element] - element name
		 *
		 * @return {int} [total number of valid symbols]
		 */
		function totalUniqueSymbol2(element) {
			element = element.toLowerCase();
			let symbols = new Set();
			for(let i = 1; i <= element.length; i++) {
				symbols = new Set([...Array.from(symbols), ...sliceElement(element, i)]);
			}
			return symbols.size;
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = ["Spenglerium", "Ee"]; 
		console.log(`${input.join(", ")} -> %c${isValidSymbol(...input)}`, "color : yellow;");
		input = ["Zeddemorium", "Zr"]; 
		console.log(`${input.join(", ")} -> %c${isValidSymbol(...input)}`, "color : yellow;");
		input = ["Venkmine", "Kn"]; 
		console.log(`${input.join(", ")} -> %c${isValidSymbol(...input)}`, "color : yellow;");
		input = ["Stantzon", "Zt"]; 
		console.log(`${input.join(", ")} -> %c${isValidSymbol(...input)}`, "color : yellow;");
		input = ["Melintzum", "Nn"]; 
		console.log(`${input.join(", ")} -> %c${isValidSymbol(...input)}`, "color : yellow;");
		input = ["Tullium", "Ty"]; 
		console.log(`${input.join(", ")} -> %c${isValidSymbol(...input)}`, "color : yellow;");
		//bonus 1 input
		console.log(`%cBonus 1 Input: `, "color : red;");
		input = "Gozerium";
		console.log(`${input} -> %c${validOrderedSymbol(input)}`, "color : yellow;");
		input = "Slimyrine";
		console.log(`${input} -> %c${validOrderedSymbol(input)}`, "color : yellow;");
		//bonus 2 input
		console.log(`%cBonus 2 Input: `, "color : red;");
		input = "Zuulon";
		console.log(`${input} -> %c${totalUniqueSymbol1(input)}`, "color : yellow;");
		//bonus 3 input
		console.log(`%cBonus 3 Input: `, "color : red;");
		console.log(`${input} -> %c${totalUniqueSymbol2(input)}`, "color : yellow;");
	});
})();		