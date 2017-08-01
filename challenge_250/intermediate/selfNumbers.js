/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * check if a number exists inside of an array
		 * @param {int} [number] - number to be checked
		 * @param {Array} [array] - array to be checked against
		 *
		 * @return {boolean} [test result]
		 */
		function hasNumber(number, array) {
			return array.lastIndexOf(number) != -1;
		}
		/**
		 * count total number of a given digit in an array
		 * @param {int} [digit] - digit to be checked 
		 * @param {Array} [array] - array to be checked against
		 *
		 * @return {int} [total number of digit in the array]
		 */
		function countDigit(digit, array) {
			return array.filter(number => number == digit).length;
		}
		/**
		 * count occurrence of all each digit in an array
		 * @param {Array} [array] - array containing all digits
		 *
		 * @return {Object} [digit counts]
		 */
		function countAllDigits(array) {
			return Array.from(new Set(array)).reduce((acc, val) => {
				let curCount = countDigit(val, array);
				acc[val] = {total : curCount, remain : curCount};
				return acc;
			}, {});
		}
		/**
		 * find all combination of numbers that add up to a given value
		 * @param {int} [digits] - total number of digits to be selected
		 * @param {int} [curSum] - current sum of all digits
		 * @param {Array} [curSelect] - current digits selection
		 *
		 * @return {Array} [all number combinations]
		 */
		function getNumCombine(digits, curSum = 0, curSelect = []) {
			if(curSum == digits && curSelect.length == digits) {
				let [zeros, ones] = [countDigit(0, curSelect), countDigit(0, curSelect)];
				return hasNumber(zeros, curSelect) && hasNumber(ones, curSelect) ? curSelect.reverse() : null;
			}
			if(curSum > digits || curSum + (digits - curSelect.length) * 9 < digits) {
				return null;
			}
			let combinations = [], lastDigit = curSelect[curSelect.length - 1];
			for(let i = lastDigit === undefined ? 0 : lastDigit; i <= 9; i++) {
				let result = getNumCombine(digits, curSum + i, [...curSelect, i]);
				if(result && result.length) {
					if(Array.isArray(result[0])) {
						combinations.push(...result);
					} else {
						combinations.push(result);
					}
				}
			}
			return combinations;
		}
		/**
		 * construct self-descriptive number using given set of digits
		 * @param {Array} [digits] - all available digits
		 *
		 * @return {int} [valid self-descriptive number]
		 */
		function makeSelfDesNumber(digits) {
			let number = "";
			for(let i = 0, counts = countAllDigits(digits); i < digits.length; i++) {
				let curDigit = counts[i] ? counts[i].total : 0;
				if(!counts[curDigit] || !counts[curDigit].remain) {
					return null;
				}
				counts[curDigit].remain--;
				number += curDigit;
			}
			return Number(number);
		}
		/**	
		 * find all self-descriptive numbers in a given range
		 * @param {int} [length] - total digits in the numbers
		 *
		 * @return {Array} [all valid self-descriptive numbers in range]
		 */
		function findSelfDesNumber(length) {
			let digitSets = getNumCombine(length);
			if(!digitSets.length) {
				return ["No Self-descriptive Number Found."];
			}
			let numbers = digitSets.map(set => makeSelfDesNumber(set)).filter(number => number);
			return numbers.length ? numbers : ["No Self-descriptive Number Found."];
		}
		//challenge & bonus input
		console.log(`%cChallenge & Bonus Input: `, "color : red;");
		for(let i = 1; i <= 15; i++) {
			let time = new Date().getTime();
			console.log(`%c${i} -> `, "color : orange;");
			let result = findSelfDesNumber(i);
			for(let j = 0; j < result.length; j++) {
				console.log(result[j]);
			}
			console.log(`Time Spent: %c${new Date().getTime() - time}ms`, "color : orange;");
		}
	});
})();		