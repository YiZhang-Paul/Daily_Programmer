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
					curNode.isLeaf = false;
				}
				curNode.isLeaf = true;
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
			 * get node for a given word
			 * @param {String} [word] - word of the node
			 *
			 * @return {Object} [node]
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
			 * @param {String} [word] - word to be checked
			 *
			 * @return {boolean} [test result]
			 */
			contain(word) {
				return this.getNode(word) ? true : false;
			}
			/**
			 * check if a word is a prefix of other longer words
			 * @param {String} [word] - word to be checked
			 *
			 * @return {boolean} [test result]
			 */
			isPrefix(word) {
				let node = this.getNode(word);
				return node ? !node.isLeaf : false;
			}
			/**
			 * get all full words of a given prefix
			 * @param {String} [prefix] - prefix to be examined
			 * @param {Object} [curNode] - current node being traversed
			 * @param {String} [curAffix] - curren affix
			 *
			 * @return {Array} [all full words]
			 */
			getFullWord(prefix, curNode, curAffix = "") {
				if(curNode.isLeaf) {
					return [prefix + curAffix];
				}
				let fullWord = [], chars = Object.keys(curNode).filter(key => key.length == 1);
				for(let i = 0; i < chars.length; i++) {
					fullWord.push(...this.getFullWord(prefix, curNode[chars[i]], curAffix + chars[i]));
				}
				return fullWord;
			}
		}
		/**
		 * find index of first misspelled letter
		 * @param {String} [word] - word to be examined
		 * @param {Object} [trie] - trie to be referred to
		 *
		 * @return {int} [misspelled index]
		 */
		function misspellIndex(word, trie) {
			for(let i = 1; i <= word.length; i++) {
				if(!trie.contain(word.slice(0, i))) {
					return i;
				}
			}
			return -1;
		}
		/**
		 * spell check a word
		 * @param {String} [word] - word to be checked
		 * @param {Object} [trie] - trie to be referred to
		 *
		 * @return {String} [test result]
		 */
		function spellCheck(word, trie) {
			let misspelled = misspellIndex(word, trie);
			return misspelled == -1 ? 
				"The Word is Spelled Correctly." : word.slice(0, misspelled) + "<" + word.slice(misspelled);
		}
		/**
		 * get suggestions for current misspelled word
		 * @param {String} [word] - word to be checked
		 * @param {Object} [trie] - trie to be referred to
		 *
		 * @return {Array} [word suggestions]
		 */
		function getSuggestion(word, trie) {
			let misspelled = misspellIndex(word, trie);
			return misspelled == -1 ?
				["The Word is Spelled Correctly."] : trie.getFullWord(word.slice(0, misspelled - 1), trie.getNode(word.slice(0, misspelled - 1)));
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
			console.log(`Time Spent On Trie Construction: %c${new Date().getTime() - time}ms`, "color : orange;");
			//default input
			console.log(`%cDefault Input: `, "color : red;");
			let input = ["foobar", "garbgae"];
			for(let i = 0; i < input.length; i++) {
				time = new Date().getTime();
				console.log(`${input[i]} -> %c${spellCheck(input[i], trie)} %c(${new Date().getTime() - time}ms)`, "color : orange;", "color : red;");
			}
			//challenge input
			console.log(`%cChallenge Input: `, "color : red;");
			input = ["accomodate", "acknowlegement", "arguemint" , "comitmment" , "deductabel", "depindant", "existanse", "forworde", "herrass", "inadvartent", "judgemant" , "ocurrance", "parogative", "suparseed"];
			for(let i = 0; i < input.length; i++) {
				time = new Date().getTime();
				console.log(`${input[i]} -> %c${spellCheck(input[i], trie)} %c(${new Date().getTime() - time}ms)`, "color : orange;", "color : red;");
			}
			//bonus input
			console.log(`%cBonus Input: `, "color : red;");
			input = ["foobar", "garbgae", "accomodate", "acknowlegement", "arguemint" , "comitmment" , "deductabel", "depindant", "existanse", "forworde", "herrass", "inadvartent", "judgemant" , "ocurrance", "parogative", "suparseed"];
			for(let i = 0; i < input.length; i++) {
				time = new Date().getTime();
				console.log(`${spellCheck(input[i], trie)} Suggestions ->`);
				let result = getSuggestion(input[i], trie);
				for(let j = 0; j < result.length; j++) {
					console.log(`%c${result[j]}`, "color : orange;");
				}
				console.log(`Time Spent: %c${new Date().getTime() - time}ms`, "color : orange;");
			}
		});
	});
})();			