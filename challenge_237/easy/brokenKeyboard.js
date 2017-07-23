/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * retrieve word list
		 * @param {String} [url] [URL of word list file]
		 *
		 * @return {obj {}} [promise object cotaining word list]
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
		 * filter words 
		 * @param {array []} [list] [list of all words]
		 * @param {obj {}} [charSet] [character set]
		 *
		 * @return {array []} [filtered list]
		 */
		function filterList(list, charSet) {
			return list.filter(word => charSet.has(word[0])).sort((a, b) => b.length - a.length);
		}
		/**
		 * check if a word can be formed with
		 * given character set
		 * @param {String} [word] [word to be checked]
		 * @param {obj {}} [charSet] [character set]
		 *
		 * @return {boolean}
		 */
		function canFormWord(word, charSet) {
			return word.split("").every(char => charSet.has(char));
		}	
		/**
		 * find longest word can be formed 
		 * by given character set
		 * @param {array []} [list] [list of all words]
		 * @param {obj {}} [charSet] [character set]
		 *
		 * @return {String} [longest word available]
		 */
		function longestWord(list, charSet) {
			charSet = new Set(charSet);
			return filterList(list, charSet).find(word => canFormWord(word, charSet));
		}
		getWordList("wordList.txt").then(list => {
			//default input
			console.log(`%cDefault Input: `, "color : red;");
			let input = "abcd";
			console.log(`${input} => ${longestWord(list, input)}`);
			input = "qwer";
			console.log(`${input} => ${longestWord(list, input)}`);
			input = "hjklo";
			console.log(`${input} => ${longestWord(list, input)}`);
			//challenge input
			console.log(`%cChallenge Input: `, "color : red;");
			input = "edcf";
			console.log(`${input} => ${longestWord(list, input)}`);
			input = "bnik";
			console.log(`${input} => ${longestWord(list, input)}`);
			input = "poil";
			console.log(`${input} => ${longestWord(list, input)}`);
			input = "vybu";
			console.log(`${input} => ${longestWord(list, input)}`);
		});
	});
})();		