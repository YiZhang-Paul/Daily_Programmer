/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * construct dictionary
		 *
		 * returns obj {}
		 */
		function makeDictionary() {
			let dictionary = new Map();
			for(let i = 0, j = "a".charCodeAt(); i < 26; i++) {
				dictionary.set(String.fromCharCode(j), i + 1);
				dictionary.set(i + 1, String.fromCharCode(j++));
			}
			return dictionary;
		} 
	});
})();		