/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * check if an ISBN is valid
		 * @param {String} [isbn] - ISBN to be validated
		 *
		 * @return {boolean} [validation result]
		 */
		function isValidISBN(isbn) {
			let digits = isbn.match(/\w/g);
			return digits.reduce((acc, val, index) => 
				acc + (isNaN(Number(val)) ? 10 : Number(val)) * (digits.length - index), 0) % 11 === 0;
		}
		console.log(isValidISBN("0-7475-3269-9"));
	});
})();		