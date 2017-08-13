/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * calculate total occurrence of a letter in all words
		 * @param {char} [letter] - letter to be checked
		 * @param {Array} [words] - all words
		 *
		 * @return {int} [total occurrence of the letter]
		 */
		function getOccurrence(letter, words) {
			return words.reduce((total, word) => 
				total + word.split("").filter(char => char == letter).length, 0);
		}
		/**
		 * get letter with maximum occurrence in all words
		 * @param {Array} [words] - all words
		 *
		 * @return {char} [letter with maximum occurrence]
		 */
		function maxOccurrence(words) {
			let chars = Array.from(new Set(words.join("")));
			return chars.reduce((maxChar, curChar) => 
				getOccurrence(maxChar, words) < getOccurrence(curChar, words) ? curChar : maxChar);
		}
		/**
		 * get current unused words
		 * @param {Array} [used] - index of all used words
		 * @param {Array} [words] - all available words
		 *
		 * @return {Array} [unused words]
		 */
		function getUnused(used, words) {
			return words.filter((word, index) => !used[index]);
		}
		/**
		 * record used words
		 * @param {char} [letter] - letter to be checked
		 * @param {Array} [words] - all words
		 * @param {Array} [used] - index of all used words
		 * 
		 * @return {Array} [index of all used words]
		 */
		function markUsed(letter, words, used) {
			return used.map((marker, index) => 
				marker ? marker : (words[index].search(letter) != -1 ? 1 : 0));
		}
		/**
		 * remove one letter from each word
		 * @param {char} [letter] - letter to be removed
		 * @param {Array} [words] - all words
		 *
		 * @return {Array} [words with letter removed]
		 */
		function removeChar(letter, words) {
			return words.map(word => {
				let index = word.search(letter);
				return index == -1 ? word : word.slice(0, index) + word.slice(index + 1);
			});
		}
		/**
		 * create multifaceted alphabet blocks
		 * @param {Array} [words] - all words
		 *
		 * @return {Array} [alphabet blocks]
		 */
		function makeAlphabet(words) {
			let alphabet = "", blockSize = 1;
			while(words.join("").length) {
				let used = new Array(words.length).fill(0);
				for(let i = 0; i < blockSize; i++) {
					let maxChar = maxOccurrence(getUnused(used, words));
					alphabet += maxChar;
					used = markUsed(maxChar, words, used);
					words = removeChar(maxChar, words);
				}
				[alphabet, blockSize] = [alphabet + "\n", blockSize + 1];
			}
			return alphabet;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let time = new Date().getTime();
		let input = ["zero", "one", "two", "three", "four", "five", "six", "seven"];
		console.log(`%c${makeAlphabet(input)}`, "color : orange;");
		console.log(`%cTime Spent: %c${new Date().getTime() - time}ms`, "color : skyblue;", "color : orange;");
	});
})();