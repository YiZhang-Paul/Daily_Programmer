/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * check if a word or sentence is palindrome
		 * @param {String} [sentence] - sentence to be examined
		 *
		 * @return {boolean} [test result]
		 */
		function isPalindrome(sentence) {
			let chars = sentence.match(/\w/g).map(char => char.toLowerCase());
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
		 * reverse a word
		 * @param {String} [word] - word to be reversed
		 *
		 * @return {String} [reversed word]
		 */
		function reverseWord(word) {
			return word.split("").reverse().join("");
		}
		/**
		 * find possible reverses of a given word that may form palindrome when appended
		 * @param {String} [word] - word to be checked
		 * @param {int} [minLen] - minimum length of the reverse words
		 *
		 * @return {Array} [all possible reverse words]
		 */
		function forwardReflect(word, minLen = 2) {
			let minTotalLen = word.length + minLen;
			let center = minTotalLen % 2 ? (minTotalLen - 1) * 0.5 : minTotalLen * 0.5;
			let reflects = [reverseWord(word), reverseWord(word.slice(0, -1))];
			for(let i = center; i < word.length - 1; i++) {
				let tail = reverseWord(word.slice(i));
				let [reverse1, reverse2] = [word.slice(i - tail.length, i), word.slice(i - tail.length + 1, i + 1)];
				if(tail == reverse1 || tail == reverse2) {
					reflects.push(reverseWord(word.slice(0, tail == reverse1 ? i : i + 1)).slice(tail.length));
				}
			}
			return reflects.filter(reverse => reverse != word);
		}
		/**
		 * find possible reverses of a given word that may form palindrome when prepended
		 * @param {String} [word] - word to be checked
		 * @param {int} [minLen] - minimum length of the reverse words
		 *
		 * @return {Array} [all possible reverses]
		 */
		function backwardReflect(word, minLen = 2) {
			return forwardReflect(reverseWord(word), minLen).map(result => reverseWord(result)).slice(1);
		}
		/**
		 * get all vaild two-word palindromes for a given word
		 * @param {String} [word] - word to be examined
		 * @param {Object} [dictionary] - dictionary to be checked against
		 *
		 * @return {Array} [all valid two-word palindromes]
		 */
		function validPalindrome(word, dictionary) {
			let [fwReverse, bwReverse] = [forwardReflect(word), backwardReflect(word)];
			return [...fwReverse.filter(reverse => dictionary.has(reverse)).map(reverse => `${word} ${reverse}`),
			        ...bwReverse.filter(reverse => dictionary.has(reverse)).map(reverse => `${reverse} ${word}`)];
		}
		/**
		 * find two-word palindromes from a given word list
		 * @param {Array} [list] - list of all words
		 *
		 * @return {Array} [all valid two-word palindromes]
		 */
		function twoWordPalindromes(list) {
			let dictionary = new Set(list);
			let palindromes = [];
			for(let i = 0; i < list.length; i++) {
				palindromes.push(...validPalindrome(list[i], dictionary));
			}
			return palindromes;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = `Was it a car
								 or a cat
								 I saw?`;  
		console.log(`${input.split("\n").map(line => line.trim()).join("\n")}`);
		console.log(`%c-> ${isPalindrome(input)}`, "color : orange;");
		input = `A man, a plan, 
             a canal, a hedgehog, 
             a podiatrist, 
             Panama!`;
		console.log(`${input.split("\n").map(line => line.trim()).join("\n")}`);
		console.log(`%c-> ${isPalindrome(input)}`, "color : orange;");	
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = `Are we not drawn onward, 
             we few, drawn onward to new area?`;
		console.log(`${input.split("\n").map(line => line.trim()).join("\n")}`);
		console.log(`%c-> ${isPalindrome(input)}`, "color : orange;");					
		getWordList("poem.txt").then(result => {
			console.log(`${result.join("\n")}`);
			console.log(`%c-> ${isPalindrome(result.join(""))}`, "color : orange;");	
		});	
		//bonus input
		console.log(`%cBonus Input: `, "color : red;");	
		getWordList("wordList.txt").then(result => {
			let time = new Date().getTime();
			console.log(twoWordPalindromes(result));
			console.log(`Time Spent: %c${new Date().getTime() - time}ms`, "color : orange;");
		});						 
	});
})();		