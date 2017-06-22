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
			word2.split("").forEach((letter, index) => {
				if(!word1[index]) {
					word1[index] = letter;
				} else if(word1[index].indexOf(letter) == -1) {
					word1[index] += letter;
				}
			});
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
			wordList.forEach(word => {
				for(let start = 0, i = 0; i < word.length; i++) {
					let index = sequence.indexOf(word[i], start);
					useFlag[index]++;
					start = index + 1;
				}
			});
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
			let allMerged = wordList.sort((a, b) => a.length - b.length)
				.reduce((acc, val) => merge(acc, val)).join("");
			return trimSequence(allMerged, wordList);
		} 
		//default input
		let input = ["one", "two", "three", "four", "five"];
		let embedded = embed(input);
		console.log(embedded, embedded.length); 
		//challenge input
		let promise = getText("wordList.txt");
		promise.then(result => {
			let embedded = embed(result);
			console.log(embedded, embedded.length); 	
		});
	});
})();		