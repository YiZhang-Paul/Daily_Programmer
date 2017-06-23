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
 			wordList = wordList.sort((a, b) => a.length - b.length);
 			let categories = [], charCodeA = "a".charCodeAt();
 			for(let i = 0; i < wordList.length; i++) {
 				let curCharCode = wordList[i][0].charCodeAt();
 				if(categories[curCharCode - charCodeA]) {
 					categories[curCharCode - charCodeA].push(wordList[i]);
 				} else {
 					categories[curCharCode - charCodeA] = [wordList[i]];
 				}
 			}
 			return categories.reduce((acc, val) => [...acc, (val ? val : [])], []);
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
				console.log(useFlag);
			return sequence.split("").reduce((acc, val, index) => acc + (useFlag[index] ? val : ""));
		}
		/**
		 * generate alphabet that will cover all words
		 *
		 * returns String
		 */
		 function getAlphabet() {
		 	let alphabet = "";
		 	for(let curCode = "a".charCodeAt(), i = 0; i < 26; i++	) {
		 		alphabet += String.fromCharCode(curCode++);
		 	}
		 	return alphabet;
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
			//categorize all words
			let categories = groupWord(wordList);
			//remove embed words
			for(let i = 0; i < categories.length; i++) {
				categories[i] = removeEmbed(categories[i]);
			}
			wordList = categories.sort((a, b) => b.length - a.length).reduce((acc, val) => acc.concat(val));
			console.log(categories);
			let maxLength = wordList.sort((a, b) => b.length - a.length)[0].length;
			return trimSequence(getAlphabet().repeat(maxLength), wordList);
		}
		//default input
		let input = ["one", "two", "three", "four", "five"];
		let embedded = embed(input);
		console.log(embedded, embedded.length); 
		//challenge input
		getText("wordList.txt").then(result => {
			let time = new Date().getTime();
			let embedded = embed(result.slice(5000, 6000));
			console.log(embedded, embedded.length, new Date().getTime() - time); 	
		});
	});
})();		