/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * check if a number is palindrome
		 * @param int
		 * 
		 * number : number to be checked
		 *
		 * returns boolean
		 */
		function isPalindrome(number) {
			number = number.toString();
			let center = number.length % 2 ? (number.length + 1) / 2 : number.length / 2 + 1;
			for(let i = 0; i < center - 1; i++) {
				if(number[i] != number[number.length - 1 - i]) {
					return false;
				}
			}
			return true;
		} 
		/**
		 * find largest palindromes who has factors 
		 * each with string length of the input and 
		 * its factors
		 * @param int
		 *
		 * integer : input integer
		 * 
		 * returns array []
		 */
		function largestPalindrome(integer) {
			let lowest = integer == 1 ? 0 : Math.pow(10, integer - 1);
			let highest = Number("9".repeat(integer));
			let curPalindrome = 0, factor1, factor2;
			for(let i = highest; i >= lowest; i--) {
				for(let j = i; j >= lowest; j--) {
					let number = i * j;
					if(number <= curPalindrome) {	
						break;
					}
					if(isPalindrome(number)) {
						[curPalindrome, factor1, factor2] = [number, i, j];
					}
				}
			}
			return [curPalindrome, factor1, factor2];
		}
		let time = new Date().getTime();
		let result = largestPalindrome(1);
		console.log(`1 => ${result[0]}, factors: ${result[1]} * ${result[2]}; %c${new Date().getTime() - time}ms`, "color : red;"); 
		time = new Date().getTime();
		result = largestPalindrome(2);
		console.log(`2 => ${result[0]}, factors: ${result[1]} * ${result[2]}; %c${new Date().getTime() - time}ms`, "color : red;");
		time = new Date().getTime();
		result = largestPalindrome(3);
		console.log(`3 => ${result[0]}, factors: ${result[1]} * ${result[2]}; %c${new Date().getTime() - time}ms`, "color : red;");
		time = new Date().getTime();
		result = largestPalindrome(4);
		console.log(`4 => ${result[0]}, factors: ${result[1]} * ${result[2]}; %c${new Date().getTime() - time}ms`, "color : red;");
		time = new Date().getTime();
		result = largestPalindrome(5);
		console.log(`5 => ${result[0]}, factors: ${result[1]} * ${result[2]}; %c${new Date().getTime() - time}ms`, "color : red;");
		time = new Date().getTime();
		result = largestPalindrome(6);
		console.log(`6 => ${result[0]}, factors: ${result[1]} * ${result[2]}; %c${new Date().getTime() - time}ms`, "color : red;");
		time = new Date().getTime();
		result = largestPalindrome(7);
		console.log(`7 => ${result[0]}, factors: ${result[1]} * ${result[2]}; %c${new Date().getTime() - time}ms`, "color : red;");
	});
})();		