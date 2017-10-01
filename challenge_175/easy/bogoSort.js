/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * bogo bogo sort to sort a string
		 * @param {String} [toSort] - string to sort
		 * @param {String} [target] - target sequence
		 * @param {String} [sequence] - current sequence
		 * @param {int} [iteration] - current iteration
		 *
		 * @return {int} [total iterations used]
		 */
		function bogoBogoSort(toSort, target, sequence = "", iteration = 0) {
			if(!toSort) {
				return target == sequence ? [sequence, iteration] : iteration;
			}
			for(let i = 0; i < toSort.length; i++) {
				let result = bogoBogoSort(toSort.slice(0, i) + toSort.slice(i + 1), target, sequence + toSort[i], iteration + 1);
				if(Array.isArray(result)) {
					return result;
				}
				iteration = result;
			}
			return iteration;
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		console.log(`%clolhe -> hello: %c${bogoBogoSort("lolhe","hello")[1]} Iterations`, "color : skyblue;", "color : orange;");
		console.log(bogoSort([2, 134, 21, 54, 1, 51, 22, 12, 123, 123, 45]));
	});
})();