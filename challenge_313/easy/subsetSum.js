/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * check if a given list contains 0 
		 * or two integers that add up to 0
		 * @Param array []
		 *
		 * numList : list of all numbers
		 *
		 * returns boolean
		 */
		function checkZeroSum(numList) {
			//change every thing into positive and put into a set
			let set = new Set(numList.map(num => Math.abs(num)));
			return set.size != numList.length || set.has(0);
		}
		/**
		 * check if exists a subset that add up to 0
		 * @param array []
		 * 
		 * numList : list of all numbers
		 *
		 * returns boolean
		 */
		function checkZeroSumSubset(numList) {
			if(numList[0] > 0) {
				return false;
			} else if(numList[0] === 0) {
				return true;
			}
			let startIndex = 0, curIndex = startIndex, sum = 0;
			while(startIndex < numList.length) {
				while(curIndex < numList.length) {
					sum += numList[curIndex];
					if(sum > 0) {
						return false;
					}
					let expectedNum = -sum;
					if(numList[curIndex + 1] == expectedNum) {
						return true;
					}
					curIndex++;
				}
				curIndex = ++startIndex;
			}
		} 
		//base challenge input
		let input = [1, 2, 3];
		console.log(`[${input}] -> ${checkZeroSum(input)}`);
		input = [-5, -3, -1, 2, 4, 6];
		console.log(`[${input}] -> ${checkZeroSum(input)}`);
		input = [];
		console.log(`[${input}] -> ${checkZeroSum(input)}`);
		input = [-1, 1];
		console.log(`[${input}] -> ${checkZeroSum(input)}`);
		input = [-97364, -71561, -69336, 19675, 71561, 97863];
		console.log(`[${input}] -> ${checkZeroSum(input)}`);
		input = [-53974, -39140, -36561, -23935, -15680, 0];
		console.log(`[${input}] -> ${checkZeroSum(input)}`);
		//bonus challenge input
		input = [0];
		console.log(`[${input}] -> ${checkZeroSumSubset(input)}`);
		input = [-3, 1, 2];
		console.log(`[${input}] -> ${checkZeroSumSubset(input)}`);
		input = [-98634, -86888, -48841, -40483, 2612, 9225, 17848, 71967, 84319, 88875];
		console.log(`[${input}] -> ${checkZeroSumSubset(input)}`);
	});
})();