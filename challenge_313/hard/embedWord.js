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
		 * construct a table of all repeating patterns
		 * @param array []
		 *
		 * wordList : list of all words
		 *
		 * returns obj {}
		 */
		function getPattern(wordList) {
			let patterns = {};
			for(let i = 0; i < wordList.length; i++) {
				for(let lastChar, j = 0; j < wordList[i].length; j++) {
					let curChar = wordList[i][j];		
					if(!lastChar) {
						lastChar = curChar;
						continue;
					}
					if(lastChar == curChar) {
						patterns[curChar] = patterns[curChar] ? patterns[curChar] : true;
					}
					lastChar = curChar;
				}
			}
			return patterns;
		} 
		/**
		 * check if a repeating pattern exist
		 * @param char, String, obj {}, String
		 *
		 * letter   : letter to be inserted 
		 * previous : previous letter block
		 * table : table containing max repeating character length
		 * next     : next letter block
		 *
		 * returns boolean
		 */
		function canInsert(letter, table, previous = "", next = "") {
			if(previous.indexOf(letter) != -1 || next.indexOf(letter) != -1) {
				return table[letter];
			}
			return true;
		} 
		/**
		 * merge two words together base on letter weight
		 * @param array [], String, obj {}
		 *
		 * word1 : word 1
		 * word2 : word 2
		 * table : table containing max repeating character length
		 *
		 * returns array [] 
		 */ 
		function merge(word1, word2, table) {
			word1 = Array.isArray(word1) ? word1 : word1.split("");
			for(let i = 0; i < word2.length; i++) {
				if(!word1[i]) {
					if(!word1[i - 1] || word1[i - 1].indexOf(word2[i]) == -1) {
						word1[i] = word2[i];
					} else if(table[word2[i]]) {
						word1[i] = word2[i];
					} else {
						let index = word1[i - 1].indexOf(word2[i]);
						word1[i - 1] += word1[i - 1].split("").splice(index, 1)[0];
					}
				} else if(word1[i].indexOf(word2[i]) == -1) {
					if(canInsert(word2[i], table, word1[i - 1], word1[i + 1])) {
						word1[i] += word2[i];
					} else {
						if(word1[i - 1] && word1[i - 1].indexOf(word2[i]) != -1) {
							word1[i - 1] += word1[i - 1].split("").splice(word1[i - 1].indexOf(word2[i]), 1)[0];
						}
						if(word1[i + 1] && word1[i + 1].indexOf(word2[i]) != -1) {
							word1[i] += word1[i + 1].split("").splice(word1[i + 1].indexOf(word2[i]), 1)[0];
						}		
					}
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
			let patternTable = getPattern(wordList);
			let allMerged = wordList.reduce((acc, val) => merge(acc, val, patternTable)).join("");
			return trimSequence(allMerged, wordList);
		} 
		//default input
		let input = ["one", "two", "three", "four", "five"];
		let embedded = embed(input);
		console.log(embedded, embedded.length); 
		//challenge input
		getText("wordList.txt").then(result => {
			let embedded = embed(result);
			console.log(embedded, embedded.length); 	
		});
	});
})();		