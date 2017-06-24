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
		 * sequence : sequence to be tested again
		 * word     : word to be tested
		 *
		 * returns array []
		 */
		function maxReusable(sequence, word) {
			let indexUsed = [];
			for(let start = 0, max = 0, i = 0; i < word.length; i++) {
				for(let j = i; j < word.length; j++) {
					let index = sequence.indexOf(word[j], start);
					if(index != -1) {
						indexUsed.push({wIndex : j, sIndex : index});
						start = index + 1;
						max++;
					} else {
						break;
					}
				}
				let prevMax = indexUsed.length - max;
				indexUsed = max > prevMax ? indexUsed.slice(-max) : indexUsed.slice(0, prevMax);	
				start = 0;
				max = 0;
			}
			return indexUsed;
		} 
		/**
		 * segment words base on break points
		 * @param String, array [], String
		 *
		 * word  : word to be segmented
		 * reuse : reuse index
		 * type  : type of reuse index
		 *
		 * returns array []
		 */
		function segmentWord(word, reuse, type) {
			let segment = [];
			for(let start = 0, i = 0; i < reuse.length; i++) {
				segment.push(word.slice(start, reuse[i][type]));
				start = Math.min(reuse[i][type] + 1, word.length - 1);
			}
			segment.push(word.slice(reuse[reuse.length - 1][type] + 1));
			return segment;
		} 
		/**
		 * combine two word segments into one
		 * @param String, String
		 *
		 * segment1 : segment 1
		 * segment2 : segment 2
		 *
		 * returns String
		 */
		function mixSegment(segment1, segment2) {
			let mixed = "";
			while(segment1.length && segment2.length) {
				let seg1Picked = segment1[0].charCodeAt() <= segment2[0].charCodeAt();
				mixed += seg1Picked ? segment1[0] : segment2[0];
				segment1 = seg1Picked ? segment1.slice(1) : segment1;
				segment2 = seg1Picked ? segment2 : segment2.slice(1);
			}
			mixed += segment1 + segment2;
			return mixed;
		} 
		console.log(mixSegment("asdsa", "ljkzk"));
		/**
		 * merge two words together
		 * @param String, String, array []
		 *
		 * word1 : word 1
		 * word2 : word 2
		 * reuse : max reuse index
		 *
		 * returns String
		 */
		function merge(word1, word2, reuse) { 
			let segment1 = reuse.length ? segmentWord(word1, reuse, "sIndex") : [word1];
			let segment2 = reuse.length ? segmentWord(word2, reuse, "wIndex") : [word2]; 
			let merged = "";
			for(let i = 0; i < segment1.length; i++) {
				merged += mixSegment(segment1[i], segment2[i]);
			}
			return merged;
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
			return trimedList.reduce((acc, val) => {
				//let reuse1 = maxReusable(acc, val);
				//let reuse2 = maxReusable(val, acc);
				//if(reuse1.length >= reuse2.length) {
				//	return merge(acc, val, reuse1);
				//}	else {
				//	return merge(val, acc, reuse2);
				//}			
			});
		} 
		//default input
		let input = ["one", "two", "three", "four", "five"];
		let test = embed(input);
		//challenge input
		getText("wordList.txt").then(result => {
			//let time = new Date().getTime();
			//let test = embed(result);
			//let now = new Date().getTime();
			//console.log(test, now - time);
		});
	});
})();