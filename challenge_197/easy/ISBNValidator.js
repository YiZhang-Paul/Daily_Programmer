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
		/**
		 * generate ISBN
		 *
		 * @return {String} [ISBN]
		 */
		function makeISBN() {
			let isbn = "", sum = 0;
			for(let i = 0; i < 9; i++) {
				const digit = Math.floor(Math.random() * 10);
				isbn += digit;
				sum += digit * (10 - i);
			}
			const checkSum = sum % 11 ? 11 - sum % 11 : 0;
			return `${isbn[0]}-${isbn.slice(1, 5)}-${isbn.slice(5)}-${checkSum == 10 ? "X" : checkSum}`;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = "0-7475-3269-9";
		console.log(`%c${input} -> %c${isValidISBN(input)}`, "color : skyblue;", "color : orange;");
		input = "1-5688-1111-X";
		console.log(`%c${input} -> %c${isValidISBN(input)}`, "color : skyblue;", "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		console.log(`%c${makeISBN()}`, "color : orange;");
		console.log(`%c${makeISBN()}`, "color : orange;");
		console.log(`%c${makeISBN()}`, "color : orange;");
		console.log(`%c${makeISBN()}`, "color : orange;");
		console.log(`%c${makeISBN()}`, "color : orange;");
	});
})();		