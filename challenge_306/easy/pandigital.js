/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		//roman numeral table
		let table = {"M" : 1000, "CD" : 400, "DC" : 600, "XL" : 40, "LX" : 60, "IV" : 4, "VI" : 6};
		/**
		 * find combination of all inputs from all groups
		 * @param array [], array []
		 * 
		 * inputs : all groups of inputs
		 *
		 * returns array []
		 */
		function allCombination(inputs, curCombine = []) {
			if(curCombine.length == inputs.length) {
				return curCombine;
			}
			let combination = [];
			for(let i = 0; i < inputs[curCombine.length].length; i++) {
				let result = allCombination(inputs, [...curCombine, inputs[curCombine.length][i]]);
				if(curCombine.length == inputs.length - 1) {
					combination.push(result);
				} else {
					combination.push(...result);
				}
			}
			return combination;
		} 
		/**
		 * convert roman numeral into decimal numbers
		 * @param array [], obj {}
		 *
		 * numerals : roman numerals
		 * table    : convertion table for roman numerals
		 *
		 * returns int
		 */
		function numeralToDecimal(numerals, table) {
			return numerals.map(numeral => table[numeral]).reduce((acc, val) => acc + val);
		} 
		/**
		 * find all pandigital numbers which uses each symbol exactly once
		 * @param int, obj {}
		 *
		 * limit : upper limit of numbers to be checked
		 * table : convertion table for roman numerals
		 *
		 * returns array []
		 */
		function findPandigital(limit, table) {
			let numerals = [["M"], ["CD", "DC"], ["XL", "LX"], ["IV", "VI"]];
			return allCombination(numerals).map(combine => `${numeralToDecimal(combine, table)} -> ${combine.join("")}`);
		} 
		//challenge input
		findPandigital(2000, table).forEach(number => {
			console.log(number);
		});
	});
})();		