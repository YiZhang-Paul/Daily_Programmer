/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {	
		/**
		 * generate list of spouses
		 * @param int
		 *
		 * pair : total pair of spouses
		 *
		 * returns array []
		 */
		function getSpouseList(pair) {
			let spouses = "";
			for(let i = "a".charCodeAt(); i < "a".charCodeAt() + pair; i++) {
				spouses += String.fromCharCode(i) + String.fromCharCode(i).toUpperCase();
			}
			return spouses.split("");
		} 
	});
})();				