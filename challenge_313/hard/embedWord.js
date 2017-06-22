/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * backward insert letters right to left
		 * into a word in alphabetical order 
		 * @param String, String
		 *
		 * word    : word to be inserted
		 * letters : letters to insert
		 *
		 * returns String
		 */
		function insert(word, letters) {
			word = word.split("");
			let getInsertIndex = (word, letter) => word.findIndex(a => letter.charCodeAt() < a.charCodeAt());  
			for(let insertIndex = word.length, i = letters.length - 1; i >= 0; i--) {
				let index = getInsertIndex(word, letters[i]);
				if(index != -1 && index <= insertIndex) {
					insertIndex = index + 1;
				} 
				word.splice(insertIndex, 0, letters[i]);
			}
			return word.join("");
		} 
		/**
		 * merge two words
		 * @param String, String
		 *
		 * word1 : word 1 (usually a longer word)
		 * word2 : word 2
		 *
		 * returns String
		 */		
		function merge(word1, word2) {
			let merged = word1.length > word2.length ? word1 : word2;
			let toMerge = merged == word1 ? word2 : word1;
			let start = 0;
			while(toMerge.length) {
				for(let i = 0; i < toMerge.length; i++) {
					let index = merged.indexOf(toMerge[i], start);
					if(index == -1) {
						if(i != toMerge.length - 1) {
							continue;						
						} else {
							merged = merged.slice(0, start + 1) + insert(merged.slice(start + 1), toMerge);
							break;
						}
					} else {
						merged = merged.slice(0, start) + insert(merged.slice(start, index), toMerge.slice(0, i)) + merged.slice(index);
						toMerge = toMerge.slice(i + 1);
						start = index + 1;
						break;
					}
				}
			}
			return merged;
		} 
		/**
		 * embed words
		 * @param array []
		 * 
		 * wordList : list of all words
		 *
		 * returns String
		 */
		function embed(wordList) {
			wordList = wordList.sort((word1, word2) => word1.length - word2.length);
			return wordList.reduce((acc, val) => merge(acc, val));
		} 
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