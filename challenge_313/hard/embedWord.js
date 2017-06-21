/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * merge two words
		 * @param String, String
		 *
		 * word1 : word 1 (usually a longer word)
		 * word2 : word 2
		 *
		 * returns String
		 */		
		function merge(word1, word2) {
			let merged = word1.length > word2.length ? word1 : word2;
			let toMerge = merged == word1 ? word2 : word1;
			let start = 0;
			while(toMerge.length) {
				for(let i = 0; i < toMerge.length; i++) {
					let index = merged.indexOf(toMerge[i], start);
					if(index == -1) {
						if(i != toMerge.length - 1) {
							continue;						
						} else {
							merged += toMerge;
							break;
						}
					} else {
						start = index + 1;
						merged = merged.slice(0, index) + toMerge.slice(0, i) + merged.slice(index);
						toMerge = toMerge.slice(i + 1);
						break;
					}
				}
			}
			return merged;
		} 
		//default input
		let input = ["one", "two", "three", "four", "five"];
	});
})();		