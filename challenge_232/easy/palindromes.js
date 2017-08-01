/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * check if a word or sentence is a palindrome
		 * @param {String} [sentence] - word or sentence to be checked
		 *
		 * @return {boolean} [test result]
		 */
		function isPalindrome(sentence) {
			let chars = sentence.toLowerCase().match(/\w/g);
			let center = chars.length % 2 ? (chars.length - 1) * 0.5 + 1 : chars.length * 0.5;
			return chars.slice(0, center).join("") == chars.slice(-center).reverse().join("") ? "Palindrome." : "Not a Palindrome.";
		} 
		/**
		 * retrieve word list
		 * @param {String} [url] - word list file URL
		 *
		 * @return {Array} [word list]
		 */
		function getWordList(url) {
			return new Promise((resolve, reject) => {
				let xhttp = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
				xhttp.onreadystatechange = function() {
					if(this.readyState == 4 && this.status == 200) {
						resolve(this.responseText.split("\n").map(word => word.trim()));
					}
				};
				xhttp.open("GET", url, true);
				xhttp.send();
			});
		}
		/**
		 * construct dictionary
		 * @param {Array} [list] - list of all words
		 *
		 * @return {Object} [dictionary]
		 */
		function makeDictionary(list) {
			return new Set(list);
		}
		/**
		 * reverse a word
		 * @param {String} [word] - word to be reversed
		 *
		 * @return {String} [reversed word]
		 */
		function reverseWord(word) {
			return word.split("").reverse().join("");
		}
		/**
		 * find possible reverses of words that can form palindrome
		 * @param {String} [word] - word to be examined
		 * @param {int} [minLen] - minimum length of the other word to form palindrome 
		 *
		 * @return {Array} [all possible reverses]
		 */
		function findReflection(word, minLen = 2) {
			let minTotalLen = word.length + minLen;
			let center = (minTotalLen) % 2 ? (minTotalLen - 1) * 0.5 : minTotalLen * 0.5;
			let reflections = [reverseWord(word), reverseWord(word.slice(0, -1))];
			for(let i = center; i < word.length - 1; i++) {
				let tail = reverseWord(word.slice(i));
				let [reverse1, reverse2] = [word.slice(i - tail.length, i), word.slice(i - tail.length + 1, i + 1)];
				if(tail == reverse1 || tail == reverse2) {
					reflections.push(reverseWord(word.slice(0, tail == reverse1 ? i : i + 1)).slice(tail.length));
				}
			}
			return reflections;
		}
		// //default input
		// console.log(`%cDefault Input: `, "color : red;");
		// let input = `Was it a car
		// 						 or a cat
		// 						 I saw?`;
		// console.log(`${input.split("\n").map(line => line.trim()).join("\n")}`);
		// console.log(`%c-> ${isPalindrome(input)}`, "color : orange;");		
		// input = `A man, a plan, 
  //            a canal, a hedgehog, 
  //            a podiatrist, 
  //            Panama!`;
		// console.log(`${input.split("\n").map(line => line.trim()).join("\n")}`);
		// console.log(`%c-> ${isPalindrome(input)}`, "color : orange;");	
		// //challenge input
		// console.log(`%cChallenge Input: `, "color : red;");
		// input = `Are we not drawn onward, 
  //            we few, drawn onward to new area?`;
		// console.log(`${input.split("\n").map(line => line.trim()).join("\n")}`);
		// console.log(`%c-> ${isPalindrome(input)}`, "color : orange;");					
		// getWordList("poem.txt").then(result => {
		// 	console.log(`${result.join("\n")}`);
		// 	console.log(`%c-> ${isPalindrome(result.join(""))}`, "color : orange;");	
		// });		 
		getWordList("wordList.txt").then(result => {
			let time = new Date().getTime();
			console.log(makeDictionary(result));
			console.log(`Time Spent : %c${new Date().getTime() - time}ms`, "color : orange;");
		});
	});
})();		