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
						resolve(this.responseText.split("\n").map(word => word.trim()));
					}
				}; 
				xhttp.open("GET", url, true);
				xhttp.send(); 
			});
		} 
		/**
		 * filter dictionary to narrow search range
		 * @param String, array [], int
		 *
		 * input      : user input
		 * dictionary : word dictionary
		 * wordLen    : minimum length of output words
		 *
		 * returns array []
		 */
		function filterDictionary(input, dictionary, wordLen = 5) {
			return dictionary.filter(word => 
				word.length >= wordLen && word[0] == input[0] && word[word.length - 1] == input[input.length - 1]);
		} 
		/**
		 * check if a word is embedded a string
		 * @param String, String
		 *
		 * word   : word to be tested
		 * string : string to be checked against
		 *
		 * returns boolean
		 */
		function isEmbed(word, string) {
			for(let i = 0, j = 0, repeat = false; i < word.length; i++) {
				let index = string.indexOf(word[i], j);
				if(index == -1 && word[i] == word[i - 1] && !repeat) {
					repeat = true;
				} else {
					j = index + 1;
				}
				if(j === 0) {
					return false;
				}
			}
			return true;
		} 
		/**
		 * find possible output for given input string
		 * @param String, array []
		 *
		 * input      : user input
		 * dictionary : word dictionary
		 *
		 * returns array []
		 */
		function findOutput(input, dictionary) {
			return filterDictionary(input, dictionary).filter(word => isEmbed(word, input));
		} 
		//challenge and bonus input
		getWordList("wordList.txt").then(result => {
			console.log(`%cChallenge & Bonus Input: `, "color : red;");
			let time = new Date().getTime();
			let input = "qwertyuytresdftyuioknn";
			console.log(`${input} -> %c${findOutput(input, result).join(" ")}`, "color : yellow;");
    	input = "gijakjthoijerjidsdfnokg";
			console.log(`${input} -> %c${findOutput(input, result).join(" ")}`, "color : yellow;");
			console.log(`Total Time Spent: %c${new Date().getTime() - time}ms`, "color : red;");
		});
	});
})();		