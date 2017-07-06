/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * get all permutation of inputs
		 * @param array [], String
		 *
		 * input  : all available inputs
		 * curSet : current set of inputs
		 *
		 * returns array []
		 */
		function getAllInput(input, curSet = "") {
			if(curSet.length == input.length) {
				return curSet;
			}
			let allInputs = [];
			for(let i = 0; i < input[curSet.length].length; i++) {
				let result = getAllInput(input, curSet + input[curSet.length][i]);
				if(Array.isArray(result)) {
					allInputs.push(...result);
				} else {
					allInputs.push(result);
				}
			}
			return allInputs;	
		} 
		/**
		 * get all test pairs for all available inputs
		 * @param array []
		 *
		 * input : all available inputs
		 *
		 * returns array []
		 */ 
		function getAllPair(input) {
			let allPairs = []; 
			for(let i = 0; i < input.length - 1; i++) {
				for(j = i + 1; j < input.length; j++) {
					allPairs.push(...getAllInput([input[i], input[j]]));
				}
			}
			return allPairs;
		} 
		/**
		 * get all test pairs for a given input set
		 * @param String, String
		 *
		 * set     : input set
		 * curPair : current pair
		 *
		 * returns array []
		 */
		function getInputPair(set, curPair = "") {
			if(curPair.length == 2) {
				return curPair;
			}
			let inputPairs = [];
			for(let i = 0; i < set.length; i++) {
				let result = getInputPair(set.slice(i + 1), curPair + set[i]);
				if(Array.isArray(result)) {
					inputPairs.push(...result);
				} else {
					inputPairs.push(result);
				}
			}
			return inputPairs;
		} 
		/**
		 * generate all testing pairs
		 * @param array []
		 *
		 * input : input sets
		 *
		 * returns array [] 
		 */
		function getTestPairs(input) {
			let sets = getAllInput(input);
			let pairs = getAllPair(input);
			return pairs;
		} 
		//challenge input
		let input = [['0', '1'], ['A', 'B', 'C'], ['D', 'E', 'F', 'G']];
		let result = getTestPairs(input);
		console.log("Result: ");
		console.log(result);
		console.log(`%cLength: %c${result.length}`, "color : red;", "");
		input = [['0', '1', '2', '3'], ['A', 'B', 'C', 'D'], ['E', 'F', 'G', 'H', 'I']];
		result = getTestPairs(input);
		console.log("Result: ");
		console.log(result);
		console.log(`%cLength: %c${result.length}`, "color : red;", "");
		input = [['0', '1', '2', '3', '4'], ['A', 'B', 'C', 'D', 'E'], ['F', 'G', 'H', 'I'], ['J', 'K', 'L']];
		result = getTestPairs(input);
		console.log("Result: ");
		console.log(result);
		console.log(`%cLength: %c${result.length}`, "color : red;", "");
		});
})();			