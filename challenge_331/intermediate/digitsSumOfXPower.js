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
			multiplier.slice().reverse().forEach((digit, index) => {
				let subProduct = new Array(number.length).fill(0);
				for(let i = number.length - 1; i >= 0; i--) {
					let minorProduct = splitNumber(number[i] * digit);
					const trailZeros = number.length - 1 - i + index;
					if(trailZeros >= subProduct.length) {
						subProduct = [...minorProduct, ...new Array(trailZeros - subProduct.length).fill(0), ...subProduct];
					} else {
						subProduct = [...add(subProduct.slice(0, -trailZeros), minorProduct), ...subProduct.slice(subProduct.length - trailZeros)];
					}
				}
				product = add(product, subProduct);
			});
			return product;
		}
		/**
		 * manual implementation of exponential
		 * @param {Array} [base] - all digits of base number
		 * @param {int} [power] - power of exponent
		 *
		 * @return {Array} [digits of exponent]
		 */
		function exponent(base, power) {
			let exponent = [1], curPower = 1;
			while(power > 1) {
				let subExponent = base.slice();
				while(curPower * 2 <= power) {
					curPower *= 2;
					subExponent = multiply(subExponent, subExponent);
				}
				exponent = multiply(exponent, subExponent);
				power -= curPower;
				curPower = 1;
			}
			return power ? multiply(exponent, base) : exponent;
		}
		let time = new Date().getTime();
		console.log(exponent(splitNumber(2), 1234).reduce((acc, val) => acc + val) + ` ${new Date().getTime() - time}ms`);
		//console.log(exponent(splitNumber(11), 4000).reduce((acc, val) => acc + val));
		//console.log(exponent(splitNumber(50), 3000).reduce((acc, val) => acc + val));
	});
})();