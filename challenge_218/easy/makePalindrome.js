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
		 * manual implementation of long addition
		 * @param {String} [num1] - stringified operand 1
		 * @param {String} [num2] - stringified operand 2
		 *
		 * @return {String} [stringified addition result]
		 */
		function longAdd(num1, num2) {
			let longer = num1.length > num2.length ? num1.split("").reverse() : num2.split("").reverse();
			let shorter = longer == num1 ? num2.split("").reverse() : num1.split("").reverse();
			let carry = false;
			return longer.reduce((acc, val, index) => {
				let sum = Number(val) + (Number(shorter[index]) || 0) + (carry ? 1 : 0);
				carry = sum >= 10;
				return (index == longer.length - 1 ? sum : sum % 10) + acc;
			}, "");
		}
		/**
		 * make palindromic numbers
		 * @param {String} [number] - stringified number to be modified
		 *
		 * @return {Array} [steps needed for successful transformation and resulting number]
		 */
		function makePalindrome(number) {
			let steps = 0, reverse = reverseNum(number);
			while(number != reverse) {
				if(++steps > 10000) {
					return [null, null];
				}
				number = longAdd(number, reverse);
				reverse = reverseNum(number);
			}
			return [steps, number];
		}
		let time = new Date().getTime();
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = "11";
		let result = makePalindrome(input);
		console.log(`${input} Gets Palindromic After %c${result[0]} %cSteps: %c${result[1]}`, "color : orange;", "", "color : orange;");
    input = "68";
    result = makePalindrome(input);
		console.log(`${input} Gets Palindromic After %c${result[0]} %cSteps: %c${result[1]}`, "color : orange;", "", "color : orange;");
    //challenge input
		console.log(`%cChallenge Input: `, "color : red;");
 		input = "123";
 		result = makePalindrome(input);
		console.log(`${input} Gets Palindromic After %c${result[0]} %cSteps: %c${result[1]}`, "color : orange;", "", "color : orange;");
 		input = "286";
 		result = makePalindrome(input);
		console.log(`${input} Gets Palindromic After %c${result[0]} %cSteps: %c${result[1]}`, "color : orange;", "", "color : orange;");   
 		input = "196196871";
 		result = makePalindrome(input);
		console.log(`${input} Gets Palindromic After %c${result[0]} %cSteps: %c${result[1]}`, "color : orange;", "", "color : orange;");   
 		//bonus 1
		console.log(`%cBonus 1: `, "color : red;");
		//bonus 2
		console.log(`%cBonus 2: `, "color : red;");
		console.log(new Date().getTime() - time + "ms");
	});
})();		