/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * get negative one
		 *
		 * @return {int} [negative one]
		 */
		function getNegativeOne() {
			return Number.MIN_SAFE_INTEGER + 9007199254740990;
		}
		/**
		 * negate a number
		 * @param {float} [number] - number to be negated
		 *
		 * @return {float} [negated number]
		 */
		function negate(number) {
			return number > 0 ? multiply(getNegativeOne(), number) : Math.abs(number);
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
		 * reduce numbers
		 * @param {float} [number1] - operand 1
		 * @param {float} [number2] - operand 2
		 *
		 * @return {float} [difference of two numbers]
		 */
		function reduce(number1, number2) {
			return add(number1, negate(number2));
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
			for(let i = 0; i < Math.abs(number2); i++) {
				result = add(result, number1);
			}
			return number2 < 0 ? negate(result) : result; 
		}
		/**
		 * divide numbers
		 * @param {float} [number1] - operand 1
		 * @param {float} [number2] - operand 2
		 *
		 * @return {float} [quotient of two numbers]
		 */
		function divide(number1, number2) {
			const [abs1, abs2] = [number1, number2].map(Math.abs);
			if(abs2 === 0) {
				return "Not-Defined.";
			}
			let result = 0, sum = 0;
			while(sum < abs1) {
				sum = add(sum, abs2);
				result++;
			}
			return sum == abs1 ?
				((number1 < 0 && number2 < 0) || (number1 >= 0 && number2 >= 0) ? result : negate(result)) : "Non-Integral Answer.";
		}
		/**
		 * calculate exponentials
		 * @param {float} [number1] - operand 1
		 * @param {float} [number2] - operand 2
		 *
		 * @return {float} [exponent of operand 1]
		 */
		function exponent(number1, number2) {
			let result = 1; 
			for(let i = 0; i < Math.abs(number2); i++) {
				result = multiply(result, number1);
			}
			return number2 < 0 ? divide(1, result) : result;
		}
		/**
		 * read operands
		 * @param {Array} [operands] - operands to be read
		 *
		 * @return {Array} [operands evaluated to true values]
		 */
		function readOperands(operands) {
			return operands.map(operand => 
				/-/.test(operand) ? negate(Number(operand.match(/\d+/)[0])) : Number(operand));
		}
		/**
		 * read expression
		 * @param {String} [expression] - expression to be read
		 *
		 * @return {Array} [operands and operator]
		 */
		function readExpression(expression) {
			const operator = expression.match(/\s[+-^/*]\s/)[0].trim();
			const operands = expression.match(/-*\d+/g).map(operand => operand.trim());
			return [...readOperands(operands), operator];
		}
		/**
		 * evaluate expressions
		 * @param {String} [expression] - expression to be evaluated
		 *
		 * @return {float} [evaluation result]
		 */
		function evalExpression(expression) {
			const [operand1, operand2, operator] = readExpression(expression);
			switch(operator) {
				case "+" :
					return expression + " = " + add(operand1, operand2);
				case "-" :
					return expression + " = " + reduce(operand1, operand2);					
				case "*" :
					return expression + " = " + multiply(operand1, operand2);
				case "/" :
					return expression + " = " + divide(operand1, operand2);
				case "^" :
					return expression + " = " + exponent(operand1, operand2);					
			}
		}
		//chanllenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = "12 + 25";
		console.log(evalExpression(input));
		input = "-30 + 100";
		console.log(evalExpression(input));
		input = "100 - 30";
		console.log(evalExpression(input));
		input = "100 - -30";
		console.log(evalExpression(input));
		input = "-25 - 29";
		console.log(evalExpression(input));
		input = "-41 - -10";
		console.log(evalExpression(input));
		input = "9 * 3";
		console.log(evalExpression(input));
		input = "9 * -4";
		console.log(evalExpression(input));
		input = "-4 * 8";
		console.log(evalExpression(input));
		input = "-12 * -9";
		console.log(evalExpression(input));
		input = "100 / 2";
		console.log(evalExpression(input));
		input = "75 / -3";
		console.log(evalExpression(input));
		input = "-75 / 3";
		console.log(evalExpression(input));
		input = "7 / 3";
		console.log(evalExpression(input));
		input = "0 / 0";
		console.log(evalExpression(input));
		input = "5 ^ 3";
		console.log(evalExpression(input));
		input = "-5 ^ 3";
		console.log(evalExpression(input));
		input = "-8 ^ 3";
		console.log(evalExpression(input));
		input = "-1 ^ 1";
		console.log(evalExpression(input));
		input = "1 ^ 1";
		console.log(evalExpression(input));
		input = "0 ^ 5";
		console.log(evalExpression(input));
		input = "5 ^ 0";
		console.log(evalExpression(input));
		input = "10 ^ -3";
		console.log(evalExpression(input));
	});
})();		