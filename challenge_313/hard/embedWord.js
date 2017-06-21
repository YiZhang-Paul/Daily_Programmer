/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
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
				let modifier = maxLength - word.length;
				for(let i = 0; i < word.length; i++) {
					wordArr[i + modifier] += word[i];
				}
			});
			return wordArr;
		} 
		/**
		 * remove duplicate letters
		 * @param array []
		 *
		 * combinedList : combined word list according to letter weights
		 *
		 * returns array []
		 */
		function removeDuplicate(combinedList) {
			return combinedList.map(block => Array.from(new Set(block.split(""))).join(""));
		} 
		//default input
		let input = ["one", "two", "three", "four", "five"];
		let embedWord = removeDuplicate(combineWords(input)).join("");
		console.log(embedWord, embedWord.length);
	});
})();		