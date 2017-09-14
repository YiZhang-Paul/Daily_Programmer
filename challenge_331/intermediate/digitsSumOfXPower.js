/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
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
		console.log(multiply([9, 1, 1, 2, 1], [5, 0]));
	});
})();