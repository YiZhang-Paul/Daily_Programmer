/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * calculate factorial
		 * @param {int} [number] - base number
		 *
		 * @return {int} [factorial of base number]
		 */
		function factorial(number) {
			return number == 1 ? number : number * factorial(number - 1);
		}
		/**
		 * evaluate expression
		 * @param {Array} [exp] - operands and operator
		 *
		 * @return {float} [evaluation result]
		 */
		function evalExp(exp) {
			switch(exp[exp.length - 1]) {
				case "+" : case "-" :
					return exp[0] + Number(exp[2] + exp[1]);
				case "*" :
					return exp[0] * exp[1];
				case "/" :
					return exp[0] / exp[1];
				case "//" :
					return Math.floor(exp[0] / exp[1]);
				case "%" :
					return exp[0] % exp[1];
				case "^" :
					return Math.pow(exp[0], exp[1]);	
				case "!" :
					return factorial(exp[0]);					
			}
		}
		/**
		 * check if a character is an operator
		 * @param {char} [char] - character to be tested
		 *
		 * @return {boolean} [test result]
		 */
		function isOperator(char) {
			return /[+-](?!\d)|\*|\/|\^|\%|\!|\/\//.test(char);
		}
		/**
		 * find index of next operator
		 * @param {Array} [evals] - expressions
		 *
		 * @return {int} [operator index]
		 */
		function operatorIndex(evals) {
			return evals.findIndex(eval => isOperator(eval));
		}
		/**
		 * calculate normal Polish notation
		 * @param {String} [input] - NPN expression to be evaluated 
		 *
		 * @return {float} [evaluation result]
		 */
		function reverseNPN(input) {
			let evals = input.split(" ").map(eval => isOperator(eval) ? eval : Number(eval));
			let opIndex = operatorIndex(evals);
			while(opIndex != -1) {
				let sliceLen = evals[opIndex] == "!" ? 1 : 2;
				evals = [...evals.slice(0, opIndex - sliceLen),
				         evalExp(evals.slice(opIndex - sliceLen, opIndex + 1)),
				         ...evals.slice(opIndex + 1)];
				opIndex = operatorIndex(evals);        
			}
			return evals[0];
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = "0.5 1 2 ! * 2 1 ^ + 10 + *";
		console.log(`${input} %c= ${reverseNPN(input)}`, "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = "1 2 3 4 ! + - / 100 *";
		console.log(`${input} %c= ${reverseNPN(input)}`, "color : orange;");
		input = "100 807 3 331 * + 2 2 1 + 2 + * 5 ^ * 23 10 558 * 10 * + + *";
		console.log(`${input} %c= ${reverseNPN(input)}`, "color : orange;");
	});
})();			