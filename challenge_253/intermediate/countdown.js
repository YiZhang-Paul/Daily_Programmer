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
		 * evaluate expression and check if results equals target
		 * @param {String} [opPattern] - operator pattern
		 * @param {Array} [numPattern] - number pattern
		 * @param {int} [goal] - target result
		 *
		 * @return {boolean} [test result]
		 */
		function isValidExp(opPattern, numPattern, goal) {
			opPattern = opPattern.split("");
			return numPattern.reduce((acc, val, index) => {
				switch(opPattern[index - 1]) {
					case "+" : case "-" :
						acc += +(opPattern[index - 1] + val); 
						break;
					case "*" :
						acc *= val;
						break;
					case "/" :
						acc /= val;
						break;
				}
				return acc;
			}) == goal;
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
	});
})();		