/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * check if a character is a letter
		 * @param {char} [char] - character to be checked
		 *
		 * @return {boolean} [test result]
		 */
		function isLetter(char) {
			return /[a-zA-Z]/.test(char);
		}
		/**
		 * check if a letter is capitalized
		 * @param {char} [letter] - letter to be checked
		 *
		 * @return {boolean} [test result]
		 */
		function isCapital(letter) {
			return letter == letter.toUpperCase();
		}
		/**
		 * sort letters in a word
		 * @param {String} [word] - word to be sorted
		 *
		 * @return {String} [sorted word]
		 */
		function sortChar(word) {
			let letters = word.toLowerCase().match(/[a-zA-Z]/g).sort((a, b) => a.charCodeAt() - b.charCodeAt());
			return word.split("").map(char => {
				let letter = isLetter(char) ? letters.shift() : char;
				return isLetter(char) && isCapital(char) ? letter.toUpperCase() : letter;
			}).join("");
		}
		/**
		 * mangle up a sentence
		 * @param {String} [sentence] - sentence to be mangled up
		 *
		 * @return {String} [mangled up sentence]
		 */
		function mangleSentence(sentence) {
			return sentence.split(" ").map(word => sortChar(word)).join(" ");
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = "This challenge doesn't seem so hard.";
		console.log(`${input} ->`);
		console.log(`%c${mangleSentence(input)}`, "color : orange;");
		input = "There are more things between heaven and earth, Horatio, than are dreamt of in your philosophy.";
		console.log(`${input} ->`);
		console.log(`%c${mangleSentence(input)}`, "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = "Eye of Newt, and Toe of Frog, Wool of Bat, and Tongue of Dog.";
		console.log(`${input} ->`);
		console.log(`%c${mangleSentence(input)}`, "color : orange;");
		input = "Adder's fork, and Blind-worm's sting, Lizard's leg, and Howlet's wing.";
		console.log(`${input} ->`);
		console.log(`%c${mangleSentence(input)}`, "color : orange;");
		input = "For a charm of powerful trouble, like a hell-broth boil and bubble.";
		console.log(`${input} ->`);
		console.log(`%c${mangleSentence(input)}`, "color : orange;");
	});
})();		