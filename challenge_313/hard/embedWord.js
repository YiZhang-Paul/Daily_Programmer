/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * word compressor class
		 * @param String
     * 
     * url : word file URL
		 */
		class Compressor {
			constructor(url) {
				this.wordFile = this.getFile(url);
				this.wordFile.then(list => {
					let start = new Date().getTime();
					let result = this.embed(list);
					let end = new Date().getTime();
					console.log("Result: " + result);
					console.log("Length: " + result.length);
					console.log(`Time Spent: ${end - start}ms(${(end - start) / 1000} seconds)`);
				});
			}
			/**
			 * get all words from file
			 * @param String
			 *
			 * url : text file URL 
			 *
			 * returns obj {}
			 */
			getFile(url) {
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
			 * categorize all words by initials
			 * @param array []
			 *
			 * list : list of all words
			 *
			 * returns array []
			 */
			groupWord(list) {
				let initials = {};
				for(let i = 0; i < list.length; i++) {
					if(initials[list[i][0]]) {
						initials[list[i][0]].push(list[i]);
					} else {
						initials[list[i][0]] = [list[i]];
					}
				}
				let categories = [];
				for(let letter in initials) {
					categories.push(initials[letter]);
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
			isEmbed(tested, other) {
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
			 * check if a list of words is all 
			 * embedded in a given sequence
			 * @param array [], String
			 *
			 * list     : list of all words
			 * sequence : embedded sequence
			 *
			 * returns boolean
			 */
			allEmbed(list, sequence) {
				return list.every(word => this.isEmbed(word, sequence));
			} 
			/**
			 * remove embedded words
			 * @param array []
			 * 
			 * list : list of all words
			 *
			 * returns array []
			 */
			removeEmbed(list) {
				let filterEmbed = words => words.filter((word, index) => {
					for(let i = words.length - 1; i >= 0; i--) {
						if(index != i && this.isEmbed(word, words[i])) {
							return false;
						}
					}
					return true;
				});
				let categories = this.groupWord(list).sort((a, b) => b.length - a.length);
				for(let i = 0; i < categories.length; i++) {
					let category = categories[i].sort((a, b) => a.length - b.length);
					categories[i] = filterEmbed(category).sort((a, b) => b.length - a.length);
				}
				return categories.reduce((acc, val) => [...acc, ...val]);
			} 
			/**
			 * find max reusable pattern betweem two words
			 * @param String, String
			 *
			 * word1 : word 1
			 * word2 : word 2
			 *
			 * returns array []
			 */
			maxReusable(word1, word2) {
				let index1 = [], index2 = [];
				for(let start = 0, max = 0, i = 0; i < word2.length; i++) {
					for(let j = i; j < word2.length; j++) {
						let index = word1.indexOf(word2[j], start);
						if(index != -1) {
							index1.push(index);
							index2.push(j);
							start = index + 1;
							max++;
						} else {
							continue;
						}
					}
					let prevMax = index1.length - max;
					index1 = max > prevMax ? index1.slice(-max) : index1.slice(0, prevMax);
					index2 = max > prevMax ? index2.slice(-max) : index2.slice(0, prevMax);
					start = 0;
					max = 0;
				}
				return [index1, index2];
			} 
			/**
			 * segment words base on break points
			 * @param String, array [], String
			 *
			 * word  : word to be segmented
			 * reuse : break point index
			 *
			 * returns array []
			 */
			segmentWord(word, reuse) {
				let segment = [];
				for(let start = 0, i = 0; i < reuse.length; i++) {
					segment.push(word.slice(start, reuse[i]));
					start = Math.min(reuse[i] + 1, word.length - 1);
				}
				segment.push(word.slice(reuse[reuse.length - 1] + 1));
				return segment;
			} 
			/**
			 * mix two word segments into one
			 * following alphabetical order
			 * @param String, String
			 *
			 * segment1 : segment 1
			 * segment2 : segment 2
			 *
			 * returns String
			 */
			mixSegment(segment1, segment2) {
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
			/**
			 * merge two words together
			 * @param String, String
			 *
			 * word1 : word 1
			 * word2 : word 2
			 *
			 * returns String 
			 */
			merge(word1, word2) {
				let reuseIndex = this.maxReusable(word1, word2);
				let segment1 = reuseIndex[0].length ? this.segmentWord(word1, reuseIndex[0]) : [word1];
				let segment2 = reuseIndex[0].length ? this.segmentWord(word2, reuseIndex[1]) : [word2];
				let merged = "";
				for(let i = 0; i < segment1.length - 1; i++) {
					merged += this.mixSegment(segment1[i], segment2[i]) + word1[reuseIndex[0][i]];
				}
				merged += this.mixSegment(segment1[segment1.length - 1], segment2[segment2.length - 1]);
				return merged;
			} 
			/** 
			 * embed words into a single sequence
			 * @param array []
			 *
			 * list : list of all words
			 *
			 * returns String
			 */
			embed(list) {
				//remove embedded words in word list
				let trimList = this.removeEmbed(list);
				//generate sequence
				let sequence = trimList.reduce((acc, val) => this.merge(acc, val));
				//trim sequence
				for(let i = 0; i < sequence.length; i++) {
					let restSequence = sequence.slice(0, i) + sequence.slice(i + 1);
					if(this.allEmbed(trimList, restSequence)) {
						sequence = restSequence;
						i--;
					}
				}
				return sequence;
			}  
		} 
		//default input
		let compressor1 = new Compressor("defaultInput.txt");
		//challenge input
		let compressor2 = new Compressor("wordList.txt");
	});
})();