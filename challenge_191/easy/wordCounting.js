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
		getText("book.txt").then(text => {
			console.log(getContent(text));
		}).catch(error => {console.log(error);});
	});
})();		