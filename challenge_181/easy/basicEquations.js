/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * extract number from string
		 * @param {String} [numStr] - string to extract number from
		 *
		 * @return {Array} [numbers extracted from string]
		 */
		function getNumber(numStr) {
			return /\d/.test(numStr) ? numStr.match(/[+-]{0,1}\d+\.*\d*/g).map(Number) : [1];
		}
		/**
		 * read expression
		 * @param {String} [expression] - expression to read
		 *
		 * @return {Object} [expression broken down]
		 */
		function readExpression(expression) {
			let sides = expression.split("=").map(side => side.trim());
			const totalY = getNumber(sides[0])[0];
			const [a, b] = sides[1].split("x").map(number => getNumber(number)[0]);
			return {totalY, a, b};
		}
		console.log(readExpression("y=2x+2"));
	});
})();		