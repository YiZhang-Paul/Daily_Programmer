/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * get negative one
		 *
		 * @return {int} [negative one]
		 */
		function getNegativeOne() {
			return 9007199254740990 - Number.MAX_SAFE_INTEGER; 
		}
		/**
		 * add numbers 
		 * @param {float} [number1] - operand 1
		 * @param {float} [number2] - operand 2
		 *
		 * @return {float} [sum of two numbers]
		 */
		function add(number1, number2) {
			return number1 + number2;
		}
		/**
		 * multiply numbers
		 * @param {float} [number1] - operand 1
		 * @param {float} [number2] - operand 2
		 *
		 * @return {float} [product of two numbers]
		 */
		function multiply(number1, number2) {
			let result = 0;
			for(let i = 0; i < number2; i++) {
				result = add(result, number1);
			}
			return result;
		}
		/**
		 * read operands 
		 * @param {Array} [operands] - operands to be read
		 *
		 * @return {Array} [operands with correct value]
		 */
		function readOperands(operands) {
			return operands.map(operand => 
				/-/.test(operand) ? multiply(getNegativeOne(), Number(operand.match(/\d+/)[0])) : Number(operand));
		}
		/**
		 * read expression
		 * @param {String} [expression] - expression to be read
		 *
		 * @return {Array} [operands and operator]
		 */
		function readExpression(expression) {
			const operator = expression.match(/\s[+-^/*]\s/)[0].trim();
			const operands = expression.split(operator).map(operand => operand.trim());
			return [...readOperands(operands), operator];
		}
		//chanllenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = "12 + 25";
		input = "-30 + 100";
		console.log(readExpression(input));
		input = "100 - 30";
		input = "100 - -30";
		input = "-25 - 29";
		input = "-41 - -10";
		input = "9 * 3";
		input = "9 * -4";
		input = "-4 * 8";
		input = "-12 * -9";
		input = "100 / 2";
		input = "75 / -3";
		input = "-75 / 3";
		input = "7 / 3";
		input = "0 / 0";
		input = "5 ^ 3";
		input = "-5 ^ 3";
		input = "-8 ^ 3";
		input = "-1 ^ 1";
		input = "1 ^ 1";
		input = "0 ^ 5";
		input = "5 ^ 0";
		input = "10 ^ -3";
	});
})();		