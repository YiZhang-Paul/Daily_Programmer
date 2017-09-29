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
		/**
		 * multiply all values in an object
		 * @param {Object} [obj] - object to be multiplied
		 * @param {int} [number] - number to multiply
		 *
		 * @return {Object} [object with all values multiplied]
		 */
		function multiplyObj(obj, number) {
			let newObj = Object.assign({}, obj);
			for(let key in newObj) {
				newObj[key] *= number;
			}
			return newObj;
		}
		/**
		 * solve for X
		 * @param {Object} [left] - left side of equation
		 * @param {Object} [right] - right side of equation
		 *
		 * @return {float} [value of X]
		 */
		function solveX(left, right) {
			return (right.b - left.b) / (left.a - right.a);
		}
		/**
		 * solve for Y
		 * @param {Object} [equation] - numbers in equation
		 * @param {float} [x] - value of X
		 *
		 * @return {float} [value of Y]
		 */
		function solveY(equation, x) {
			return (equation.a * x + equation.b) / equation.totalY;
		}
		/**
		 * find intersection of two lines
		 * @param {String} [expression1] - expression 1
		 * @param {String} [expression2] - expression 2
		 *
		 * @return {Object} [coordinate of intersection]
		 */
		function findIntersect(expression1, expression2) {
			let [numbers1, numbers2] = [expression1, expression2].map(readExpression);
			let x = solveX(multiplyObj(numbers1, numbers2.totalY), multiplyObj(numbers2, numbers1.totalY));
			return {x : x, y : solveY(numbers1, x)};
		}

		console.log(findIntersect("y=2x+2", "y=5x-4"));
	});
})();		