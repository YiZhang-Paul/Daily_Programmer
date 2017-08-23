/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * find greatest common divisor
		 * @param {int} [num1] - number 1
		 * @param {int} [num2] - number 2
		 *
		 * @return {int} [greatest common divisor]
		 */
		function findGCD(num1, num2) {
			return num1 % num2 ? findGCD(num2, num1 % num2) : num2;
		}
		/**
		 * simplify fraction
		 * @param {String} [fraction] - fraction to be simplified
		 *
		 * @return {String} [simplified fraction]
		 */
		function simplifyFraction1(fraction) {
			fraction = fraction.split(" ").map(num => Number(num));
			let gcd = findGCD(...fraction.slice().sort((a, b) => b - a));
			return fraction.map(num => num / gcd).join(" ");
		}
		/**
		 * check if relations can be expanded
		 * @param {Object} [table] - relation table
		 *
		 * @return {Object} [expanded relation table]
		 */
		function expandTable(table) {
			let keys = [];
			table.forEach((value, key) => {
				keys.push(key);
			});
			let canSimplify = true;
			while(canSimplify) {
				canSimplify = false;
				for(let i = 0; i < keys.length; i++) {
					let value = new Set(table.get(keys[i]));
					for(let j = 0; j < keys.length; j++) {
						if(value.has(keys[j])) {
							table.set(keys[i], Array.from(value).join("").replace(keys[j], table.get(keys[j])));
							canSimplify = true;
						}
					}
				}
			}
			return table;
		}
		/**
		 * construct relation table between variables
		 * @param {String} [relations] - relations between variables
		 *
		 * @return {Object} [relation table]
		 */
		function getTable(relations) {
			let table = new Map();
			relations.split("\n")
			         .map(line => line.trim().split(" "))
			         .forEach(relation => {
			           table.set(relation[0], relation[1]);
							 });
			return expandTable(table);
		}
		/**
		 * expand expression
		 * @param {String} [expression] - expression to be expanded
		 * @param {Object} [table] - relation table
		 *
		 * @return {String} [expanded expression]
		 */
		function expandExpression(expression, table) {
			for(let i = expression.length - 1; i >= 0; i--) {
				if(table.has(expression[i])) {
					expression = expression.slice(0, i) + table.get(expression[i]) + expression.slice(i + 1);
				}
			}
			return expression;
		}
		/**
		 * sort characters in ascending order
		 * @param {String} [chars] - characters to be sorted
		 *
		 * @return {String} [sorted characters]
		 */
		function ascChars(chars) {
			return chars.split("").sort((a, b) => a.charCodeAt() - b.charCodeAt()).join("");
		}
		/**
		 * simplify fraction
		 * @param {String} [fraction] [fraction to be simplified]
		 * @param {Object} [table] - relation table
		 *
		 * @return {String} [simplified fraction]
		 */
		function simplifyFraction2(fraction, table) {
			let [denominator, numerator] = fraction.split(" ").map(expression => expandExpression(expression, table));
			for(let i = numerator.length - 1; i >= 0; i--) {
				let index = denominator.search(numerator[i]);
				if(index != -1) {
					denominator = denominator.slice(0, index) + denominator.slice(index + 1);
					numerator = numerator.slice(0, i) + numerator.slice(i + 1);
				}
			}
			return `${denominator ? ascChars(denominator) : 1} ${numerator ? ascChars(numerator) : 1}`;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = "4 8";
		console.log(`%c${input} -> %c${simplifyFraction1(input)}`, "color : skyblue;", "color : orange;");
    input = "1536 78360";
		console.log(`%c${input} -> %c${simplifyFraction1(input)}`, "color : skyblue;", "color : orange;");
    input = "51478 5536";
		console.log(`%c${input} -> %c${simplifyFraction1(input)}`, "color : skyblue;", "color : orange;");
    input = "46410 119340";
		console.log(`%c${input} -> %c${simplifyFraction1(input)}`, "color : skyblue;", "color : orange;");
    input = "7673 4729";
		console.log(`%c${input} -> %c${simplifyFraction1(input)}`, "color : skyblue;", "color : orange;");
    input = "4096 1024";
		console.log(`%c${input} -> %c${simplifyFraction1(input)}`, "color : skyblue;", "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let relations = `x cb
                     y ab
                     z xa`;
		let table = getTable(relations);
		input = "ab cb";
		console.log(`%c${input} -> %c${simplifyFraction2(input, table)}`, "color : skyblue;", "color : orange;");
		input = "ab x";
		console.log(`%c${input} -> %c${simplifyFraction2(input, table)}`, "color : skyblue;", "color : orange;");
		input = "x y";
		console.log(`%c${input} -> %c${simplifyFraction2(input, table)}`, "color : skyblue;", "color : orange;");
		input = "z y";
		console.log(`%c${input} -> %c${simplifyFraction2(input, table)}`, "color : skyblue;", "color : orange;");
		input = "z xay";
		console.log(`%c${input} -> %c${simplifyFraction2(input, table)}`, "color : skyblue;", "color : orange;");                 
	});
})();			