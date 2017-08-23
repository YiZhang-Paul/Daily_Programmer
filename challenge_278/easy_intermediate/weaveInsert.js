/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * validate input
		 * @param {String} [input] - input to be validated
		 *
		 * @return {Array} [validated input]
		 */
		function validateInput(input) {
			let lines = input.split("\n").map(line => line.trim());
			let breakIndex = lines.indexOf("");
			let [operation, array1, array2] = [lines[0], lines.slice(1, breakIndex), lines.slice(breakIndex + 1)];
			array1 = array1.length == 1 && array1[0].length > 1 ? array1[0].split("") : array1; 
			array2 = array2.length == 1 && array2[0].length > 1 ? array2[0].split("") : array2; 
			return [operation, array1, array2];
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");	
		let input = `Bracket
                 +-
                 
                 234567`;
    console.log(validateInput(input));
    input = `Bracket
             2+3
             4-5
             6+7
             
             ()`;
    console.log(validateInput(input));
    input = `Weave
             *
             
             (2+3)
             (4-5)
             (6+7)`;
    console.log(validateInput(input));
	});
})();		