/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * read all operations on each term
		 * @param {String} [operations] - all operations on one line
		 *
		 * @return {Array} [all operations on each term]
		 */
		function getOperation(operations) {
			return operations.split(" ").map(operation => [operation[0], Number(operation.slice(1))]);
		}
		/**
		 * apply all operations on a term
		 * @param {float} [term] - current term to apply operations
		 * @param {Array} [operations] - all operations to apply
		 *
		 * @return {float} [result after all operations]
		 */
		function applyOperation(term, operations) {
			let result = term;
			for(let i = 0; i < operations.length; i++) {
				if(operations[i][0] == "+") result += operations[i][1];
				else if(operations[i][0] == "-") result -= operations[i][1];
				else if(operations[i][0] == "*") result *= operations[i][1];
				else result /= operations[i][1];
			}
			return result;
		}
		/**
		 * generate a given number of terms in a recurrence relation
		 * @param {String} [operations] - all operations to apply
		 * @param {float} [start] - starting term
		 * @param {int} [total] - total terms to generate
		 *
		 * @return {Array} [all terms]
		 */
		function getTerms(operations, start, total) {
			const allOperation = getOperation(operations);
			let terms = [start];
			for(let i = 1; i <= total; i++) {
				terms.push(applyOperation(terms[terms.length - 1], allOperation));
			}
			return terms;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = ["*3 +2 *2", 0, 7];
		console.log(`%c${input.join(" ")} -> `, "color : skyblue;");
		console.log(`%c${getTerms(...input).map((term, index) => `Term ${index}: ${term}`).join("\n")}`, "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = ["*2 +1", 1, 10];
		console.log(`%c${input.join(" ")} -> `, "color : skyblue;");
		console.log(`%c${getTerms(...input).map((term, index) => `Term ${index}: ${term}`).join("\n")}`, "color : orange;");
		input = ["*-2", 1, 8];
		console.log(`%c${input.join(" ")} -> `, "color : skyblue;");
		console.log(`%c${getTerms(...input).map((term, index) => `Term ${index}: ${term}`).join("\n")}`, "color : orange;");
		input = ["+2 *3 -5", 0, 10];
		console.log(`%c${input.join(" ")} -> `, "color : skyblue;");
		console.log(`%c${getTerms(...input).map((term, index) => `Term ${index}: ${term}`).join("\n")}`, "color : orange;");
	});
})();		