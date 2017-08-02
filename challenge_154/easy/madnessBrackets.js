/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * find open bracket
		 * @param {Array} [brackets] - all brackets
		 *
		 * @return {int} [index of deepest open bracket]
		 */
		function findOpenBracket(brackets) {
			return Math.max(brackets.lastIndexOf("("), brackets.lastIndexOf("{"), brackets.lastIndexOf("["));
		}
		/**
		 * find close bracket
		 * @param {Array} [brackets] - all brackets
		 * @param {int} [open] - index of open bracket
		 *
		 * @return {int} [index of deepest close bracket]
		 */
		function findCloseBracket(brackets, open) {
			let indexes = [brackets.indexOf(")", open + 1), brackets.indexOf("}", open + 1), brackets.indexOf("]", open + 1)].filter(index => index != -1);
			return indexes.length ? Math.min(...indexes) : -1;
		}
		/**
		 * match open bracket
		 * @param {char} [open] - open bracket
		 *
		 * @return {char} [matching close bracket]
		 */
		function matchBracket(open) {
			return open == "(" ? ")" : (open == "{" ? "}" : "]");
		}
		/**
		 * check if brackets dismatch or missing
		 * @param {String} [string] - string to be checked
		 *
		 * @return {int} [test result]
		 */
		function vaildateBracket(string) {
			let brackets = string.match(/\{|\}|\(|\)|\[|\]/g);
			let checked = 0;
			while(checked != brackets.length) {
				let open = findOpenBracket(brackets);
				if(open == -1) {
					return "Missing Opening Bracket.";
				}
				let close = findCloseBracket(brackets, open);
				if(close == -1) {
					return "Missing Closing Bracket.";					
				}
				if(matchBracket(brackets[open]) != brackets[close]) {
					return `Mismatched Bracket ${brackets[close]} Instead of ${matchBracket(brackets[open])} Found.`;
				}
				[brackets[open], brackets[close], checked] = [0, 0, checked + 2];
			}
			return brackets;
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = "((your[drink {remember to}]) ovaltine)";
		console.log(`${input} -> %c${vaildateBracket(input)}`, "color : orange;");
		input = "[racket for {brackets (matching) is a} computers]";
		console.log(`${input} -> %c${vaildateBracket(input)}`, "color : orange;");
		input = "[can {and it(it (mix) up ) } look silly]";
		console.log(`${input} -> %c${vaildateBracket(input)}`, "color : orange;");
		//bonus input
		console.log(`%cChallenge Input: `, "color : red;");
		input = "((your[drink {remember to))) ovaltine)";
		console.log(`${input} -> %c${vaildateBracket(input)}`, "color : orange;");
		input = "[can {and it(it (mix) up ) look silly]";
		console.log(`${input} -> %c${vaildateBracket(input)}`, "color : orange;");
		input = "[racket for brackets (matching) is a} computers]";
		console.log(`${input} -> %c${vaildateBracket(input)}`, "color : orange;");
		input = "{years [four score] ago (and seven) our fathers}";
		console.log(`${input} -> %c${vaildateBracket(input)}`, "color : orange;");
	});
})();			