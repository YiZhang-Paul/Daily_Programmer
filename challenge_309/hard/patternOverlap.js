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
		/**
		 * check if two word patterns overlaps
		 * @param String, String
		 *
		 * pattern1 : word pattern 1
		 * pattern2 : word pattern 2
		 * 
		 * returns boolean
		 */
		function patternOverlap(pattern1, pattern2) {
			if(pattern1 == pattern2) {
				return true;
			}
			return pattern1.split("").every((char, index) => 
				char == "*" || pattern2[index] == "*" || char == pattern2[index]);
		} 
		/**
		 * check pattern overlap
		 * @param String, String
		 *
		 * word1 : word 1  
		 * word2 : word 2
		 *
		 * returns boolean
		 */
		function checkOverlap(word1, word2) {
			let word1Pattern = wordPattern(word1); 
			let word2Pattern = wordPattern(word2);
			console.log(word1Pattern, word2Pattern); 
		}
		console.log(checkOverlap("a*baa**ba**aa", "*ca*b**a*baaa"));
	});
})();			