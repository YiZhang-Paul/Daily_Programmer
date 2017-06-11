/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		//solution one
		/**
		 * get permutations of numbers
		 * @param array [], int, String
		 * 
		 * numList    : list of all numbers
		 * length     : total number of all numbers
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
		 * find next largest integer
		 * @param int
		 *
		 * integer : integer to be used
		 *
		 * returns int
		 */
		function getNextLargeInt(integer) {
			//get all number permutations
			let integerArr = integer.toString().split("");
			let numPatterns = permuteNum(integerArr, integerArr.length).sort((a, b) => +a - +b);
			//find current integer and determine next larger integer
			let curIndex = numPatterns.indexOf(integer.toString());
			while(numPatterns[curIndex + 1] && +numPatterns[curIndex + 1] == integer) {
				curIndex++;
			}
			return numPatterns[curIndex + 1] ? numPatterns[curIndex + 1] : numPatterns[curIndex];
		} 
		//default input
		console.log(getNextLargeInt(292761));
		//challenge input
		console.log(getNextLargeInt(1234));
		console.log(getNextLargeInt(1243));
		console.log(getNextLargeInt(234765));
		console.log(getNextLargeInt(19000));
	});
})();