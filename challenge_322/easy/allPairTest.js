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
		//challenge input
		let input = [['0', '1'], ['A', 'B', 'C'], ['D', 'E', 'F', 'G']];
		console.log(permuteInput(input));
		input = [['0', '1', '2', '3'], ['A', 'B', 'C', 'D'], ['E', 'F', 'G', 'H', 'I']];
		input = [['0', '1', '2', '3', '4'], ['A', 'B', 'C', 'D', 'E'], ['F', 'G', 'H', 'I'], ['J', 'K', 'L']];
	});
})();			