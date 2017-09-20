/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * get all operations on each term
		 * @param {String} [operations] - all operations on one line
		 *
		 * @return {Array} [all operations on each term]
		 */
		function getOperation(operations) {
			return operations.split(" ").map(operation => [operation[0], operation.slice(1)]);
		}
		/**
		 * apply all operations on a term
		 * @param {float} [term] - current term to apply all operations
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
	});
})();		