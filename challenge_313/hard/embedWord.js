/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * remove duplicate letters
		 * @param array []
		 *
		 * combinedList : combined word list according to letter weights
		 *
		 * returns String
		 */
		function removeDuplicate(combinedList) {
			return combinedList.map(block => Array.from(new Set(block.split(""))).join("")).join("");
		} 
		/**
		 * combine all words according to 
		 * weights of each letter
		 * @param array []
		 *
		 * wordList : list of all words
		 *
		 * returns array []
		 */
		function combineWords(wordList) {
			let maxLength = Math.max(...wordList.map(word => word.length));
			let wordArr = new Array(maxLength).fill("");
			wordList.forEach(word => {
				for(let modifier = maxLength - word.length, i = 0; i < word.length; i++) {
					wordArr[i + modifier] += word[i];
				}
			});
			return removeDuplicate(wordArr);
		} 
		/**
		 * test letter used to form all words
		 * @param array [], String
		 *
		 * wordList : list of all words
		 * letters  : string of combined letters
		 *
		 * returns String
		 */
		function letterUsed(wordList, letters) {
			let usedFlags = new Array(letters.length).fill(0);
			wordList.forEach(word => {
				for(let start = 0, i = 0; i < word.length; i++) {
					start = letters.indexOf(word[i], start);
					usedFlags[start]++;
				}
			});
			return letters.split("").reduce((acc, val, index) => acc + (usedFlags[index] ? val : "")); 
		} 
		/**
		 * embed word
		 * @param array []
		 *
		 * wordList : list of all words
		 *
		 * returns String
		 */
		function embedWord(wordList) {
			return letterUsed(input, combineWords(input));
		} 
		//default input
		let input = ["one", "two", "three", "four", "five"];
		let embedded = embedWord(input);
		console.log(embedded, embedded.length);
	});
})();		