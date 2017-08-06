/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * trie class
		 * @param {Array} [list] - list of all words
		 */
		class Trie {
			constructor(list) {
				this.root = {};
				this.addList(list);
			}
			/**
			 * add word into the trie
			 * @param {String} [word] - word to be added
			 */
			add(word) {
				let curNode = this.root;
				for(let i = 0; i < word.length; i++) {
					if(!curNode[word[i]]) {
						curNode[word[i]] = {};
					}
					curNode = curNode[word[i]];
				}
			}
			/**
			 * add a list of word into the trie
			 * @param {Array} [list] - list of all words
			 */
			addList(list) {
				for(let i = 0; i < list.length; i++) {
					this.add(list[i]);
				}
			}
			/**
			 * get node representing the last character in a word
			 * @param {String} [word] - word to be examined
			 *
			 * @return {Object} [node representing last word character]
			 */
			getNode(word) {
				let curNode = this.root;
				for(let i = 0; i < word.length; i++) {
					if(!curNode[word[i]]) {
						return null;
					}
					curNode = curNode[word[i]];
				}
				return curNode;
			}
			/**
			 * check if a word exists in the trie
			 * @param {String} [word] - word to be examined
			 *
			 * @return {boolean} [test result] 
			 */
			contain(word) {
				return this.getNode(word) ? true : false;
			}
			/**
			 * check if a word is a prefix of other words
			 * @param {String} [word] - word to be examined
			 *
			 * @return {boolean} [test result]
			 */
			isPrefix(word) {
				return Object.keys(this.getNode(word)).length > 0;
			}
		}
		/**
		 * spell check a word 
		 * @param {String} [word] - word to be tested
		 * @param {Object} [trie] - word dictionary
		 *
		 * @return {String} [test result]
		 */
		function spellCheck(word, trie) {
			for(let i = 1; i <= word.length; i++) {
				if(!trie.contain(word.slice(0, i))) {
					return word.slice(0, i) + "<" + word.slice(i);
				}
			}
			return "The Word is Spelled Correctly.";
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
					if(this.readyState == 4 && this.status == 200) {
						resolve(this.responseText.split("\n").map(word => word.trim()));
					}
				};
				xhttp.open("GET", url, true);
				xhttp.send();
			});
		}
		//default input & challenge input & bonus input
		getWordList("wordList.txt").then(list => {
			let time = new Date().getTime();
			let trie = new Trie(list);
			//default input
			console.log(`%cDefault Input: `, "color : red;");
			let input = ["foobar", "garbgae"];
			for(let i = 0; i < input.length; i++) {
				console.log(`${input[i]} -> %c${spellCheck(input[i], trie)}`, "color : orange;");
			}
			//challenge input
			console.log(`%cChallenge Input: `, "color : red;");
			input = ["accomodate", "acknowlegement", "arguemint" , "comitmment" , "deductabel", "depindant", "existanse", "forworde", "herrass", "inadvartent", "judgemant" , "ocurrance", "parogative", "suparseed"];
			for(let i = 0; i < input.length; i++) {
				console.log(`${input[i]} -> %c${spellCheck(input[i], trie)}`, "color : orange;");
			}
			console.log(`Time Spent On Trie Construction: %c${new Date().getTime() - time}ms`, "color : orange;");
		});
	});
})();			