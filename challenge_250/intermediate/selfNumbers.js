/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * check if a number exists inside of an array from backward
		 * @param {int} [number] - number to be checked
		 * @param {Array} [arr] - array to be checked against
		 *
		 * @return {boolean} [test result]
		 */
		function hasNum(number, arr) {
			return arr.lastIndexOf(number) != -1;
		}
		/**
		 * count total number of a given digit in an array
		 * @param {int} [digit] - digit to be checked
		 * @param {Array} [allNum] - all numbers 
		 *
		 * @return {int} [total number of digits]
		 */
		function countDigit(digit, allNum) {
			return allNum.filter(number => number == digit).length;
		}
		/**
		 * find all combination of numbers that add up to a given value
		 * @param {int} [digits] - total number of digits
		 * @param {int} [curSum] - current sum of all digits
		 * @param {Array} [curNum] - current number selections
		 *
		 * @return {Array} [all number combinations]
		 */
		function getNumCombine(digits, curSum = 0, curNum = []) {
			if(curNum.length == digits && curSum == digits) {
				let [zeros, ones] = [countDigit(0, curNum), countDigit(1, curNum)];
				return hasNum(zeros, curNum) && hasNum(ones, curNum) ? curNum.reverse() : null;
			}
			if(curSum > digits || curSum + (digits - curNum.length) * 9 < digits) {
				return null;
			}
			let selections = [], lastNum = curNum[curNum.length - 1];
			for(let i = lastNum === undefined ? 0 : lastNum; i <= 9; i++) {
				let result = getNumCombine(digits, curSum + i, [...curNum, i]);
				if(result && result.length) {
					if(Array.isArray(result[0])) {
						selections.push(...result);
					} else {
						selections.push(result);
					}
				}
			}
			return selections;
		}
		console.log(getNumCombine(4));
		console.log(getNumCombine(10));
		console.log(getNumCombine(15));
	});
})();		