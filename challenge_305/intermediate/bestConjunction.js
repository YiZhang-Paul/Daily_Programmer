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
  	//challenge input
  	getWordList("wordList.txt").then(result => {
  		console.log(filterWord(result, 3, "disproportionateness"));
  	});
  });
})();  	