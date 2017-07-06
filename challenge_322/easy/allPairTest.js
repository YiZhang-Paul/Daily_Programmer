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
		 * check if current test pair 
		 * already exists in an input set
		 * @param String, String
		 *
		 * pair : test pair to be checked 
		 * set  : input set to be checked against
		 *
		 * returns boolean   
		 */
		function hasPair(pair, set) {
			let options = new Set(set);
			return pair.split("").every(option => options.has(option));
		} 
		/**
		 * check test pairs covered 
		 * by a given input set
		 * @param array [], String
		 *
		 * pairs : all test pairs
		 * set   : input set
		 *
		 * returns array []
		 */
		function pairsCovered(pairs, set) {
			return pairs.filter(pair => hasPair(pair, set));
		} 
		/**
		 * check if any input set contains 
		 * a given number of test pairs
		 * @param array [], array [], int
		 *
		 * pairs  : all test pairs
		 * sets   : all input sets
		 * metric : number of test pairs to be covered
		 *
		 * returns boolean
		 */
		function containPairs(pairs, sets, metric) {
			return sets.some(set => pairsCovered(pairs, set).length == metric);
		} 
		/**
		 * remove test pairs 
		 * @param array [], array []
		 * 
		 * pairs  : all test pairs
		 * remove : test pairs to be removed
		 *
		 * returns array []
		 */
		function removePair(pairs, remove) {
			remove = new Set(remove);
			return pairs.filter(pair => !remove.has(pair));
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
			let sets = getAllInput(input), pairs = getAllPair(input);
			let metric = sets[0].length * (sets[0].length - 1) / 2;
			let result = [];
			while(pairs.length) {
				if(!containPairs(pairs, sets, metric)) {
					metric--;
				}
				for(let i = sets.length - 1; i >= 0; i--) {
					let covered = pairsCovered(pairs, sets[i]); 
					if(covered.length == metric) {
						result.push(sets.splice(i, 1)[0]);
						pairs = removePair(pairs, covered);
					}
				}
			}
			return result;
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