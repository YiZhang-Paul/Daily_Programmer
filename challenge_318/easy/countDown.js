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
				console.log(this.calculateResult());
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
			 * calculate result
			 */
			calculateResult() {
				let operatorPattern = this.permuteOperator();
				console.log(operatorPattern);
			} 
		} 
		//default input
		let operatorList = ["+", "-", "*", "/"];
		let numList = [1, 3, 7, 6, 8, 3, 250];
		let countDown = new CountDown(numList, operatorList);
	});
})();