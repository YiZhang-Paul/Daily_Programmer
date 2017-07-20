/* jslint esversion: 6 */
(() => {
  document.addEventListener("DOMContentLoaded", () => {
  	/**
  	 * retrieve word list
  	 * @param String
  	 *
  	 * url : URL of word list file
  	 *
  	 * returns array []
  	 */ 
  	function getWordList(url) {
  		return new Promise((resolve, reject) => {
  			let xhttp = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
  			xhttp.onreadystatechange = function() {
  				if(this.readyState == 4 && this.status == 200) {
  					resolve(this.responseText.split("\n").map(word => word.trim()).filter(word => word && !/\W/.test(word)));
  				}
  			};
  			xhttp.open("GET", url, true);
  			xhttp.send();
  		});
  	} 
  	/**
  	 * filter word list to narrow down search area
  	 * @param array [], int
  	 *
  	 * list   : list of all words
  	 * minLen : minimum length of word
  	 *
  	 * returns array []
  	 */
  	function filterList(list, minLen) {
  		return list.filter(word => word.length >= minLen);
  	} 
  	/**
  	 * get all possible slice patterns for a string
  	 * @param int, int, int, array []
  	 *
  	 * minLen   : minimum length of word slice
  	 * length   : total length of string
  	 * curLen   : current total length of slices
  	 * curSlice : current slice pattern
  	 * 
  	 * returns array []
  	 */
  	function slicePattern(minLen, length, curLen = 0, curSlice = []) {
  		if(length - curLen < minLen) {
  			return curLen == length ? curSlice : null;
  		}
  		let slices = [];
  		for(let i = minLen; i <= length - curLen; i++) {
  			let result = slicePattern(minLen, length, curLen + i, [...curSlice, i]);
  			if(result) {
  				if(Array.isArray(result[0])) {
  					slices.push(...result);
  				} else {
  					slices.push(result);
  				}
  			}
  		}
  		return slices;
  	} 
  	/**
  	 * slice string using a slice pattern
  	 * @param String, array []
  	 *
  	 * string  : string to be sliced
  	 * pattern : slice pattern
  	 *
  	 * returns array []
  	 */
  	function sliceString(string, pattern) {
  		let curPosition = 0;
  		return pattern.map(sliceLen => {
  			curPosition += sliceLen;
  			return string.slice(curPosition - sliceLen, curPosition);
  		});
  	} 
  	/**
  	 * check if all slices of a word
  	 * can be found in the dictionary
  	 * @param array [], obj {}
  	 *
  	 * slices     : word slices
  	 * dictionary : dictionary of all words
  	 *
  	 * returns boolean 
  	 */
  	function isValidSlice(slices, dictionary) {
  		return !slices.some(slice => !dictionary.has(slice));
  	} 
  	/**
  	 * find best conjunction for a given word
  	 * @param int, String, array [], obj {}
  	 *
  	 * minLen     : minimum length of sub-words
  	 * string     : string to be checked
  	 * allSlice   : slice patterns
  	 * dictionary : dictionary of all words
  	 *
  	 * returns array []
  	 */
  	function maxWordConjunction(minLen, string, allSlice, dictionary) {
  		let bestSlice = allSlice.find(slice => isValidSlice(sliceString(string, slice), dictionary));
  		return bestSlice ? sliceString(string, bestSlice) : [];
  	} 
  	/**
  	 * find best conjunction from a dictionary
  	 * @param int, array []
  	 *
  	 * minLen : minimum length of sub-words
  	 * list   : list of all words
  	 *
  	 * returns array []
  	 */
  	function bestConjunction(minLen, list) {
  		let descList = filterList(list.slice().sort((b, a) => a.length - b.length), minLen);
  		let dictionary = new Set(descList);
  		let best = [];
  		for(let i = 0; i < descList.length; i++) {
  			let allSlice = slicePattern(minLen, descList[i].length).sort((a, b) => b.length - a.length);
  			if(allSlice[0].length > best.length) {
  				let curConjunction = maxWordConjunction(minLen, descList[i], allSlice, dictionary);
  				best = curConjunction.length > best.length ? curConjunction : best;
  			}
  		}
  		return best;
  	} 
  	//challenge input
  	getWordList("wordList.txt").then(result => {
  		let displayOutput = minSize => {
  			let time = new Date().getTime();
  			let best = bestConjunction(minSize, result);
		  	console.log(`minSize %c${minSize}%c: ${best.join("")} %c(${best.length}: ${best.join(", ")})`, "color : red;", "", "color : yellow;");
  			console.log(`Time Spent: %c${new Date().getTime() - time}ms`, "color : red;");
  		};
  		for(let i = 2; i <= 10; i++) {
  			displayOutput(i);
  		}
  	});
  });
})();  	