/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * generate a fixed number of Fibonacci numbers
		 * @param {int} [len] - total length of number list
		 *
		 * @return {Array} [Fibonacci number list]
		 */
		function getFibonacci(len) {
			let list = [1, 1];
			for(let i = 0; i < len - 2; i++) {
				list.push(list[list.length - 1] + list[list.length - 2]);
			}
			return list;
		}
		/**
		 * generate Fibonacci numbers until a given limit
		 * @param {int} [limit] - maximum number of Fibonacci number
		 *
		 * @return {Array} [Fibonacci number list]
		 */
		function maxFibonacci(limit) {
			let list = [1, 1];
			while(list[list.length - 1] <= limit) {
				list.push(list[list.length - 1] + list[list.length - 2]);
			}
			return list.slice(0, -1);
		}
	});
})();			