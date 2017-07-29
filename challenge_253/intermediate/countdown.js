/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * combine all operators
		 * @param {int} [len] - total number of operators to be selected
		 * @param {Array} [operator] - all operators
		 * @param {String} [curOp] - current selection of operators
		 *
		 * @return {Array} [all permutation of operators]
		 */
		function combineOperator(len, operator = ["+", "-", "*", "/"], curOp = "") {
			if(curOp.length == len) {
				return curOp;
			}
			let selection = [];
			for(let i = 0; i < operator.length; i++) {
				let result = combineOperator(len, operator, curOp + operator[i]);
				if(Array.isArray(result)) {
					selection.push(...result);
				} else {
					selection.push(result);
				}
			}
			return selection;
		}
		/**
		 * permutate all numbers
		 * @param {Array} [nums] - all numbers to be permuted
		 * @param {Array} [curNum] - current number permutation
		 *
		 * @return {Array} [all permutation of numbers]
		 */
		function permuteNumber(nums, curNum = []) {
			if(!nums.length) {
				return curNum;
			}
			let selection = [];
			for(let i = 0; i < nums.length; i++) {
				let result = permuteNumber([...nums.slice(0, i), ...nums.slice(i + 1)], [...curNum, nums[i]]);
				if(Array.isArray(result[0])) {
					selection.push(...result);
				} else {
					selection.push(result);
				}
			}
			return selection;
		}
		/**
		 * combine operator pattern and number pattern
		 * @param {String} [opPattern] - operator pattern
		 * @param {Array} [numPattern] - number pattern
		 *
		 * @return {String} [combined expression]
		 */
		function combinePattern(opPattern, numPattern) {
			return numPattern.reduce((acc, val, index) => `${acc} ${opPattern[index - 1]} ${val}`);
		}
		/**
		 * evaluate short arithmetic operations
		 * @param {float} [operand1] - operand 1
		 * @param {float} [operand2] - operand 2
		 * @param {String} [operator] - operator
		 *
		 * @return {float} [result]
		 */
		function evalExp(operand1, operand2, operator) {
			let result = 0;
			switch(operator) {
				case "+" : case "-" :
					result = operand1 + Number(operator + operand2);
					break;
				case "*" :
					result = operand1 * operand2;
					break;
				case "/" :
					result = operand1 / operand2;
					break;		
			}
			return result;
		}
		/**
		 * evaluate expression and check if result equals target
		 * @param {String} [opPattern] - operator pattern
		 * @param {Array} [numPattern] - number pattern
		 * @param {int} [goal] - target result
		 *
		 * @return {boolean} [test result]
		 */
		function isValidExp(opPattern, numPattern, goal) {
			opPattern = opPattern.split("");
			return numPattern.reduce((acc, val, index) => 
				evalExp(acc, val, opPattern[index - 1])) == goal;
		}
		/**
		 * solve countdown
		 * @param {String} [objective] - countdown objective
		 *
		 * @return {Array} [all valid countdowns]
		 */
		function countDown(objective) {
			let [nums, goal] = objective.split("makes").map(part => part.trim());
			let numPattern = permuteNumber(nums.split(" ").map(number => Number(number)));
			let opPattern = combineOperator(nums.split(" ").length - 1);
			let countdowns = [];
			for(let i = 0; i < numPattern.length; i++) {
				for(let j = 0; j < opPattern.length; j++) {
					if(isValidExp(opPattern[j], numPattern[i], Number(goal))) {
						countdowns.push(combinePattern(opPattern[j], numPattern[i]) + " = " + goal);
					}
				}
			}
			return countdowns;
		}
		/**
		 * check if a character is an operator
		 * @param {char} [char] - character to be checked
		 *
		 * @return {boolean} [test result]
		 */
		function isOperator(char) {
			return /[\+\-\*\/]/.test(char);
		}
		/**
		 * evaluate RPN notation and check if result equals target
		 * @param {String} [expression] - number pattern
		 * @param {int} [goal] - target result
		 *
		 * @return {boolean} [test result]
		 */
		function isValidRPN(expression, goal) {
			let findOpIndex = arr => arr.findIndex(item => isOperator(item));
			expression = expression.split(" ").map(item => /\d/.test(item) ? Number(item) : item);
			while(expression.length != 1) {
				let opIndex = findOpIndex(expression);
				if(isNaN(expression[opIndex - 1]) || isNaN(expression[opIndex - 2])) {
					return false;
				}
				expression.splice(opIndex - 2, 0, evalExp(...expression.splice(opIndex - 2, 3)));
			}
			return expression[0] == goal;
		}
		/**
		 * check if a target total can be achieved with given numbers
		 * @param {Array} [nums] - numbers available for countdown
		 * @param {int} [goal] - target result to be tested
		 *
		 * @return {boolean} [test result]
		 */
		function canCountDown(nums, goal) {
			let numPattern = permuteNumber(nums);
			let opPattern = combineOperator(nums.length - 1);
			return numPattern.some(pattern => opPattern.some(other => isValidExp(other, pattern, goal)));
		}
		/**
		 * check which target result within a given range 
		 * cannot be obtained by given numbers for countdown
		 * @param {Array} [nums] - numbers available for countdown
		 * @param {int} [start] - starting number 
		 * @param {int} [end] - ending number
		 *
		 * @return {Array} [all invalid numbers] 
		 */
		function findInvalidTarget(nums, start = 0, end = 1000) {
			let invalidNums = [];
			for(let i = start; i <= end; i++) {
				if(!canCountDown(nums, i)) {
					invalidNums.push(i);
				}
			}
			return invalidNums;
		}
		//challenge 1 input
		console.log(`%cChallenge 1 Input: `, "color : red;");
		let input = "50 8 3 7 2 10 makes 556";
		console.log(`%c${input} -> `, "color : orange;");
		countDown(input).forEach(result => {
			console.log(result);
		});
		input = "25 50 75 100 3 6 makes 952";
		console.log(`%c${input} -> `, "color : orange;");
		countDown(input).forEach(result => {
			console.log(result);
		});
		//challenge 3 solution
		console.log(`%cChallenge 3 Solution: `, "color : red;");
		console.log(`%cNumbers from 0 to 1000 that Cannot be Obtained -> `, "color : orange;");
		let time = new Date().getTime();
		//console.log(findInvalidTarget([25, 50, 75, 100, 3, 6]).join(" "));
		console.log(`Time Spent: %c${new Date().getTime() - time}ms`, "color : orange");
		console.log(isValidRPN("1 5 100 5 - * 9 - 10 + +", 477));
	});
})();		