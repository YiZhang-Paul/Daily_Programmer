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
		 * @param {Array} [usedChar] - used letters
		 *
		 * @return {char} [letter with maximum occurrence]
		 */
		function maxOccurrence(words, usedChar) {
			let chars = words.join("").split("").reduce((count, char) => {
				count[char] = usedChar.has(char) ? count[char] : true;
				return count;
			}, {});
			return Object.keys(chars).reduce((maxChar, curChar) => 
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
				let [usedChar, usedWord] = [new Set(), new Array(words.length).fill(0)];
				for(let i = 0; i < blockSize; i++) {
					let maxChar = maxOccurrence(getUnused(usedWord, words), usedChar);
					alphabet += maxChar;
					usedChar.add(maxChar);
					usedWord = markUsed(maxChar, words, usedWord);
					words = removeChar(maxChar, words);
				}
				[alphabet, blockSize] = [alphabet + "\n", blockSize + 1];
			}
			return alphabet;
		}
		/**
		 * retrieve word list
		 * @param {String} [url] - word list file URL
		 *
		 * @return {Object} [Promise object]
		 */
		function getWordList(url) {
			return new Promise((resolve, reject) => {
				let xhttp = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
				xhttp.onreadystatechange = function() {
					if(this.readyState == 4 && this.status == 200) resolve(this.responseText.split("\n").map(line => line.trim()));
					if(this.status == 404) reject("List Not Found."); 
				};
				xhttp.open("GET", url, true);
				xhttp.send();
			});
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let time = new Date().getTime();
		let input = ["zero", "one", "two", "three", "four", "five", "six", "seven"];
		console.log(`%c${makeAlphabet(input)}`, "color : orange;");
		console.log(`%cTime Spent: %c${new Date().getTime() - time}ms`, "color : skyblue;", "color : orange;");
		//challenge input
		getWordList("wordList.txt").then(list => {
			console.log(`%cChallenge Input: `, "color : red;");
			let time = new Date().getTime();
			console.log(`%c${makeAlphabet(list)}`, "color : orange;");
			console.log(`%cTime Spent: %c${new Date().getTime() - time}ms`, "color : skyblue;", "color : orange;");
		}).catch(error => {console.log(error);});
	});
})();