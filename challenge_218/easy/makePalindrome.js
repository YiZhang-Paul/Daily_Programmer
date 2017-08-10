/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * reverse digits of a number
		 * @param {String} [number] - stringified number to be reversed
		 *
		 * @return {String} [stringified reversed number]
		 */
		function reverseNum(number) {
			return number.split("").reverse().join("");
		}
		/**
		 * manual implementation of string addition 
		 * @param {String} [num1] - stringified operand 1
		 * @param {String} [num2] - stringified operand 2
		 *
		 * @return {String} [stringified sum]
		 */
		function add(num1, num2) {
			let longer = num1.length > num2.length ? num1 : num2;
			let shorter = longer == num1 ? num2 : num1;
			[longer, shorter] = [longer.split("").reverse(), shorter.split("").reverse()];
			let carry = 0;
			return longer.reduce((acc, val, index) => {
				let sum = Number(val) + Number(shorter[index] || 0) + (carry ? 1 : 0);
				carry = sum >= 10;
				return (index == longer.length - 1 ? sum : sum % 10) + acc;
			}, "");
		}
		/**
		 * make palindromic numbers and handles long addition
		 * @param {String} [number] - stringified number to be modified
		 *
		 * @return {Array} [stringified transformed number and steps needed]
		 */
		function makeLongPalindrome(number) {
			let steps = 0, reverse = reverseNum(number);
			while(number != reverse) {
				if(++steps > 10000) {
					return [null, null];
				}
				number = add(number, reverse);
				reverse = reverseNum(number);
			}
			return [number, steps];
		}
		/**
		 * make palindromic numbers without long number handling
		 * @param {int} [number] - number to be modified
		 *
		 * @return {Array} [transformed number and steps needed]
		 */
		function makePalindrome(number) {
			let steps = 0, reverse = Number(reverseNum(String(number)));
			while(number != reverse) {
				if(++steps > 10000) {
					return [null, null];
				}
				number += reverse;
				reverse = Number(reverseNum(String(number)));
			}
			return [number, steps];
		}
		/**
		 * find and group all palindromic numbers in a given range
		 * @param {int} [limit] - number range
		 *
		 * @return {Object} [grouped palindromic numbers in range]
		 */
		function findPalindrome(limit = 1000) {
			let palindrome = {};
			for(let i = 1; i <= limit; i++) {
				let result = makePalindrome(i)[0] || "Lychrel";
				palindrome[result] = palindrome[result] ? [...palindrome[result], i] : [i]; 
			}
			return palindrome;
		}
		let time = new Date().getTime();
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = 11;
		let result = makePalindrome(input);
		console.log(`${input} Gets Palindromic After %c${result[1]} %cSteps: %c${result[0]}`, "color : orange;", "", "color : orange;");
    input = 68;
    result = makePalindrome(input);
		console.log(`${input} Gets Palindromic After %c${result[1]} %cSteps: %c${result[0]}`, "color : orange;", "", "color : orange;");
    //challenge input
		console.log(`%cChallenge Input: `, "color : red;");
 		input = 123;
 		result = makePalindrome(input);
		console.log(`${input} Gets Palindromic After %c${result[1]} %cSteps: %c${result[0]}`, "color : orange;", "", "color : orange;");
 		input = 286;
 		result = makePalindrome(input);
		console.log(`${input} Gets Palindromic After %c${result[1]} %cSteps: %c${result[0]}`, "color : orange;", "", "color : orange;");   
 		input = 196196871;
 		result = makeLongPalindrome(String(input));
		console.log(`${input} Gets Palindromic After %c${result[1]} %cSteps: %c${result[0]}`, "color : orange;", "", "color : orange;");   
 		result = findPalindrome();
 		//bonus 1
		console.log(`%cBonus 1: `, "color : red;");
		for(let number in result) {
			if(number != "Lychrel") {
				console.log(`${number} -> %c${result[number].join(" ")}`, "color : orange;");
			}
		}
		//bonus 2
		console.log(`%cBonus 2: `, "color : red;");
		console.log(`Lychrel Numbers: %c${result.Lychrel.join(" ")}`, "color : orange;");
		console.log(new Date().getTime() - time + "ms");
	});
})();		