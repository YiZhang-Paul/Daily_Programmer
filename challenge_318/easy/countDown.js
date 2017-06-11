/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * count down class
		 * @param array [], array []
		 *
		 * numList      : list of all number inputs and target result
		 * operatorList : list of all available operators
		 */
		class CountDown {
			constructor(numList, operatorList) {
				this.numList = numList.splice(" ");
				this.operatorList = operatorList; 
				this.totalOperators = this.numList.length - 2;
				this.numPattern = this.permuteNumber(); 
				this.operatorPattern = this.permuteOperator();
			}
			/**
			 * generate all possible permutation of operators
			 * @param String
			 *
			 * curPattern : current operator pattern
			 *
			 * returns array []
			 */
			permuteOperator(curPattern = "") {
				if(curPattern.length == this.totalOperators) {
					return curPattern;
				}
				let permutation = [];
				for(let i = 0; i < this.operatorList.length; i++) {
					let result = this.permuteOperator(curPattern + this.operatorList[i]);
					if(Array.isArray(result)) {
						permutation.push(...result);	
					} else {
						permutation.push(result);	
					}
				}
				return permutation;
			} 
			/**
			 * generate all possible permutation of numbers
			 * @param array [], array []
			 *
			 * allNums    : all available numbers
			 * curPattern : current number pattern
			 *
			 * returns array []
			 */
			permuteNumber(allNums = this.numList.slice(0, this.numList.length - 1), curPattern = []) {
				if(curPattern.length == this.numList.length - 1) {
					return curPattern;
				}
				let permutation = [];
				for(let i = 0; i < allNums.length; i++) {
					let curNum = allNums[i];
					let otherNums = [...allNums.slice(0, i), ...allNums.slice(i + 1)];
					let result = this.permuteNumber(otherNums, [...curPattern, curNum]);
					if(!Array.isArray(result[0])) {
						permutation.push(result);	
					} else {
						permutation.push(...result);	
					}
				}
				return permutation;
			} 
			/**
			 * calculate result base on operator
			 * @param float, float, String
			 *
			 * num1     : first number  
			 * num2     : second number
			 * operator : operator to be used
			 *
			 * returns float 
			 */
			calculateResult(num1, num2, operator) {
				let result = 0;
				switch(operator) {
					case "+" :
						result = num1 + num2;
						break;
					case "-" :
						result = num1 - num2;
						break;
					case "*" :
						result = num1 * num2;
						break;
					case "/" :
						result = num1 / num2;
						break;
				}
				return result;
			} 
			/**
			 * calculate result for entire list
			 * @param array [],String
			 *
			 * numPattern      : number patterns to be applied
			 * operatorPattern : operator patterns to be applied
			 *
			 * returns float
			 */
			getListResult(numPattern, operatorPattern) {
				return numPattern.slice().reduce((acc, val, index) =>
					this.calculateResult(acc, val, operatorPattern[index - 1]));
			} 
			/**
			 * get all valid count down
			 *
			 * returns array []
			 */
			getCountDown() {
				let validCountDowns = [];
				this.numPattern.forEach(numPattern => {
					let validPatterns = this.operatorPattern.slice().filter(opPattern => 
						this.getListResult(numPattern, opPattern) == this.numList[this.numList.length - 1]);
					if(validPatterns.length) {
						validCountDowns.push([numPattern, ...validPatterns]);
					}
				});
				return validCountDowns;
			}
			/**
			 * display count downs
			 */
			displayCountDown() {
				let validCountDown = this.getCountDown();
				validCountDown.forEach(countDown => {
					//console.log(operators);
					let finalResult = countDown[0].reduce((acc, val, index) => {
						return acc + ` ${countDown[1][index - 1]} ` + val;
					});
					console.log(`${finalResult} = ${this.numList[this.numList.length - 1]}`);
				});
			}
		} 
		//default input
		let operatorList = ["+", "-", "*", "/"];
		let numList = [1, 3, 7, 6, 8, 3, 250];
		let countDown = new CountDown(numList, operatorList);
		countDown.displayCountDown();
	});
})();