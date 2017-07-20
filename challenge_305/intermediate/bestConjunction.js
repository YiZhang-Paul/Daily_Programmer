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
  					resolve(this.responseText.split("\n").map(word => word.trim()).filter(word => !/\W/.test(word)));
  				}
  			};
  			xhttp.open("GET", url, true);
  			xhttp.send();
  		});
  	} 
  	/**
  	 * filter word list to narrow down search area
  	 * @param array []
  	 *
  	 * list   : list of all words
  	 * minLen : minimum length of word
  	 * input  : input string to be checked
  	 *
  	 * returns array []
  	 */
  	function filterList(list, minLen, input) {
  		let letters = new Set(input.split(""));
  		return list.filter(word =>
  			letters.has(word[0]) && word.length >= minLen && word.length <= input.length);
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
  	 * @param array [], array []
  	 *
  	 * slices : word slices
  	 * list   : list of all words
  	 *
  	 * returns boolean 
  	 */
  	function isValidSlice(slices, list) {
  		return !slices.some(slice => list.indexOf(slice) == -1);
  	} 
  	/**
  	 * find best conjunction
  	 * @param int, String, array []
  	 *
  	 * minLen : minimum length of sub-words
  	 * string : string to be checked
  	 * list   : list of all words
  	 *
  	 * returns array []
  	 */
  	function maxWordConjunction(minLen, string, list) {
  		list = filterList(list, minLen, string).sort((a, b) => a.length - b.length);
  		let allSlice = slicePattern(minLen, string.length).sort((a, b) => b.length - a.length);
  		let bestSlice = allSlice.find(slice => isValidSlice(sliceString(string, slice), list));
  		return sliceString(string, bestSlice);
  	} 
  	//challenge input
  	getWordList("wordList.txt").then(result => {
  		let time = new Date().getTime();
  		let input = "disproportionateness";
  		let best = maxWordConjunction(3, input, result);
	  	console.log(`minSize 3: ${input} %c(${best.length}: ${best.join(", ")})`, "color : yellow;");
  		console.log(`Time Spent: %c${new Date().getTime() - time}ms`, "color : red;");
  	});
  });
})();  	