/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * retrieve word list
		 * @param {String} [url] - URL of word list file
		 *
		 * @return {Object} [word list]
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
		 * convert number to letter
		 * @param {int} [charCode] - code representing letter
		 *
		 * @return {char} [letter after conversion]
		 */
		function codeToChar(charCode) {
			return String.fromCharCode(charCode + 64);
		}
		/**
		 * arrange character code in all possible ways
		 * and retrieve respective word combinations 
		 * @param {String} [charCode] - character codes
		 * @param {Array} [curCode] - current code selection
		 *
		 * @return {Array} [all possible words]
		 */
		function arrangeWord(charCode, curCode = []) {
			if(!charCode) {
				return curCode.map(code => codeToChar(Number(code))).join("");
			}
			let selection = [], trailNum = Number(charCode.slice(-2));
			for(let i = charCode[charCode.length - 1] == "0" ? 2 : 1; i <= (trailNum >= 10 && trailNum <= 26 ? 2 : 1); i++) {
				let result = arrangeWord(charCode.slice(0, -i), [charCode.slice(-i), ...curCode]);
				if(Array.isArray(result)) {
					selection.push(...result);
				} else {
					selection.push(result);
				}
			}
			return selection;
		}
		/**
		 * check if a word is a real English word
		 * @param {String} [word] - word to be tested
		 * @param {Object} [dictionary] - dictionary for reference
		 *
		 * @return {boolean} [test result]
		 */
		function isRealWord(word, dictionary) {
			return dictionary.has(word.toLowerCase());
		}
		/**
		 * find word arrangements that are real English words
		 * @param {String} [chars] - all characters
		 * @param {Obejct} [dictionary] - dictionary for reference
		 * @param {Array} [curWord] - current words found
		 *
		 * @return {Array} [all real English words]
		 */
		function findRealWord(chars, dictionary, curWord = []) { 
			if(curWord[0] && !isRealWord(curWord[0].toLowerCase(), dictionary)) {
				return null;
			}
			if(!chars.length) {
				return curWord.join(" ");
			}			
			let realWord = [];
			for(let i = chars.length; i >= 4; i--) {
				let result = findRealWord(chars.slice(0, -i), dictionary, [chars.slice(-i), ...curWord]);
				if(result) {
					if(Array.isArray(result)) {
						realWord.push(...result);
					} else {
						realWord.push(result);
					}
				}
			}
			return realWord;
		}
		/**
		 * find all real words that can be formed by given character codes
		 * @param {String} [charCode] - character codes
		 * @param {Object} [dictionary] - dictionary for reference
		 *
		 * @return {Array} [all real words]
		 */
		function findAllRealWord(charCode, dictionary) {
			let arrangements = arrangeWord(charCode);
			let wholeWord = arrangements.filter(word => isRealWord(word, dictionary));
			return wholeWord.length ? 
				wholeWord : arrangements.map(word => findRealWord(word, dictionary))
															  .filter(word => word.length)
															  .reduce((acc, val) => [...acc, ...val], []);
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = "1234";
		console.log(`${input} -> `);
		arrangeWord(input).forEach(word => {
			console.log(`%c${word}`, "color : orange;");
		});
		input = "1234567899876543210";
		console.log(`${input} -> `);
		arrangeWord(input).forEach(word => {
			console.log(`%c${word}`, "color : orange;");
		});
		input = "10520";
		console.log(`${input} -> `);
		arrangeWord(input).forEach(word => {
			console.log(`%c${word}`, "color : orange;");
		});
		//bonus input
		console.log(`%cBonus Input: `, "color : red;");
		getWordList("wordList.txt").then(result => {
			let dictionary = makeDictionary(result);
			let input = "1321205";
			console.log(`${input} -> `);
			findAllRealWord(input, dictionary).forEach(word => {
				console.log(`%c${word}`, "color : orange;");
			});
			input = "1252020518";
			console.log(`${input} -> `);
			findAllRealWord(input, dictionary).forEach(word => {
				console.log(`%c${word}`, "color : orange;");
			});
			input = "85121215231518124";
			console.log(`${input} -> `);
			findAllRealWord(input, dictionary).forEach(word => {
				console.log(`%c${word}`, "color : orange;");
			});
			input = "811616258151294125194191225161815718113";
			console.log(`${input} -> `);
			findAllRealWord(input, dictionary).forEach(word => {
				console.log(`%c${word}`, "color : orange;");
			});
		});
	});
})();		