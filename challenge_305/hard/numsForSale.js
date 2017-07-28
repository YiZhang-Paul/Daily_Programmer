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
  	function getNumCombine(totalDigit, goal, curSum = 0, curNum = []) {
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
  	/**
  	 * get factorial of a number
  	 * @param {int} [base] - base number
  	 *
  	 * @return {int} [factorial]
  	 */
  	function factorial(base) {
  		return base == 1 ? base : base * factorial(base - 1);
  	}
  	/**
  	 * get total number of distinct numbers 
  	 * that can be formed by a set of digits
  	 * @param {Array} [set] - digit set
  	 *
  	 * @return {int} [total number of distinct numbers]
  	 */
  	function countDistinct(set) {
  		let digitCount = set.reduce((acc, val) => {
  			acc[val] = acc[val] ? acc[val] + 1 : 1;
  			return acc;
  		}, {});
  		let total = (set.length - (digitCount[0] || 0)) * factorial(set.length - 1);
  		for(let digit in digitCount) {
  			if(digitCount[digit] > 1) {
  				total /= factorial(digitCount[digit]);
  			}
  		}
  		return total;
  	}
		/**
		 * get total number of all distinct numbers 
		 * of a given length whose digits add up to a given number
		 * @param {int} [len] - number of digits
		 * @param {int} [goal] - desired sum of all digits
		 *
		 * @return {[type]} [description]
		 */
		function allDistinctNum(len, goal = 69) {
      let distinctByLen = combination => combination.reduce((acc, val) => acc + countDistinct(val), 0);
			let distinct = 0;
			for(let i = 1; i <= len; i++) {
				let allNum = getNumCombine(i, goal);
				distinct += allNum ? distinctByLen(allNum) : 0;				
			}
			return distinct;
		}
    //challenge solution
    let time = new Date().getTime();
		console.log(`Total Number of Possible Values: %c${allDistinctNum(15)}`, "color : orange;");
    console.log(`Time Spent: %c${new Date().getTime() - time}ms`, "color : red;");
  });
})();