/* jslint esversion: 6 */
(() => {
  document.addEventListener("DOMContentLoaded", () => {
  	/**
  	 * retrieve word list
  	 * @param String
  	 *
  	 * url : URL of word list file
  	 *
  	 * returns obj {}
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
  	 * list  : list of all words
  	 * min   : minimum length of word
  	 * input : input string to be checked
  	 *
  	 * returns array []
  	 */
  	function filterWord(list, min, input) {
  		let letters = new Set(input.split(""));
  		return list.filter(word => 
  			letters.has(word[0]) && word.length >= min && word.length <= input.length);
  	} 
  	/**
  	 * get all slice patterns for a string
  	 * @param int, int, int, array []
  	 *
  	 * minLen   : minimum length of fragment
  	 * length   : total length of string
  	 * curLen   : current total slice length
  	 * curSlice : current slices
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
  	 * slice string following slice patterns
  	 * @param int, String
  	 *
  	 * minLen : minimum length of fragment  	 
  	 * string : string to be sliced
  	 * 
  	 * returns array []
  	 */
  	function sliceString(minLen, string) {
  		return slicePattern(minLen, string.length).map(pattern => {
  			let curPosition = 0;
  			return pattern.map(sliceLen => {
  				curPosition += sliceLen;
  				return string.slice(curPosition - sliceLen, curPosition);
  			});
  		});
  	} 
  	console.log(sliceString(3, "disproportionateness"));
  	//challenge input
  	getWordList("wordList.txt").then(result => {
  		console.log(filterWord(result, 3, "disproportionateness"));
  	});
  });
})();  	