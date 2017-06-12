/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * check if a given list contains 0 
		 * or two integers that add up to 0
		 * @Param array []
		 *
		 * numList : list of all numbers
		 *
		 * returns boolean
		 */
		function checkZeroSum(numList) {
			//change every thing into positive and put into a set
			let set = new Set(numList.map(num => Math.abs(num)));
			return set.size != numList.length || set.has(0);
		}
		//base challenge input
		let input = [1, 2, 3];
		console.log(`[${input}] -> ${checkZeroSum(input)}`);
		input = [-5, -3, -1, 2, 4, 6];
		console.log(`[${input}] -> ${checkZeroSum(input)}`);
		input = [];
		console.log(`[${input}] -> ${checkZeroSum(input)}`);
		input = [-1, 1];
		console.log(`[${input}] -> ${checkZeroSum(input)}`);
		input = [-97364, -71561, -69336, 19675, 71561, 97863];
		console.log(`[${input}] -> ${checkZeroSum(input)}`);
		input = [-53974, -39140, -36561, -23935, -15680, 0];
		console.log(`[${input}] -> ${checkZeroSum(input)}`);
	});
})();