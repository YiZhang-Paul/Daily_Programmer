/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/** 
		 * check if a given string represents numeric value
		 * @param String
		 *
		 * testStr : string to be tested
		 *
		 * returns boolean
		 */
		function isNumber(testStr) {
			let regex = /(^(\d+\.?\d+|\.\d+)(e|e[-+])?\d+$)|(^\d+$)|(^\d*\.?\d+$)/;
			return testStr.trim().split(" ").every(string => regex.test(string));
		}
		/**
		 * check number type
		 * @param String
		 *
		 * test : number string to be checked
		 *
		 * returns String
		 */
		function numType(test) {
			let type = "Number";
			if(test.trim().split(" ").length > 1) {
				type += " -> Array";
			} else if(test.indexOf("e") != -1) {
				type += " -> Exponent Notation";
			} else if(test.length >= 10) {
				type += " -> Big Number";
			}
			return type;
		} 
		/**
		 * check if a given string can be parsed into 
		 * a numeric value and its type
		 * @param String
		 *
		 * testStr : string to be tested
		 *
		 * returns String
		 */
		function maybeNumeric(testStr) {
			return `${testStr} (${isNumber(testStr) ? numType(testStr) : "String"})`;
		} 
		/**
		 * make parse table
		 * @param String
		 *
		 * values : string containing separated values
		 *
		 * returns String
		 */
		function makeParseTable(values) {
			let parsed = values.split("\n").map(row => row.trim().split("`"));
			let colLen = parsed[0].map((col, index) => Math.max(col.length, parsed[1][index].length));
			let rowLen = colLen.reduce((acc, val) => acc + val) + parsed[0].length - 1;
			let table = `|${"-".repeat(rowLen)}|` + "\n";
			parsed.forEach(row => {
				row = row.map((col, index) => col + " ".repeat(colLen[index] - col.length)).join("|");
				table += `|${row}|` + "\n" + `|${"-".repeat(rowLen)}|` + "\n";
			});
			return table;
		} 
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = "123";
		console.log(maybeNumeric(input));
		input = "44.234";
		console.log(maybeNumeric(input));
		input = "0x123N";
		console.log(maybeNumeric(input));
		//bonus 1 input
		console.log(`%cBonus 1 Input: `, "color : red;");
		input = "123 234 345";
		console.log(maybeNumeric(input));
		input = "3.23e5";
		console.log(maybeNumeric(input));
		input = "1293712938712938172938172391287319237192837329";
		console.log(maybeNumeric(input));
		input = ".25";
		console.log(maybeNumeric(input)); 
		//bonus 2 input
		console.log(`%cBonus 2 Input: `, "color : red;");
		input = `2015 4 4\`Challenge #\`261\`Easy
             234.2\`234ggf 45\`00\`number string number (0)`;
    console.log(makeParseTable(input));
	});
})();		