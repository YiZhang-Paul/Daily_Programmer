/* jslint esversion: 6 */
(() => {
  document.addEventListener("DOMContentLoaded", () => {
  	/**
  	 * get all combination of numbers 
  	 * that add up to a given number
  	 * @param {int} [totalDigit] - total number of digits
  	 * @param {int} [goal] - target sum
  	 * @param {int} [curSum] - current sum
  	 * @param {Array} [curNum] - current numbers picked
  	 *
  	 * @return {Array} [all number combinations]
  	 */
  	function getNumCombine(totalDigit, goal = 69, curSum = 0, curNum = []) {
  		if(curNum.length == totalDigit && curSum == goal) {
  			return curNum;
  		}
  		let [digitLeft, sumLeft] = [totalDigit - curNum.length, goal - curSum];
  		if(curSum > goal || digitLeft * 9 < sumLeft || digitLeft > sumLeft) {
  			return null;
  		}
  		let combination = [];
  		for(let i = curNum[curNum.length - 1] || 0; i <= 9; i++) {
  			let result = getNumCombine(totalDigit, goal, curSum + i, [...curNum, i]);
  			if(result) {
	  			if(Array.isArray(result[0])) {
	  				combination.push(...result);
	  			} else if(result.length) {
	  				combination.push(result);
	  			}
  			}
  		}
  		return combination;
  	}
  });
})();  	