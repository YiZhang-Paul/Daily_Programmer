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
				return null;
			}
			return list.filter(word => word.length == firstMatch.length && isEmbed(word, name))
			           .map(word => word[0].toUpperCase() + word.slice(1));
		}
		/**
		 * find dank name pair that scores highest
		 * @param {String} [name] - user name
		 * @param {Array} [list] - list of all words
		 *
		 * @return {String} [highest scored dank name pair]
		 */
		function maxDankNamePair(name, list) {
			name = name.split(" ").join("").toLowerCase();
			let dankPairs = [];
			for(let i = 1; i < name.length; i++) {
				let [leftDank, rightDank] = [longestDankName(name.slice(0, i), list), longestDankName(name.slice(i), list)];
				if(leftDank && rightDank) {
					dankPairs.push([leftDank[0], rightDank[0]]);
				}
			}
			return !dankPairs.length ? "No Dank Pairs Found." : dankPairs.reduce((acc, val) => {
				let score1 = Math.pow(acc[0].length, 2) + Math.pow(acc[1].length, 2);
				let score2 = Math.pow(val[0].length, 2) + Math.pow(val[1].length, 2);
				return score1 < score2 ? val : acc;
			}).join(" ");
		}
		//default & challenge input & bonus input
		getWordList("wordList.txt").then(list => {
			//default input
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
			//challenge input
			console.log(`%cChallenge Input: `, "color : red;");
			input = "Ada Lovelace";
			time = new Date().getTime();
      console.log(`${input} -> `);
			longestDankName(input, list).forEach(name => {
				console.log(`%c${name}`, "color : orange;");
			});
			console.log(`Time Spent: %c${new Date().getTime() - time}ms`, "color : orange;");
      input = "Haskell Curry";
      time = new Date().getTime();
      console.log(`${input} -> `);
			longestDankName(input, list).forEach(name => {
				console.log(`%c${name}`, "color : orange;");
			});
			console.log(`Time Spent: %c${new Date().getTime() - time}ms`, "color : orange;");
      input = "Yi Zhang";
      time = new Date().getTime();
      console.log(`${input} -> `);
			longestDankName(input, list).forEach(name => {
				console.log(`%c${name}`, "color : orange;");
			});
			console.log(`Time Spent: %c${new Date().getTime() - time}ms`, "color : orange;");
			//bonus input
			console.log(`%cBonus Input: `, "color : red;");
			input = "Donald Knuth";
			time = new Date().getTime();
			console.log(`${input} -> %c${maxDankNamePair(input, list)}`, "color : orange;");
			console.log(`Time Spent: %c${new Date().getTime() - time}ms`, "color : orange;");
      input = "Alan Turing";
      time = new Date().getTime();
			console.log(`${input} -> %c${maxDankNamePair(input, list)}`, "color : orange;");
			console.log(`Time Spent: %c${new Date().getTime() - time}ms`, "color : orange;");
      input = "Claude Shannon";
      time = new Date().getTime();
			console.log(`${input} -> %c${maxDankNamePair(input, list)}`, "color : orange;");
			console.log(`Time Spent: %c${new Date().getTime() - time}ms`, "color : orange;");
      input = "Ada Lovelace";
      time = new Date().getTime();
			console.log(`${input} -> %c${maxDankNamePair(input, list)}`, "color : orange;");
			console.log(`Time Spent: %c${new Date().getTime() - time}ms`, "color : orange;");
      input = "Haskell Curry";
      time = new Date().getTime();
			console.log(`${input} -> %c${maxDankNamePair(input, list)}`, "color : orange;");
			console.log(`Time Spent: %c${new Date().getTime() - time}ms`, "color : orange;");
      input = "Yi Zhang";
      time = new Date().getTime();
			console.log(`${input} -> %c${maxDankNamePair(input, list)}`, "color : orange;");
			console.log(`Time Spent: %c${new Date().getTime() - time}ms`, "color : orange;");
		});
	});
})();		