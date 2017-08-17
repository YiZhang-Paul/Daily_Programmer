/* jslint esversion: 6 */
(() => {
  document.addEventListener("DOMContentLoaded", () => {
  	/**
  	 * retrieve word list
  	 * @param {String} [url] - word list URL
  	 *
  	 * @return {Object} [Promise object]
  	 */
  	function getWordList(url) {
  		return new Promise((resolve, reject) => {
  			let xhttp = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
  			xhttp.onreadystatechange = function() {
  				if(this.readyState == 4 && this.status == 200) resolve(this.responseText.split("\n").map(word => word.trim()));
  				if(this.status == 404) reject("The List is Not Found.");
  			};
  			xhttp.open("GET", url, true);
  			xhttp.send();
  		});
  	}
  	/**
  	 * check if a segment matches a pattern
  	 * @param {String} [segment] - segment to be matched
  	 * @param {String} [pattern] - pattern for matching
  	 *
  	 * @return {boolean} [match result]
  	 */
  	function matchSegment(segment, pattern) {
  		let matchTable = new Map();
  		for(let i = 0; i < pattern.length; i++) {
  			if(!matchTable.has(pattern[i])) {
  				matchTable.set(pattern[i], segment[i]);
  			} else if(matchTable.get(pattern[i]) != segment[i]) {
  				return false;
  			}
  		}
  		return true;
  	}
  	/**
  	 * check if a word contains segments that match a pattern
  	 * @param {String} [word] - word to be matched
  	 * @param {String} [pattern] - pattern for matching
  	 *
  	 * @return {boolean} [match result]
  	 */
  	function isMatch(word, pattern) {
  		if(word.length < pattern.length) {
  			return false;
  		}
  		for(let i = 0; i <= word.length - pattern.length; i++) {
  			if(matchSegment(word.slice(i, i + pattern.length), pattern)) {
  				return true;
  			}
  		}
  		return false;
  	}
  	/**
  	 * find all words that matches a given pattern
  	 * @param {Array} [list] - list of all words
  	 * @param {String} [pattern] - pattern or matching
  	 *
  	 * @return {Array} [all matched words]
  	 */
  	function findMatches(list, pattern) {
  		return list.filter(word => isMatch(word, pattern));
  	}
  	getWordList("https://raw.githubusercontent.com/dolph/dictionary/master/enable1.txt").then(result => {
  		//challenge input
  		console.log(`%cChallenge Input: `, "color : red;");
  		let time = new Date().getTime();
  		let input = "XXYY";
  		console.log(`Pattern -> %c${input}`, "color : skyblue;");
  		console.log(`%c${findMatches(result, input).join("\n")}`, "color : orange;");
  		console.log(`Time Spent: %c${new Date().getTime() - time}ms`, "color : orange;");
  		time = new Date().getTime();
      input = "XXYYZZ";
      console.log(`Pattern -> %c${input}`, "color : skyblue;");
  		console.log(`%c${findMatches(result, input).join("\n")}`, "color : orange;");
  		console.log(`Time Spent: %c${new Date().getTime() - time}ms`, "color : orange;");
  		time = new Date().getTime();
      input = "XXYYX";
      console.log(`Pattern -> %c${input}`, "color : skyblue;");
  		console.log(`%c${findMatches(result, input).join("\n")}`, "color : orange;");
  		console.log(`Time Spent: %c${new Date().getTime() - time}ms`, "color : orange;");
  	}).catch(error => {console.log(error);});
  });
})();  	