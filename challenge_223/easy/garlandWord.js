/**
 * codes for challenge No.223[Easy]
 */
/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * challenge 0
		 *
		 * find degree of garland word
		 * @param String
		 * 
		 * word : lower case word
		 * 
		 * returns int
		 */
		function garland(word) {
			//initial degree
			var degree = 0;
			//find substring matches in backward direction
			for(var length = word.length - 1; length > 0; length--) {
				if(word.substring(word.length - length) == word.substring(0, length)) {
					//record degree
					degree = length;
					break;
				}
			}
			//return result
			return degree;
		}
		//find degrees
		var inputs = ["programmer", "ceramic", "onion", "alfalfa"];
		var degrees = [];
		for(let input of inputs) {
			degrees.push(garland(input));
		}
		console.log(degrees);
		/**
		 * challenge 1
		 *
		 * print out the chain given a garland word
		 * @param String, int
		 *
		 * word      : a garland word
		 * repeatNum : number of total repeat (chain)
     *
     * returns String
		 */ 
		function printChain(word, repeatNum = 3) {
			//find degree of garland word
			var degree = garland(word);
			//return chain word
			return degree ? word + word.substring(degree).repeat(repeatNum - 1) : "N/A";
		} 
		//print chain words
		var chains = [];
		for(let input of inputs) {
			chains.push(printChain(input));
		}
		console.log(chains);
		/**
		 * challenge 2
		 *
		 * find largest degree of garland word in a word list
		 * @param string
		 * 
		 * url : location of word list
		 *
		 * returns int
		 */
		function largestDegree(url) {
			//access word list
			var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
			xhttp.onreadystatechange = function() {
				if(this.readyState == 4 && this.status == 200) {
					//sort word list from longest to shortest
					var sortedList = this.response.split("\n").sort((a, b) => b.length - a.length);
					//find degree
					var maxDegree = 0;
					for(var i = 0; i < sortedList.length; i++) {
						var currentWord = sortedList[i].trim();
						if(maxDegree >= currentWord.length - 1) {
							break;
						} else {
							//update current max degree
							maxDegree = Math.max(maxDegree, garland(currentWord));
						}
					}
					//return max degree
					console.log(maxDegree);
				}
			};
			xhttp.open("GET", url, true);
			xhttp.send();
		} 
		//find largest degree
		largestDegree("enable1.txt");
	});
})();