/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * retrieve word list
		 * @param {String} [url] - word list url
		 *
		 * @return {Object} [Promise object]
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
		 * check if a string is embeded in a word
		 * @param {String} [string] - string to be checked
		 * @param {String} [word] - word to be checked against
		 *
		 * @return {boolean} [test result]
		 */
		function isEmbed(string, word) {
			word = word.split("");
			for(let i = 0, start = 0; i < string.length; i++) {
				start = word.indexOf(string[i], start) + 1;
				if(start === 0) {
					return false;
				}
			}
			return true;
		}
		/**
		 * filter all word that contains a given string
		 * @param {String} [string] - string to be checked
		 * @param {Array} [list] - list of all words
		 *
		 * @return {Array} [all valid words]
		 */
		function getEmbedWords(string, list) {
			return list.filter(word => isEmbed(string, word));
		}
		/**
		 * find longest dank name
		 * @param {String} [name] - user name
		 * @param {Array} [list] - list of all words
		 *
		 * @return {Array} [longest dank names]
		 */
		function longestDankName(name, list) {
			name = name.split(" ").join("").toLowerCase();
			list = list.filter(word => word.length <= name.length).sort((a, b) => b.length - a.length);
			let firstMatch = list.find(word => isEmbed(word, name));
			if(!firstMatch) {
				return "No Dank Name Found.";
			}
			return list.filter(word => word.length == firstMatch.length && isEmbed(word, name))
			           .map(word => word[0].toUpperCase() + word.slice(1));
		}

		//default input
		getWordList("wordList.txt").then(list => {
			console.log(`%cDefault Input: `, "color : red;");
			let input = "Donald Knuth";
			let time = new Date().getTime();
			console.log(`${input} -> `);
			longestDankName(input, list).forEach(name => {
				console.log(`%c${name}`, "color : orange;");
			});
			console.log(`Time Spent: %c${new Date().getTime() - time}ms`, "color : orange;");
      input = "Alan Turing";
      time = new Date().getTime();
      console.log(`${input} -> `);
			longestDankName(input, list).forEach(name => {
				console.log(`%c${name}`, "color : orange;");
			});
			console.log(`Time Spent: %c${new Date().getTime() - time}ms`, "color : orange;");
      input = "Claude Shannon";
      time = new Date().getTime();
      console.log(`${input} -> `);
			longestDankName(input, list).forEach(name => {
				console.log(`%c${name}`, "color : orange;");
			});
			console.log(`Time Spent: %c${new Date().getTime() - time}ms`, "color : orange;");
		});
	});
})();		