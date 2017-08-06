/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * trie class
		 * 
		 */
		class Trie {
			constructor() {
				this.root = {level : 0};
			}
			/**
			 * add word into the trie
			 * @param {String} [word] - word to be added
			 */
			add(word) {
				let curNode = this.root;
				for(let i = 0; i < word.length; i++) {
					if(!curNode[word[i]]) {
						curNode[word[i]] = {level : curNode.level + 1};
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
				return Object.keys(this.getNode(word)).length > 1;
			}
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
			let trie = new Trie();
			trie.addList(list);
			console.log(`Time Spent On Trie Construction: %c${new Date().getTime() - time}ms`, "color : orange;");
		});
	});
})();			