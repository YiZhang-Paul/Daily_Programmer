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
  	 * slices a string in all possible ways
  	 * @param int, String, int, array []
  	 *
  	 * minLen   : minimum length of word slice
  	 * string   : string to be sliced
  	 * curLen   : current total length of slices
  	 * curSlice : current slice pattern
  	 * 
  	 * returns array []
  	 */
  	function sliceString(minLen, string, curLen = 0, curSlice = []) {
  		if(string.length - curLen < minLen) {
  			return curLen == string.length ? curSlice : null;
  		}
  		let slices = [];
  		for(let i = minLen; i <= string.length - curLen; i++) {
  			let result = sliceString(minLen, string, curLen + i, [...curSlice, string.slice(curLen, curLen + i)]);
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
  	 * @param int, String, obj {}
  	 *
  	 * minLen     : minimum length of sub-words
  	 * word       : word to be sliced
  	 * dictionary : dictionary of all words
  	 *
  	 * returns array []
  	 */
  	function maxWordConjunction(minLen, word, dictionary) {
  		return sliceString(minLen, word).sort((a, b) => b.length - a.length)
  		                                .find(slices => isValidSlice(slices, dictionary)) || [];
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
  			if(Math.floor(descList[i].length / minLen) > best.length) {
  				let curConjunction = maxWordConjunction(minLen, descList[i], dictionary);
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