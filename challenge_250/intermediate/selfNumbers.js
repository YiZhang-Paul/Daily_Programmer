/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * check if a number is self-descriptive
		 * @param {int} [number] - number to be checked
		 *
		 * @return {boolean} [test result]
		 */
		function isSelfDescribe(number) {
			let digits = String(number).split("").map(num => Number(num));
			let targetCount = digits.reduce((acc, val, index) => {
				acc[index] = val;
				return acc;
			}, {}); 
			let realCount = digits.reduce((acc, val) => {
				acc[val] = acc[val] ? acc[val] + 1 : 1;
				return acc;
			}, {});
			for(let digit in targetCount) {
				if(targetCount[digit] && targetCount[digit] != realCount[digit]) {
					return false;
				}
			}
			return true;
		}
		/**
		 * find all self-descriptive numbers with a given range
		 * @param {int} [len] - total number of digits
		 *
		 * @return {Array} [all self-descriptive numbers]
		 */
		function findSelfDescribe(len) {
			let [start, end] = [Math.pow(10, len - 1), Math.pow(10, len) - 1];
			let describes = [];
			for(let i = start; i <= end; i++) {
				if(isSelfDescribe(i)) {
					describes.push(i);
				}
			}
			return describes.length ? describes : "No Self-descriptive Number Found.";
		}
		console.log(findSelfDescribe(3));
		console.log(findSelfDescribe(4));
	});
})();		