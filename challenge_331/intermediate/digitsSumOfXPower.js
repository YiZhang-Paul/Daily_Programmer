/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * split number into array of digits
		 * @param {int} [number] - number to be splitted
		 *
		 * @return {Array} [digits of number]
		 */
		function splitNumber(number) {
			return String(number).split("").map(Number);
		}
		/**
		 * calculate carries from addition
		 * @param {Array} [subProducts] - sub products
		 *
		 * @return {Array} [products with carries calculated]
		 */
		function calculateCarry(subProducts) {
			let product = subProducts.slice();
			for(let i = 0; i < product.length; i++) {
				const subSum = product[i].reduce((acc, val) => acc + val);
				if(subSum >= 10) {
					product[i] = subSum % 10;
					product[i + 1] = product[i + 1] ? [...product[i + 1], Math.floor(subSum / 10)] : [Math.floor(subSum / 10)];
					continue;
				}
				product[i] = subSum;
			}
			return product;
		}
		/**
		 * manual implementation of multiplication
		 * @param {Array} [number] - digits of number to be multiplied
		 * @param {int} [multiplier] - number to multiply
		 *
		 * @return {Array} [digits of the product]
		 */
		function multiply(number, multiplier) {
			let product = [];
			for(let i = number.length - 1; i >= 0; i--) {
				let subProduct = splitNumber(number[i] * multiplier);
				for(let j = subProduct.length - 1; j >= 0; j--) {
					const curIndex = (number.length - 1 - i) + (subProduct.length - 1 - j);
					product[curIndex] = product[curIndex] ? [...product[curIndex], subProduct[j]] : [subProduct[j]];
				}
			}
			return calculateCarry(product).reverse();
		}
		/**
		 * manual implementation of exponent
		 * @param {int} [base] - base number
		 * @param {int} [power] - power of exponent
		 *
		 * @return {Array} [digits of exponent]
		 */
		function exponent(base, power) {
			let exponent = [1];
			for(let i = 0; i < power; i++) {
				exponent = multiply(exponent, base);
			}
			return exponent;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let time = new Date().getTime();
		let input = [2, 1234];
		console.log(`%c${input[0]}^${input[1]} -> %c${exponent(2, 1234).join("")}`, "color : skyblue;", "color : orange;");
		console.log(`%cTime Spent: %c${new Date().getTime() - time}ms`, "color : skyblue;", "color : orange;");
	});
})();