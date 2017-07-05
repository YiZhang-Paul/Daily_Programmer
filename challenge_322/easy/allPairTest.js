/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * get permutation of all inputs
		 * @param array [], String
		 *
		 * input      : input sets
		 * curPattern : current pattern
		 *
		 * returns array [] 
		 */	
		function permuteInput(input, curPattern = "") {
			if(curPattern.length == input.length) {
				return curPattern;
			}
			let permutation = [];
			for(let i = 0; i < input[curPattern.length].length; i++) {
				let result = permuteInput(input, curPattern + input[curPattern.length][i]);
				if(Array.isArray(result)) {
					permutation.push(...result);
				} else {
					permutation.push(result);
				}
			}
			return permutation;
		}
		/**
		 * get permutation of testing pairs 
		 * for every input set
		 * @param String 
		 *
		 * set     : input set
		 * curPair : current pair
		 * 
		 * returns array [] 
		 */
		function permutePairs(set, curPair = "") {
			if(curPair.length == 2) {
				return curPair;
			}
			let permutation = [];
			for(let i = 0; i < set.length; i++) {
				let result = permutePairs(set.slice(i + 1), curPair + set[i]);
				if(Array.isArray(result)) {
					permutation.push(...result);
				} else {
					permutation.push(result);
				}
			}
			return permutation;
		} 
		/**
		 * generate all testing pairs
		 * @param array []
		 *
		 * input : input sets
		 *
		 * returns array [] 
		 */
		function getTestPairs(input) {
			let allInput = permuteInput(input);
			console.log(allInput);
		} 
		//challenge input
		let input = [['0', '1'], ['A', 'B', 'C'], ['D', 'E', 'F', 'G']];
		console.log(getTestPairs(input));
		input = [['0', '1', '2', '3'], ['A', 'B', 'C', 'D'], ['E', 'F', 'G', 'H', 'I']];
		console.log(getTestPairs(input));
		input = [['0', '1', '2', '3', '4'], ['A', 'B', 'C', 'D', 'E'], ['F', 'G', 'H', 'I'], ['J', 'K', 'L']];
		console.log(getTestPairs(input));
	});
})();			