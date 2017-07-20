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
  	 * slice a string in all possible ways
  	 * @param int, String, int, int, array []
  	 *
  	 * minSize  : minimum length of word slice
  	 * string   : string to be sliced
  	 * share    : number of letters can be shared be between sub-words
  	 * curLen   : current total length of slices
  	 * curSlice : current slice pattern
  	 *
  	 * returns array []
  	 */
  	function sliceString(minSize, string, share, curLen = share, curSlice = []) {
  		if(curLen == string.length || string.length - curLen + share < minSize) {
  			return curLen == string.length ? curSlice : null;
  		}
  		let slices = [];
  		for(let i = minSize; i <= string.length - curLen + share; i++) {
  			let result = sliceString(minSize, string, share, curLen + i - share, [...curSlice, string.slice(curLen - share, curLen + i - share)]);
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
  	 * find maximum conjunction for a given word
  	 * @param int, String, obj {}, int
  	 *
  	 * minSize    : minimum length of sub-words
  	 * word       : word to be checked
  	 * dictionary : dictionary of all words
  	 * share      : number of letters can be shared be between sub-words
  	 *
  	 * returns array [] 
  	 */
  	function maxConjunction(minSize, word, dictionary, share) {
  		return sliceString(minSize, word, share)
  					   .sort((a, b) => b.length - a.length)
  		  		   .find(slices => isValidSlice(slices, dictionary)) || [];
  	} 
  	/**
  	 * find best conjunction from a dictionary
  	 * @param int, array [], int
  	 *
  	 * minSize : minimum length of sub-words
  	 * list    : list of all words
  	 * share   : number of letters can be shared be between sub-words
  	 *
  	 * returns array []
  	 */
  	function bestConjunction(minSize, list, share = 0) {
  		let descList = list.filter(word => word.length >= minSize).sort((a, b) => b.length - a.length);
  		let dictionary = new Set(descList);
  		let best = [];
  		for(let i = 0; i < descList.length; i++) {
  			if(Math.floor(descList[i].length / minSize) > best.length) {
  				let conjunction = maxConjunction(minSize, descList[i], dictionary, share);
  				best = conjunction.length > best.length ? conjunction : best; 
  			}
  		}
  		return best;
  	} 
  	//challenge & bonus input
 		getWordList("wordList.txt").then(list => {
 			let displayResult = (minSize, share = 0) => {
 				let time = new Date().getTime();
 				let result = bestConjunction(minSize, list, share);
 				console.log(`minSize %c${minSize}%c: ${result.join("")} %c(${result.length}: ${result.join(", ")})`, "color : red;", "", "color : yellow;");
 				console.log(`Time Spent: %c${new Date().getTime() - time}ms`, "color : red;");
 			};
 			console.log(`%cChallenge Input: `, "color : red;");
 			for(let i = 2; i <= 10; i++) {
 				displayResult(i);
 			}
 			console.log(`%cBonus Input: `, "color : red;");
 			for(let i = 3; i <= 10; i++) {
 				displayResult(i, 1);
 			}
 		});	
  });
})();  	