/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		//roman numerals
		let numerals = {"I" : 1, "V" : 5, "X" : 10, "L" : 50, "C" : 100, "D" : 500, "M" : 1000};
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
		 * @param int, obj {}
		 *
		 * number : number to be examined
		 * table  : table for conversion
		 *
		 * returns boolean
		 */
		function isPandigital(number, table) {
			return new Set(decimalToNumeral(number, table)).size == 7;
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
		function findPandigital(limit, table) {
			let pandigitals = [];
			for(let i = 1000; i <= limit; i++) {
				if(isPandigital(i, table)) {
					pandigitals.push(`${i} (${decimalToNumeral(i, table)})`);
				}
			}
			return pandigitals;
		} 
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		console.log(findPandigital(2000, constructTable(numerals)).join(", "));
	});
})();		