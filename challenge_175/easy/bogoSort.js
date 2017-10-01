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
		/**
		 * bogo sort
		 * @param {Array} [toSort] - numbers to sort
		 * @param {Array} [sequence] - current sequence
		 *
		 * @return {Array} [sorted numbers]
		 */
		function bogoSort(toSort, sequence = []) {
			if(!toSort.length) {
				return sequence.slice(0, -1).every((num, index) => num <= sequence[index + 1]) ? sequence : null;
			}
			for(let i = 0; i < toSort.length; i++) {
				let result = bogoSort([...toSort.slice(0, i), ...toSort.slice(i + 1)], [...sequence, toSort[i]]);
				if(Array.isArray(result)) {
					return result;
				}
			}
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		console.log(`%clolhe -> hello: %c${bogoBogoSort("lolhe","hello")[1]} Iterations`, "color : skyblue;", "color : orange;");
		//bonus input
		console.log(`%cBonus Input: `, "color : red;");
		console.log(`%c${[2, 134, 21, 54, 1, 22, 12, 123, 123, 45].join(" ")} -> `, "color : skyblue;");
		console.log(`%c${bogoSort([2, 134, 21, 54, 1, 22, 12, 123, 123, 45]).join(" ")} (Bogo Sort)`, "color : orange;");
	});
})();