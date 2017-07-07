/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {	
		/**
		 * get total number of wild cards in a word
		 * @param String
		 *
		 * word : word to be checked
		 *
		 * returns int
		 */ 
		function totalWC(word) {
			return word.split("").filter(char => char == "*").length;
		} 
		/**
		 * get all possible patterns for a single wild card
		 * @param int
		 *
		 * maxLength : maximum length of wild card replaced string
		 *
		 * returns array []
		 */
		function wcPattern(maxLength) {
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
		function wcCombine(patterns, curCombine = []) {
			if(curCombine.length == patterns.length) {
				return curCombine;
			}
			let permutation = [];
			for(let i = 0; i < patterns[curCombine.length].length; i++) {
				let result = wcCombine(patterns, [...curCombine, patterns[curCombine.length][i]]);
				if(Array.isArray(result) && curCombine.length != patterns.length - 1) {
					permutation.push(...result);
				} else {
					permutation.push(result);
				}
			}
			return permutation;
		} 
		/**
		 * get all possible patterns for a word
		 * @param String
		 *
		 * word : word to be checked
		 *
		 * returns array []
		 */
		function wordPattern(word) {
			let wcCombined = wcCombine(new Array(totalWC(word)).fill(wcPattern(4)));
			return wcCombined.map(combine => {
				let chars = word.split("*");
				for(let i = 1, j = 0; i < chars.length; i += 2) {
					chars.splice(i, 0, combine[j++]);
				}
				return chars.join("");
			});
		} 
	});
})();			