/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * check if input pattern is valid
		 * @param {String} [pattern] - input pattern to be checked
		 * @param {Object} [allowed] - allowed characters in the pattern
		 *
		 * @return {boolean} [test result]
		 */
		function isValid(pattern, allowed = new Set("cv")) {
			return pattern.toLowerCase().split("").every(char => allowed.has(char));
		}
		//challenge & bonus input
		console.log(`%cChallenge & Bonus Input: `, "color : red;");
		let input = "cvcvcc";
		console.log(isValid(input));
		input = "CcvV";
		input = "cvcvcvcvcvcvcvcvcvcv"; 
	});
})();		