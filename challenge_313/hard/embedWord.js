/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * count minimum number needed for a letter
		 * @param array []
		 *
		 * wordList : list of all words
		 *
		 * returns obj {} 
		 */
		function minLetter(wordList) {
			let allCounts = {};
			wordList.forEach(word => {
				let count = {};
				for(let i = 0; i < word.length; i++) {
					count[word[i]] = count[word[i]] ? count[word[i]] + 1 : 1;
				}
				for(let letter in count) {
					if(!allCounts[letter]) allCounts[letter] = count[letter];
					else allCounts[letter] = count[letter] > allCounts[letter] ? count[letter] : allCounts[letter];
				}
			});
			return allCounts;
		}
		/**
		 * combine all words according to 
		 * weights of each letter
		 * @param array []
		 *
		 * wordList : list of all words
		 *
		 * returns String
		 */
		function combineWords(wordList) {
			let maxLength = Math.max(...wordList.map(word => word.length));
			let wordArr = new Array(maxLength).fill("");
			wordList.forEach(word => {
				let modifier = maxLength - word.length;
				for(let i = 0; i < word.length; i++) {
					wordArr[i + modifier] += word[i];
				}
			});
			console.log(wordArr);
		} 
		//default input
		let input = ["one", "two", "three", "four", "five"];
		console.log(combineWords(input));
	});
})();		