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
		 * manual implementation of summation
		 * @param {Array} [number] - all digits of number to be added
		 * @param {Array} [adding] - all digits of number to add
		 *
		 * @return {Array} [digits of the sum]
		 */
		function add(number, adding) {
			let sum = number.length > adding.length ? number.slice() : adding.slice();
			let toAdd = number.length > adding.length ? adding.slice() : number.slice();
			let carry = false;
			toAdd.reverse().forEach((digit, index) => {
				const curIndex = sum.length - 1 - index;
				const subSum = sum[curIndex] + digit + (carry ? 1 : 0);
				sum[curIndex] = subSum % 10;
				carry = subSum >= 10; 
			});
			if(carry) {
				return add(sum, [1, ...new Array(toAdd.length).fill(0)]);
			}
			return sum;
		}
		/**
		 * manual implementation of multiplication
		 * @param {Array} [number] - all digits of number to be multiplied
		 * @param {Array} [multiplier] - all digits of number to multiply
		 *
		 * @return {Array} [digits of the product]
		 */
		function multiply(number, multiplier) {
			let product = new Array(number.length).fill(0);
			multiplier.reverse().forEach((digit, index) => {
				let subProduct = number.slice();
				for(let i = subProduct.length - 1; i >= 0; i--) {
					const subOperand1 = subProduct[i] * Math.pow(10, subProduct.length - 1 - i);
					const subOperand2 = digit * Math.pow(10, index);
					//subProduct = add(subProduct, splitNumber(subOperand1 * subOperand2));
				}
				//product = add(product, subProduct);
			});
			return product;
		}
		console.log(multiply(splitNumber(91121), splitNumber(50)));
	});
})();