/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * get words from text file
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
					if(this.readyState == 4 && this.status == 200) {
						resolve(this.responseText.split("\n").map(word => word.trim()));
					}
				};
				xhttp.open("GET", url, true);
				xhttp.send();
			});
		} 
		/**
		 * group all words by initials
		 * @param array []
		 *
		 * wordList : list of all words
		 *
		 * returns array []
		 */
		function groupWord(wordList) {
			let letters = {};
			for(let i = 0; i < wordList.length; i++) {
				if(letters[wordList[i][0]]) {
					letters[wordList[i][0]].push(wordList[i]);
				} else {
					letters[wordList[i][0]] = [wordList[i]];
				}
			}
			let categories = [];
			for(let letter in letters) {
				categories.push(letters[letter]);
			}
			return categories;
		}
		/**
		 * check if a word is embedded in another word
		 * @param String, String
		 *
		 * tested : word to be tested
		 * other  : word to be tested against
		 *
		 * returns boolean
		 */
		function isEmbed(tested, other) {
			for(let start = 0, i = 0; i < tested.length; i++) {
				let index = other.indexOf(tested[i], start);
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
			let filterEmbed = list => list.filter((word, index) => {
				for(let i = list.length - 1; i >= 0; i--) {
					if(index != i && isEmbed(word, list[i])) {
						return false;
					}
				}
				return true;
			});
			let categories = groupWord(wordList).sort((a, b) => b.length - a.length);
			for(let i = 0; i < categories.length; i++) {
				let list = categories[i].sort((a, b) => a.length - b.length).slice(0, 100);
				categories[i] = filterEmbed(list).sort((a, b) => b.length - a.length);
			}
			return categories.reduce((acc, val) => [...acc, ...val]);
		} 
		/**
		 * find max reusable pattern from a sequence
		 * @param String, String
		 *
		 * word     : word to be tested
		 * sequence : sequence to be tested again
		 *
		 * returns obj {}
		 */
		function maxReusable(word, sequence) {
			let indexUsed = [];
			for(let i = 0; i < word.length; i++) {
				for(let start = 0, max = 0, j = i; j < word.length; j++) {
					let index = sequence.indexOf(word[j], start);
					if(index != -1) {
						indexUsed.push({wIndex : j, sIndex : index});
						start = index + 1;
						max++;
					} else {
						let prevMax = indexUsed.length - max;
						indexUsed = max > prevMax ? indexUsed.slice(-max) : indexUsed.slice(0, prevMax);
						start = 0; 
						max = 0;
					}
				}
			}
		} 
		/**
		 * embed words into a single sequence
		 * @param array []
		 * 
		 * wordList : list of all words
		 *
		 * returns String
		 */
		function embed(wordList) {
			let trimedList = removeEmbed(wordList);
		} 
		//default input
		let input = ["one", "two", "three", "four", "five"];
		let test = removeEmbed(input);
		console.log(test);
		//challenge input
		getText("wordList.txt").then(result => {
			let time = new Date().getTime();
			let test = embed(result);
			let now = new Date().getTime();
			console.log(test, now - time);
		});
	});
})();