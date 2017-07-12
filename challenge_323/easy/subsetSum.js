/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
	  /**
	   * change a group of numbers into 
	   * a string in ascending order
	   * @param array []
	   * 
	   * numbers : numbers to be converted
	   *
	   * returns String
	   */ 
	  function numToAscStr(numbers) {
	  	return numbers.sort((a, b) => a - b).join("");
	  } 
		/**
		 * find subset that sums up to 0
		 * @param array []
		 *
		 * numbers : list of all numbers
		 * 
		 * returns array []
		 */
		function subsetZero(numbers) {
			let [subsets, seen, ascNums] = [[], new Set(), numbers.sort((a, b) => a - b)];
			for(let i = 0; i < ascNums.length - 2; i++) {
				for(let j = i + 1; j < ascNums.length - 1; j++) {
					let sum2 = ascNums[i] + ascNums[j];
					for(let k = ascNums.length - 1; k >= j + 1; k--) {
						if((sum2 < 0 && ascNums[k] <= 0) || sum2 > 0) {
							break;
						}
						let set = numToAscStr([ascNums[i], ascNums[j], ascNums[k]]);
						if(!seen.has(set) && sum2 + ascNums[k] === 0) {
							seen.add(set);
							subsets.push([ascNums[i], ascNums[j], ascNums[k]]);
						}
					}
				}
			}
			return subsets;
		} 
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = [9, -6, -5, 9, 8, 3, -4, 8, 1, 7, -4, 9, -9, 1, 9, -9, 9, 4, -6, -8];
		console.log(`%c${input} ->`, "color : yellow;");
		subsetZero(input).forEach(row => {
			console.log(row.join(" "));
		});
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
    input = [4, 5, -1, -2, -7, 2, -5, -3, -7, -3, 1];
		console.log(`%c${input} ->`, "color : yellow;");
		subsetZero(input).forEach(row => {
			console.log(row.join(" "));
		});
    input = [-1, -6, -3, -7, 5, -8, 2, -8, 1];
		console.log(`%c${input} ->`, "color : yellow;");
		subsetZero(input).forEach(row => {
			console.log(row.join(" "));
		});
    input = [-5, -1, -4, 2, 9, -9, -6, -1, -7];
		console.log(`%c${input} ->`, "color : yellow;");
		subsetZero(input).forEach(row => {
			console.log(row.join(" "));
		});
	});
})();			