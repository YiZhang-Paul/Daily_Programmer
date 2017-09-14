/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * split number into array of digits
		 * @param {int} [number] - number to be splitted
		 *
		 * @return {Array} [array of all digits]
		 */
		function splitNumber(number) {
			return String(number).split("").map(Number);
		}
		/**
		 * manual implementation of multiplication
		 * @param {Array} [number] - all digits of number to be multiplied
		 * @param {Array} [multiplier] - all digits of number to multiply
		 *
		 * @return {Array} [digits of the product]
		 */
		function multiply(number, multiplier) {
			let curNum = new Array(number.length).fill(0);
			multiplier.reverse().forEach((digit, index) => {
				let curProduct = number.slice();
				for(let i = curProduct.length - 1; i >= 0; i--) {
					const subOperand1 = curProduct[i] * Math.pow(10, curProduct.length - 1 - i);
					const subOperand2 = digit * Math.pow(10, index);
					console.log(subOperand1 * subOperand2);
					//curProduct = add(curProduct, subOperand1 * subOperand2);
				}
				//curNum = add(curNum, curProduct);
			});
			return curNum;
		}
		console.log(multiply(splitNumber(91121), splitNumber(50)));
	});
})();