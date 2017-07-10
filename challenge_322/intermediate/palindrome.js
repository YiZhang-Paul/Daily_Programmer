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
		 * each with string length of the input
		 * @param int
		 *
		 * integer : input integer
		 * 
		 * returns int
		 */
		function largestPalindrome(integer) {
			let lowest = integer == 1 ? 0 : Math.pow(10, integer - 1);
			let highest = Number("9".repeat(integer));
			let curPalindrome = 0;
			for(let i = highest; i >= lowest; i--) {
				for(let j = i; j >= lowest; j--) {
					let number = i * j;
					if(number <= curPalindrome) {	
						break;
					}
					curPalindrome = isPalindrome(number) ? number : curPalindrome;
				}
			}
			return curPalindrome;
		}
		let time = new Date().getTime();
		console.log(`1 => ${largestPalindrome(1)}; %c${new Date().getTime() - time}ms`, "color : red;"); 
		time = new Date().getTime();
		console.log(`2 => ${largestPalindrome(2)}; %c${new Date().getTime() - time}ms`, "color : red;");
		time = new Date().getTime();
		console.log(`3 => ${largestPalindrome(3)}; %c${new Date().getTime() - time}ms`, "color : red;");
		time = new Date().getTime();
		console.log(`4 => ${largestPalindrome(4)}; %c${new Date().getTime() - time}ms`, "color : red;");
		time = new Date().getTime();
		console.log(`5 => ${largestPalindrome(5)}; %c${new Date().getTime() - time}ms`, "color : red;");
		time = new Date().getTime();
		console.log(`6 => ${largestPalindrome(6)}; %c${new Date().getTime() - time}ms`, "color : red;");
		time = new Date().getTime();
		console.log(`7 => ${largestPalindrome(7)}; %c${new Date().getTime() - time}ms`, "color : red;");
	});
})();		