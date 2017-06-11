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
		 * through permutation
		 * @param int
		 *
		 * integer : integer to be used
		 *
		 * returns int
		 */
		function getNextLargeInt1(integer) {
			//get all number permutations
			let integerArr = integer.toString().split("");
			let numPatterns = permuteNum(integerArr, integerArr.length).sort((a, b) => +a - +b);
			//find current integer and determine next larger integer
			let curIndex = numPatterns.indexOf(integer.toString());
			while(numPatterns[curIndex + 1] && +numPatterns[curIndex + 1] == integer) {
				curIndex++;
			}
			return numPatterns[curIndex + 1] ? +numPatterns[curIndex + 1] : +numPatterns[curIndex];
		} 
		//default input
		console.log(getNextLargeInt1(292761));
		//challenge input
		console.log(getNextLargeInt1(1234));
		console.log(getNextLargeInt1(1243));
		console.log(getNextLargeInt1(234765));
		console.log(getNextLargeInt1(19000));
		//solution 2
		/**
		 * find next largest integer
		 * through swaping digits
		 * @param int
		 *
		 * integer : integer to be used
		 *
		 * returns int
		 */
		function getNextLargeInt2(integer) {
			let curInt = integer.toString().split("");
			//find swaping point
			let swapIndex = 0;
			for(let i = curInt.length - 1; i >= 0; i--) {
				if(!i || curInt[i] > curInt[i - 1]) {
					swapIndex = !i ? i : i - 1;
					break;
				}
			}
			let trailingNum = curInt.slice(swapIndex + 1);
			//find number to be swapped and number used for the swap
			let toBeSwapped = curInt[swapIndex];
			let usedToSwap = Math.min(...trailingNum.filter(digit => digit > toBeSwapped)); 
			trailingNum.push(toBeSwapped);
			trailingNum.splice(trailingNum.indexOf(usedToSwap.toString()), 1);
			return usedToSwap ? +[...curInt.slice(0, swapIndex), usedToSwap, ...trailingNum.sort()].join("") : integer;
		}
		//default input
		console.log(getNextLargeInt2(292761));
		//challenge input
		console.log(getNextLargeInt2(1234));
		console.log(getNextLargeInt2(1243));
		console.log(getNextLargeInt2(234765));
		console.log(getNextLargeInt2(19000));
	});
})();