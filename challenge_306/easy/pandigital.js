/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		//roman numerals
		let numerals1 = {"I" : 1, "V" : 5, "X" : 10, "L" : 50, "C" : 100, "D" : 500, "M" : 1000};
		/**
		 * construct conversion table between 
		 * roman numerals and decimal numbers
		 * @param obj {}
		 *
		 * numerals : symbols for conversion
		 *
		 * returns obj {}
		 */		
		function constructTable(numerals) {
			let table = new Map();
			for(let numeral in numerals) {
				table.set(numeral, numerals[numeral]);
				table.set(numerals[numeral], numeral);
			}
			return table;
		}
		/**
		 * convert digits to roman numerals
		 * @param int, int, obj {}
		 *
		 * digit    : digit to be converted
		 * position : position of digit
		 * table    : table for conversion
		 *
		 * returns String
		 */
		function digitToNumeral(digit, position, table) {
			let zeros = Math.pow(10, position - 1);
			if(digit == 4 || digit == 5) {
				return digit == 4 ? table.get(zeros) + table.get(5 * zeros) : table.get(5 * zeros);
			}
			if(digit == 9) {
				return table.get(zeros) + table.get(10 * zeros);
			}
			return digit > 5 ? table.get(5 * zeros) + table.get(zeros).repeat(digit - 5) : table.get(zeros).repeat(digit);
		} 
		/**
		 * convert decimal number to roman numerals
		 * @param int, obj {}
		 *
		 * number : number to be converted
		 * table  : table for conversion
		 *
		 * returns String
		 */
		function decimalToNumeral(number, table) {
			return number.toString().split("").map((digit, index, array) => 
				digitToNumeral(Number(digit), array.length - index, table)).join("");
		} 
		/**
		 * check if a number is pandigital
		 * @param String
		 *
		 * numeral : number in roman numeral representation
		 *
		 * returns boolean
		 */
		function isPandigital(numeral) {
			return new Set(numeral).size == 7;
		} 
		/**
		 * check if a number is a special pandigital number
		 * @param String
		 *
		 * numeral : number in roman numeral representation
		 *
		 * returns boolean
		 */
		function isSpecialNum(numeral) {
			return numeral.length == 7 && new Set(numeral).size == 7;
		} 
		/**
		 * find pandigital numbers with a given range
		 * @param int, obj {}
		 *
		 * limit : upper limit of numbers
		 * table : table for conversion
		 *
		 * returns array []
		 */
		function findPandigital1(limit, table) {
			let pandigitals = [], specialNums = [];
			for(let i = 1000; i <= limit; i++) {
				let numeral = decimalToNumeral(i, table);
				if(isPandigital(numeral)) {
					pandigitals.push(`${i} (${numeral})`);
				}
				if(isSpecialNum(numeral)) {
					specialNums.push(`${i} (${numeral})`);
				}
			}
			return [pandigitals, specialNums];
		} 
		/**
		 * solution 2 to bonus question
		 */
		//roman numeral table
		let numerals2 = {"M"  : 1000, "CD" : 400, "DC" : 600, "XL" : 40, "LX" : 60, "IV" : 4, "VI" : 6};
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
		function findPandigital2(limit, table) {
			let numerals = [["M"], ["CD", "DC"], ["XL", "LX"], ["IV", "VI"]];
			return allCombination(numerals).filter(combine => numeralToDecimal(combine, table) <= limit)
			                               .map(combine => `${numeralToDecimal(combine, table)} (${combine.join("")})`);
		} 
		//default input
		let result = findPandigital1(2000, constructTable(numerals1));
		console.log(`%cDefault Input: `, "color : red;");
		console.log(result[0].join(", "));
		//bonus input solution 1
		console.log(`%cChallenge Input Solution 1: `, "color : red;");
		console.log(result[1].join(", "));
		//bonus input solution 2
		console.log(`%cChallenge Input Solution 2: `, "color : red;");
		console.log(findPandigital2(2000, numerals2).join(", "));
	});
})();		