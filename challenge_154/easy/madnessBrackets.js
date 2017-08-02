/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * check if a bracket is open bracket
		 * @param {char} [bracket] - bracket to be checked
		 *
		 * @return {boolean} [test result]
		 */
		function isOpen(bracket) {
			return new Set("({[").has(bracket);
		}
		/**
		 * check if a bracket is close bracket
		 * @param {char} [bracket] - bracket to be checked
		 *
		 * @return {boolean} [test result]
		 */
		function isClose(bracket) {
			return new Set(")}]").has(bracket);
		}
		/**
		 * find deepest nested open bracket
		 * @param {Array} [brackets] - all brackets
		 *
		 * @return {int} [index of open bracket]
		 */
		function openIndex(brackets) {
			return brackets.length - 1 - brackets.slice().reverse().findIndex(bracket => isOpen(bracket));
		}
		/**
		 * find deepest nested close bracket
		 * @param {Array} [brackets] - all brackets
		 * @param {int} [open] - index of matching open bracket
		 *
		 * @return {int} [index of close bracket]
		 */
		function closeIndex(brackets, open) {
			return brackets.slice(open + 1).findIndex(bracket => isClose(bracket)) + open + 1;
		}
		/**
		 * get total number of open brackets
		 * @param {Array} [brackets] - all brackets
		 *
		 * @return {int} [total number of open brackets]
		 */
		function totalOpen(brackets) {
			return brackets.filter(bracket => isOpen(bracket)).length;
		}
		/**
		 * get total number of close brackets
		 * @param {Array} [brackets] - all brackets
		 *
		 * @return {int} [total number of close brackets]
		 */
		function totalClose(brackets) {
			return brackets.filter(bracket => isClose(bracket)).length;
		}
		/**
		 * generate matching close bracket for a given open bracket
		 * @param {char} [open] - open bracket
		 *
		 * @return {char} [matching close bracket]
		 */
		function generateClose(open) {
			return open == "(" ? ")" : (open == "{" ? "}" : "]");
		}
		/**
		 * check if brackets matches up or are missing
		 * @param {String} [string] - string to be validated
		 *
		 * @return {Array} [test result]
		 */
		function validateBracket(string) {
			let brackets = string.match(/\{|\}|\(|\)|\[|\]/g);
			let [opens, closes] = [totalOpen(brackets), totalClose(brackets)];
			if(opens != closes) {
				return ["Error", `Missing ${opens > closes ? "Closing" : "Opening"} Bracket.`];
			}
			let checked = 0;
			while(checked != brackets.length) {
				let oIndex = openIndex(brackets);
				let cIndex = closeIndex(brackets, oIndex);
				if(generateClose(brackets[oIndex]) != brackets[cIndex]) {
					return ["Error", `Mismatched Bracket ${brackets[cIndex]} Instead of ${generateClose(brackets[oIndex])} Found.`];
				}
				[brackets[oIndex], brackets[cIndex], checked] = [0, 0, checked + 2];
			}
		}
		/**
		 * find deepest nested brackets and its contents
		 * @param {String} [string] - string to be tested
		 *
		 * @return {Array} [search result]
		 */
		function deepestBracket(string) {
			return /\((\w|\s)*\)|\{(\w|\s)*\}|\[(\w|\s)*\]/g.exec(string); 
		}
		/**
		 * decode brackets
		 * @param {String} [string] - string to be decoded
		 *
		 * @return {String} [decoded string]
		 */
		function decode(string) {
			let validateError = validateBracket(string);
			if(validateError) {
				return validateError[1];
			}
			let decoded = "", deepest = deepestBracket(string);
			while(deepest) {
				decoded += " " + deepest[0].slice(1, -1);
				string = string.slice(0, deepest.index) + string.slice(deepest.index + deepest[0].length);
				deepest = deepestBracket(string);
			}
			return decoded.split(" ").filter(word => word).map(word => word.trim()).join(" ");
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = "((your[drink {remember to}]) ovaltine)";
		console.log(`${input} -> %c${decode(input)}`, "color : orange;");
		input = "[racket for {brackets (matching) is a} computers]";
		console.log(`${input} -> %c${decode(input)}`, "color : orange;");
		input = "[can {and it(it (mix) up ) } look silly]";
		console.log(`${input} -> %c${decode(input)}`, "color : orange;");
		//bonus input
		console.log(`%cChallenge Input: `, "color : red;");
		input = "((your[drink {remember to))) ovaltine)";
		console.log(`${input} -> %c${decode(input)}`, "color : orange;");
		input = "[can {and it(it (mix) up ) look silly]";
		console.log(`${input} -> %c${decode(input)}`, "color : orange;");
		input = "[racket for brackets (matching) is a} computers]";
		console.log(`${input} -> %c${decode(input)}`, "color : orange;");
		input = "{years [four score] ago (and seven) our fathers}";
		console.log(`${input} -> %c${decode(input)}`, "color : orange;");
	});
})();			