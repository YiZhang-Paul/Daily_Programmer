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
				this.targetNum = this.numList[this.numList.length - 1]; 
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
				if(curPattern.length == this.numList.length - 2) {
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
			permuteNumber(allNums = this.numList.slice(0, -1), curPattern = []) {
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
			 * @param array [], String
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
				let numPatterns = this.permuteNumber();
				let opPatterns = this.permuteOperator();
				numPatterns.forEach(numPattern => {
					let validOpPatterns = opPatterns.slice().filter(opPattern => 
						this.getListResult(numPattern, opPattern) == this.targetNum);
					if(validOpPatterns.length) {
						validOpPatterns.forEach(pattern => {
							let result = numPattern.slice().reduce((acc, val, index) =>
								acc + ` ${pattern[index - 1]} ` + val);
							validCountDowns.push(`${result} = ${this.targetNum}`);
						});
					}
				});
				return new Set(validCountDowns);
			}
			/**
			 * display count downs
			 */
			displayCountDown() {
				console.log(`Numbers: ${this.numList}`);
				this.getCountDown().forEach(countDown => console.log(countDown));
			}
		} 
		//default input
		let operatorList = ["+", "-", "*", "/"];
		let numList = [1, 3, 7, 6, 8, 3, 250];
		let countDown = new CountDown(numList, operatorList);
		countDown.displayCountDown();
		//challenge input
		numList = [25, 100, 9, 7, 3, 7, 881];
		countDown = new CountDown(numList, operatorList);
		countDown.displayCountDown();
		numList = [6, 75, 3, 25, 50, 100, 952];
		countDown = new CountDown(numList, operatorList);
		countDown.displayCountDown();
	});
})();