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
		class CounteDown {
			constructor(numList, operatorList) {
				this.numList = numList.splice(" ");
				this.operatorList = operatorList; 
				this.totalOperators = this.numList.length - 2;
			}
			/**
			 * generate all possible permutation of operators
			 */
			permuteOperator() {
				
			} 
		} 
	});
})();