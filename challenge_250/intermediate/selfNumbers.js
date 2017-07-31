/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * get all number combinations that add up to a given value
		 * @param {int} [len] - total number of digits in combination
		 * @param {int} [all0s] - total number of zeros seen so far
		 * @param {int} [all1s] - total number of ones seen so far
		 * @param {int} [curSum] - current total of selected numbers
		 * @param {Array} [curNum] - current number selection
		 *
		 * @return {Array} [all number combinations]
		 */
		function getNumCombine(len, all0s = 0, all1s = 0, curSum = 0, curNum = []) {
			if(curNum.length == len && curSum == len) {
				console.log(all0s, all1s, curNum);
				return curNum.find(num => num == all0s) && curNum.find(num => num == all1s) ? curNum : null;
			}
			if(curSum > len || curSum + (len - curNum.length) * 9 < len) {
				return null;
			}
			let selection = [];
			for(let i = curNum[curNum.length - 1] || 0; i <= 9; i++) {
				let result = getNumCombine(len, all0s + (i === 0 ? 1 : 0), all1s + (i == 1 ? 1 : 0), curSum + i, [...curNum, i]);
				if(result && result.length) {
					if(Array.isArray(result[0])) {
						selection.push(...result);
					} else {
						selection.push(result);
					}
				}
			}
			return selection;
		}
		let time = new Date().getTime();
		console.log(getNumCombine(10));
		console.log(new Date().getTime() - time + "ms");
	});
})();		