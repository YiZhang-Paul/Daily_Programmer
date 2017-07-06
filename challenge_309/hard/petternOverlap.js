/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {	
		/**
		 * check if words can match beginning
		 * @param String, String
		 * 
		 * word1 : word 1
		 * word2 : word 2
		 *
		 * returns boolean 
		 */
		function canMatchBegin(word1, word2) {
			let toCompare = Math.min(word1.indexOf("*"), word2.indexOf("*"));
			return word1.slice(0, toCompare) == word2.slice(0, toCompare);
		} 
		/**
		 * check if words can match ends
		 * @param String, String 
		 * 
		 * word1 : word 1
		 * word2 : word 2
		 *
		 * returns boolean 
		 */ 
		function canMatchEnd(word1, word2) {
			let toCompare = Math.max(word1.lastIndexOf("*"), word2.lastIndexOf("*"));
			return word1.slice(toCompare + 1) == word2.slice(toCompare + 1);
		}
		/**
		 * get total number of wild cards
		 * @param String
		 *
		 * word : word to be checked
		 *
		 * returns int
		 */
		function totalWildCard(word) {
			return word.split("").filter(char => char == "*").length;
		} 
		/**
		 * check if words can match length
		 * @param String, String 
		 * 
		 * word1 : word 1
		 * word2 : word 2
		 *
		 * returns boolean 
		 */
		function canMatchLength(word1, word2) {
			if(word1.length == word2.length) {
				return true;
			}
			let shorter = word1.length > word2.length ? word2 : word1;
			let longer = shorter == word1 ? word2 : word1;
			return shorter.length + totalWildCard(shorter) * 3 >= longer.length - totalWildCard(longer);
		} 
	});
})();			