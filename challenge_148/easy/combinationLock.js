/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * modulo operation
		 * @param {float} [dividend] - dividend
		 * @param {float} [divisor] - divisor
		 *
		 * @return {float} [modulo]
		 */
		function modulo(dividend, divisor) {
			if(dividend === 0) {
				return divisor;
			}
			const remainder = dividend % divisor;
			return remainder < 0 ? divisor + remainder : remainder;
		}
		/**
		 * find how many spins are needed to open a lock
		 * @param {int} [digits] - total number of digits on the dial
		 * @param {Array} [passcode] - passcode for lock
		 *
		 * @return {int} [total spins needed to open the lock]
		 */
		function findSpins(digits, passcode) {
			const [num1, num2, num3] = passcode;
			return digits * 3 + num1 + modulo(num1 - num2, digits) + modulo(num3 - num2, digits);
		}
    //challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		console.log(`%cDials: 5; Passcode: 123 -> %c${findSpins(5, [1, 2, 3])}`, "color : skyblue;", "color : orange;");
	});
})();		