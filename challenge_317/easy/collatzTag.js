/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * generate collatz tag 
		 * @param String
		 *
		 * aString : string of a's
		 * 
		 * returns array []
		 */ 
		function collatzTag(aString) {
			let tags = [];
			while(aString.length > 1) {
				aString = aString.slice(2) + (aString[0] == "a" ? "bc" : (aString[0] == "b" ? "a" : "aaa"));
				tags.push(aString);
			}
			return tags;
		} 
		//challenge input 1
		console.log("Challenge 1:");
		collatzTag("aaa").forEach(tag => {
			console.log(tag);
		});
		//challenge input 2
		console.log("Challenge 2:");
		collatzTag("aaaaaaa").forEach(tag => {
			console.log(tag);
		});
	});
})(); 		