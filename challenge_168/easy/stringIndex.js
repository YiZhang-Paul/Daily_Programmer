/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * display all words with given indexes
		 * @param {String} [string] - string to be referred to
		 * @param {Array} [indexes] - index of all words
		 *
		 * @return {String} [words joined by spaces]
		 */
		function displayWord(string, indexes) {
			let words = string.match(/\w+/g);
			return indexes.map(index => words[index - 1] ? words[index - 1] : "").filter(word => word).join(" ");
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = `...You...!!!@!3124131212 Hello have this is a --- string Solved !!...? to test @\n\n\n#!#@#@%$**#$@ Congratz this!!!!!!!!!!!!!!!!one ---Problem\n\n`;
		let indexes = [12, -1, 1, -100, 4, 1000, 9, -1000, 16, 13, 17, 15];
		console.log(displayWord(input, indexes));
	});
})();		