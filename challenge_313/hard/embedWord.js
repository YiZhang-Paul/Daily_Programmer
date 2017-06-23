/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * get text file
		 * @param String
		 *
		 * url : text file URL
		 *
		 * returns obj {}
		 */
		function getText(url) {
			return new Promise((resolve, reject) => {
				let xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
				xhttp.onreadystatechange = function() {
					if(this.readyState === 4 && this.status === 200) {
						resolve(this.responseText.split("\n").map(word => word.trim()));
					}
				};
				xhttp.open("GET", url, true);
				xhttp.send();
			});
		} 
		/**
		 * merge two words together base on letter weight
		 * @param array [], String
		 *
		 * word1 : word 1
		 * word2 : word 2
		 *
		 * returns array [] 
		 */ 
		function merge(word1, word2) {
			word1 = Array.isArray(word1) ? word1 : word1.split("");
			for(let i = 0; i < word2.length; i++) {
				if(!word1[i]) {
					word1[i] = word2[i];
				} else if(word1[i].indexOf(word2[i]) == -1) {
					word1[i] += word2[i];	
				}
			}
			return word1;
		}
		/** 
		 * remove redundant letters in a sequence
		 * @param String, array []
		 *
		 * sequence : sequence to be trimed
		 * wordList : list of all words
		 * 
		 * returns String
		 */
		function trimSequence(sequence, wordList) {
			let useFlag = new Array(sequence.length).fill(0);
			for(let i = 0; i < wordList.length; i++) {
				for(let start = 0, j = 0; j < wordList[i].length; j++) {
					start = sequence.indexOf(wordList[i][j], start) + 1;
					useFlag[start - 1]++;
				}
			}
			return sequence.split("").reduce((acc, val, index) => acc + (useFlag[index] ? val : ""));
		} 
		/**
		 * embed a list of word inside each other
		 * @param array []
		 *
		 * wordList : list of all words
		 *
		 * returns String
		 */
		function embed(wordList) {
			let allMerged = wordList.reduce((acc, val) => merge(acc, val)).join("");
			return trimSequence(allMerged, wordList);
		}
		/**
		 * check if a word is embedded in another
		 * @param String, String
		 *
		 * test  : word to be tested 
		 * other : other word used for the test
		 *
		 * returns boolean
		 */
		function isEmbed(test, other) {
			for(let start = 0, i = 0; i < test.length; i++) {
				let index = other.indexOf(test[i], start); 
				if(index == -1) {
					return false;
				}
				start = index + 1;
			}
			return true;
		} 
		/**
		 * remove embedded words
		 * @param array []
		 *
		 * wordList : list of all words
		 *
		 * returns array []
		 */
		function removeEmbed(wordList) {
			wordList = wordList.sort((a, b) => a.length - b.length);
			return wordList.filter((word, index) => {
				for(let i = wordList.length - 1; i >= 0; i--) {
					if(i != index && isEmbed(word, wordList[i])) {
						return false;
					}
				}
				return true;
			});
 		} 
 		/**
 		 * categorize words base on initial letter
 		 * @param array []
 		 *
 		 * wordList : list of all words
 		 * 
 		 * returns array []
 		 */
 		function groupWord(wordList) {
 			let category = [], charCodeA = "a".charCodeAt();
 			for(let i = 0; i < wordList.length; i++) {
 				let curCharCode = wordList[i][0].charCodeAt();
 				if(category[curCharCode - charCodeA]) {
 					category[curCharCode - charCodeA].push(wordList[i]);
 				} else {
 					category[curCharCode - charCodeA] = [wordList[i]];
 				}
 			}
 			return category;
 		} 
		//default input
		let input = ["one", "two", "three", "four", "five"];
		//let embedded = embed(input);
		//console.log(embedded, embedded.length); 
		//challenge input
		getText("wordList.txt").then(result => {
			console.log(groupWord(result));
			//let time = new Date().getTime();
			//console.log(removeEmbed(result.slice(0, 100)), new Date().getTime() - time);
			//let embedded = embed(result);
			//console.log(embedded, embedded.length, new Date().getTime() - time); 	
		});
	});
})();		