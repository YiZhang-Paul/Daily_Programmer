/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * detect character class
		 * @param {Array} [chars] - characters in Regex
		 *
		 * @return {Array} [position of detected character class]
		 */
		function findCharClass(chars) {
			let charClass = [], start = chars.indexOf("[");
			while(start != -1) {
				let end = chars.indexOf("]", start + 1);
				charClass.push({start : start, end : end + 1});
				start = chars.indexOf("[", end);
			}
			return charClass;
		}
		/**
		 * check if a character is a letter
		 * @param {char} [char] - character to be tested
		 *
		 * @return {boolean} [test result]
		 */
		function isLetter(char) {
			return /[a-zA-Z]/.test(char);
		}
		/**
		 * check if a character is a digit
		 * @param {char} [char] - character to be tested
		 *
		 * @return {boolean} [test result]
		 */
		function isDigit(char) {
			return /\d/.test(char);
		}
		/**
		 * add alphabet table
		 * @param {char} [start] - starting letter
		 * @param {char} [end] - ending letter
		 *
		 * @return {String} [alphabet table]
		 */
		function addAlphabet(start, end) {
			let alphabet = "";
			for(let i = start.charCodeAt(); i <= end.charCodeAt(); i++) {
				alphabet += String.fromCharCode(i);
			}
			return alphabet;
		}
		/**
		 * add digits 
		 * @param {int} [start] - starting digit
		 * @param {int} [end] - ending digit
		 *
		 * @return {String} [a range of digits]
		 */
		function addDigit(start, end) {
			let digits = "";
			for(let i = start; i <= end; i++) {
				digits += i;
			}
			return digits;
		}
		/**
		 * determine all characters in a character class
		 * @param {Array} [charClass] - character class to be examined
		 *
		 * @return {Array} [all available characters in the character class]
		 */
		function findValidChar(charClass) {
			let start = charClass.indexOf("-");
			while(start != -1) {
				if(charClass[start + 1]) {
					let range = charClass.splice(start - 1, 3);
					if(isLetter(range[0]) && isLetter(range[2])) {
						charClass.splice(start - 1, 0, addAlphabet(range[0], range[2]));
					} else if(isDigit(range[0]) && isDigit(range[2])) {
						charClass.splice(start - 1, 0, addDigit(Number(range[0]), Number(range[2])));
				  }
				}
				start = charClass.indexOf("-", start + 1);
			}
			return charClass.join("").split("");
		}
		/**
		 * apply special characters
		 * @param {Array} [chars] - characters in Regex
		 *
		 * @return {Array} [characters in Regex after applying special characters]
		 */
		function applySpecialChar(chars) {
			for(let i = chars.length - 1; i >= 0; i--) {
				if(chars[i] == "*" || chars[i] == "+") {
					let repeat = chars[i] == "*" ? Math.floor(Math.random() * 31) : Math.floor(Math.random() * 30) + 1;
					chars.splice(i - 1, 0, ...new Array(repeat).fill(chars.splice(i - 1, 2)[0]));
				}
			}
			return chars;
		}
		/**
		 * generate string to match a Regex
		 * @param {String} [regex] - Regex to be matched
		 *
		 * @return {String} [generated string]
		 */
		function matchRegex(regex) {
			regex = regex.split("");
			findCharClass(regex).reverse().forEach(charClass => {
				let curClass = regex.splice(charClass.start, charClass.end - charClass.start);
				regex.splice(charClass.start, 0, findValidChar(curClass.slice(1, -1)));
			});
			return applySpecialChar(regex).map(char => Array.isArray(char) ? char[Math.floor(Math.random() * char.length)] : char).join("");
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = "a+b";
		console.log(input + " -> ");
		let result = matchRegex(input);
		console.log(`%c${result} : %c${/a+b/.test(result)}`, "color : yellow;", "color : orange;");
    input = "abc*d";
		console.log(input + " -> ");
		result = matchRegex(input);
		console.log(`%c${result} : %c${/abc*d/.test(result)}`, "color : yellow;", "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = "[A-Za-z0-9$.+!*'(){},~:;=@#%_\-]*";
		console.log(input + " -> ");
		result = matchRegex(input);
		console.log(`%c${result} : %c${/[A-Za-z0-9$.+!*'(){},~:;=@#%_\-]*/.test(result)}`, "color : yellow;", "color : orange;");
		input = "ab[c-l]+jkm9*10+";
		console.log(input + " -> ");
		result = matchRegex(input);
		console.log(`%c${result} : %c${/ab[c-l]+jkm9*10+/.test(result)}`, "color : yellow;", "color : orange;");
		input = "iqb[beoqob-q]872+0qbq*";
		console.log(input + " -> ");
		result = matchRegex(input);
		console.log(`%c${result} : %c${/iqb[beoqob-q]872+0qbq*/.test(result)}`, "color : yellow;", "color : orange;");
	});
})();		