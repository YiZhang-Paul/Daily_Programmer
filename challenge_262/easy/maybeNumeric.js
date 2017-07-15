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
			return `${test.trim()} (${result}${result == "Number" ? isSpecial(test) : ""})`;
		}
		/**
		 * check special numbers
		 * @param String
		 *
		 * test : number to be tested
		 *
		 * returns String
		 */
		function isSpecial(test) {
			let result = "";
			if(test.trim().split(" ").length > 1) {
				result = " -> Array";
			} else if(test.indexOf("e") != -1) {
				result = " -> Exponent Notation";
			} else if(test.length >= 10) {
				result = " -> Big Number";
			}
			return result;
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
		//bonus 2 input
		console.log(`%cBonus 2 Input: `, "color : red;");
		input = `2015 4 4\`Challenge #\`261\`Easy
             234.2\`234ggf 45\`00\`number string number (0)`;
             console.log(input);
	});
})();		