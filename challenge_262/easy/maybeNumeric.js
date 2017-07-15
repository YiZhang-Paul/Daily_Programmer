/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/** 
		 * check if a given string represents numeric value
		 * @param String
		 *
		 * test : string to be tested
		 *
		 * returns String
		 */
		function maybeNumeric(test) {
			let strings = test.trim().split(" ");
			let result = strings.every(string => /^(\d+\.?\d+|\.\d+)(e|e[-+])?\d+$/g.test(string)) ? "Number" : "String";
			if(strings.length > 1) {
				result += " -> Array";
			} else if(strings[0].indexOf("e") != -1) {
				result += " -> Exponent Notation";
			} else if(strings[0].length >= 10) {
				result += " -> Big Number";
			}
			return `${test.trim()} (${result})`;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = "123";
		console.log(maybeNumeric(input));
		input = "44.234";
		console.log(maybeNumeric(input));
		input = "0x123N";
		console.log(maybeNumeric(input));
		//bonus 1 input
		console.log(`%cBonus 1 Input: `, "color : red;");
		input = "123 234 345";
		console.log(maybeNumeric(input));
		input = "3.23e5";
		console.log(maybeNumeric(input));
		input = "1293712938712938172938172391287319237192837329";
		console.log(maybeNumeric(input));
		input = ".25";
		console.log(maybeNumeric(input)); 
	});
})();		