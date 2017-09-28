/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * retrieve text
		 * @param {String} [url] - text URL
		 *
		 * @return {Object} [Promise object]
		 */
		function getText(url) {
			return new Promise((resolve, reject) => {
				let xhttp = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
				xhttp.onreadystatechange = function() {
					if(this.readyState == 4 && this.status == 200) resolve(this.responseText);
					else if(this.status == 404) reject("Text Not Found.");
				};
				xhttp.open("GET", url, true);
				xhttp.send();
			});
		}
		/**
		 * get content of a book
		 * @param {String} [book] - book to check
		 *
		 * @return {String} [content of book]
		 */
		function getContent(book) {
			return book.match(/INTRODUCTION.\s*\n(\w|\W)*(?=End of the Project Gutenberg)/)[0];
		}
		/**
		 * count words in a book
		 * @param {String} [book] - book to count from
		 *
		 * @return {Object} [occurrence of each word in the book]
		 */
		function countWord(book) {
			let counts = new Map();
			book.match(/[a-zA-Z]+/g).forEach(word => {
				const curWord = word.toLowerCase();
				counts.set(curWord, counts.has(curWord) ? counts.get(curWord) + 1 : 1);
			});
			return counts;
		}
		/**
		 * show word occurrences of a book
		 * @param {String} [book] - book to count from
		 */
		function wordInBook(book) {
			let result = "{";
			countWord(getContent(book)).forEach((count, word) => {
				result += `${word} : ${count},\n`;
			});
			return result.slice(0, -2) + "}";
		}
		getText("book.txt").then(text => {
			//challenge & bonus input
			console.log(`%cChallenge & Bonus Input: `, "color : red;");
			console.log(`%c${wordInBook(text)}`, "color : orange;");
		}).catch(error => {console.log(error);});
	});
})();		