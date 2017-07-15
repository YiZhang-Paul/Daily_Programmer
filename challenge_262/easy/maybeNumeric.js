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
			let matches = test.match(/^(\d+\.?\d+|\.\d+)(e|e[-+])?(\d+\s|\d)+$/g);
			return matches;
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