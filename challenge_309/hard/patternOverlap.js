/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {	
		/**
		 * get all possible patterns for a single wild card
		 * @param int
		 *
		 * maxLength : maximum length of wild card replaced string
		 *
		 * returns array []
		 */
		function wildCardPattern(maxLength) {
			let patterns = [];
			for(let i = 0; i <= maxLength; i++) {
				patterns.push("*".repeat(i));
			}
			return patterns;
		} 
		/**
		 * get all possible combination of wild card patterns
		 * @param array [], array []
		 *
		 * patterns   : available patterns for each single wild card 
		 * curCombine : current combination
		 * 
		 * returns array []
		 */
		function wildCardCombine(patterns, curCombine = []) {
			if(curCombine.length == patterns.length) {
				return curCombine;
			}
			let permutation = [];
			for(let i = 0; i < patterns[curCombine.length].length; i++) {
				let result = wildCardCombine(patterns, [...curCombine, patterns[curCombine.length][i]]);
				if(Array.isArray(result) && curCombine.length != patterns.length - 1) {
					permutation.push(...result);
				} else {
					permutation.push(result);
				}
			}
			return permutation;
		} 
	});
})();			