/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		//solution 1 
		/**
		 * get all permutations of given numbers
		 * @param array [], int, String
		 *
		 * numList    : list of all numbers
		 * length     : total length of result string
		 * curPattern : current number pattern
		 *
		 * returns array []
		 */
		function permuteNum(numList, length, curPattern = "") {
			if(curPattern.length == length) {
				return curPattern;
			}
			let permutation = [];
			for(let i = 0; i < numList.length; i++) {
				let curNum = numList[i];
				let otherNum = [...numList.slice(0, i), ...numList.slice(i + 1)];
				let result = permuteNum(otherNum, length, curPattern + curNum);
				if(Array.isArray(result)) {
					permutation.push(...result);
				} else {
					permutation.push(result);
				}
			}
			return permutation;
		} 
		/**
		 * find the lowest and largest number
		 * @param array []
		 *
		 * numList : list of all numbers
		 * 
		 * returns array []
		 */ 
		function findLowAndHigh(numList) {
			//find all permutations and sort from lowest to highest
			let numPattern = permuteNum(numList, numList.join("").length).sort((a, b) => +a - +b);
			return [numPattern[0], numPattern[numPattern.length - 1]];
		} 
		//default input 
		let input = ["5", "56", "50"];
		let [low, high] = findLowAndHigh(input);
		console.log(+low, +high);
		//challenge input
		input = ["79", "82", "34", "83", "69"];
		[low, high] = findLowAndHigh(input);
		console.log(+low, +high);
		input = ["420", "34", "19", "71", "341"];
		[low, high] = findLowAndHigh(input);
		console.log(+low, +high);
		input = ["17", "32", "91", "7", "46"];
		[low, high] = findLowAndHigh(input);
		console.log(+low, +high);
	});
})();