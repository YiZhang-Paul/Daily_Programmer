/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * generate all possible values that 
		 * have factors of a given string length
		 * @param int
		 *
		 * length : string length of given number
		 *
		 * returns array []
		 */
		function allNumber(length) {
			let lowest = length == 1 ? 0 : Math.pow(10, length - 1);
			let highest = Number("9".repeat(length));
			let allNums = new Set();
			for(let i = lowest; i <= highest; i++) {
				for(let j = lowest; j <= highest; j++) {
					allNums.add(i * j);
				}
			}
			return Array.from(allNums);
		} 
		/**
		 * find every number that is a palindrome
		 * @param array []
		 *
		 * numList : list of all numbers
		 *
		 * returns array []
		 */
		function allPalindrome(numList) {
			return numList.filter(number => 
				number.toString() == number.toString().split("").reverse().join(""));
		}
		/**
		 * find largest palindromes who has factors 
		 * each with string length of the input
		 * @param int
		 *
		 * integer : input integer
		 * 
		 * returns int
		 */
		function largestPalindrome(integer) {
			return allPalindrome(allNumber(integer)).sort((a, b) => b - a)[0];
		}
		console.log(largestPalindrome(1)); 
		console.log(largestPalindrome(2)); 
		console.log(largestPalindrome(3)); 
		//console.log(largestPalindrome(4)); 
		//console.log(largestPalindrome(5)); 
		//console.log(largestPalindrome(6)); 
	});
})();		