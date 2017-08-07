/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * find largest char code in all letters
		 * @param {String} [input] - fizz-buzz input
		 *
		 * @return {int} [largest char code]
		 */
		function maxCharCode(input) {
			return Math.max(...input.match(/\w/g).map(char => char.charCodeAt()));
		}
		/**
		 * count total occurrence of a given letter up to a given line
		 * @param {Array} [lines] - all fizz-buzz lines
		 * @param {char} [letter] - letter to be counted
		 * @param {int} [lineNum] - line number to stop counting
		 *
		 * @return {int} [total occurrence]
		 */
		function getOccurrence(lines, letter, lineNum) {
			return lines.slice(0, lineNum || lines.length).join("").split("").filter(char => char == letter).length;
		}
		/**
		 * interpret rules for a single pair
		 * @param {String} [small] - smaller part
		 * @param {String} [large] - larger part
		 * @param {Array} [curLines] - all current fizz-buzz lines
		 *
		 * @return {Array} [rule]
		 */
		function interpretRule(small, large, curLines) {
			let smallCount = small.split("").map(char => getOccurrence(curLines, char, curLines.length - 1) + char);
			let largeCount = large.split("").map(char => getOccurrence(curLines, char) + char);
			let rules = [];
			for(let i = 0; i < smallCount.length; i++) {
				for(let j = 0; j < largeCount.length; j++) {
					if(small[i] != large[j]) {
						rules.push([smallCount[i], largeCount[j]]);
					}
				}
			}
			return rules;
		}
		/**
		 * get all rules for all pairs
		 * @param {Array} [lines] - all fizz-buzz lines
		 *
		 * @return {Array} [all rules]
		 */
		function getRules(lines) {
			let rules = [];
			for(let i = 0; i < lines.length - 1; i++) {
				rules.push(...interpretRule(lines[i], lines[i + 1], lines.slice(0, i + 2)));
			}
			return rules;
		}
		/**
		 * convert letter into index
		 * @param {char} [letter] - letter to be converted
		 *
		 * @return {int} [index of letter]
		 */
		function charToIndex(letter) {
			return letter.charCodeAt() - 97;
		}
		/**
		 * evaluate an expression
		 * @param {String} [expression] - expression to be evaluated
		 * @param {Array} [nums] - all numbers
		 *
		 * @return {int} [evaluation result]
		 */
		function evalExp(expression, nums) {
			let [total, char] = expression.match(/\d+|[a-z]/g);
			return Number(total) * nums[charToIndex(char)];
		}
		/**
		 * check if a pair satisfy a give nrule
		 * @param {Array} [nums] - all numbers
		 * @param {Array} [rule] - rule to be checked against
		 *
		 * @return {boolean} [test result]
		 */
		function satisfyRule(nums, rule) {
			return evalExp(rule[1], nums) > evalExp(rule[0], nums);
		}
		/**
		 * find out the first unsatisfied rule
		 * @param {Array} [nums] - all numbers
		 * @param {Array} [rules] - all rules
		 *
		 * @return {Array} [rule not satisfied] 
		 */
		function unsatisfyRule(nums, rules) {
			return rules.find(rule => !satisfyRule(nums, rule));
		}
		/**
		 * find reverse fizz-buzz
		 * @param {String} [input] - fizz-buzz input
		 *
		 * @return {Array} [reversed fizz-buzz numbers]
		 */
		function reverseFizzBuzz(input) {
			let nums = new Array(maxCharCode(input) - 96).fill(1);
			let rules = getRules(input.match(/\w+/g));
			let unsatisfied = unsatisfyRule(nums, rules);
			while(unsatisfied) {
				nums[charToIndex(unsatisfied[1].match(/[a-z]/)[0])]++;
				unsatisfied = unsatisfyRule(nums, rules);
			}
			return nums;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = `a
                 ac
                 b
                 a
                 ac
                 ab
                 ac
                 a
                 b
                 ac
                 a
                 abc
                 a`;
    console.log(reverseFizzBuzz(input)); 
    //challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = `a
             b
             a
             a
             b
             a`;
    console.log(reverseFizzBuzz(input));  
    input = `b
             be
             ab
             be
             b
             abe
             b`;
    console.log(reverseFizzBuzz(input)); 
    input = `a
             b
             c
             d
             a
             ab`;
    console.log(reverseFizzBuzz(input));     
	});
})();		