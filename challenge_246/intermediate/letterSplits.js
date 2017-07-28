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
		//challenge input
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
		
		getWordList("wordList.txt").then(result => {
			let dictionary = makeDictionary(result);
			console.log(dictionary);
		});
	});
})();		