/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * prepend number with zero
		 * @param {int} [num] [number to be prepended]
		 *
		 * @return {String} [prepended number]
		 */
		function prependNum(num) {
			return "0".repeat(String(num).length % 2) + num;
		}
		/**
		 * append number with zerp
		 * @param {int} [num] [number to be appended]
		 *
		 * @return {String} [appended number]
		 */
		function appendNum(num) {
			return num + "0".repeat(String(num).length % 2);
		}
		/**
		 * find largest whole number square root
		 * for a given number limit
		 * @param {int} [limit] [upper limit]
		 *
		 * @return {int} [largest whole number square root]
		 */
		function maxWholeSqrt(limit) {
			let sqrt = 0;
			while(Math.pow(sqrt, 2) <= limit) {
				sqrt++;
			}
			return sqrt - 1;
		}
		/**
		 * find largest factor for a given expression
		 * within the range of a given number limit
		 * @param {int} [prev] [previous result from square root]
		 * @param {int} [limit] [upper limit]
		 * 
		 * @return {int} [largest factor] 
		 */
		function maxFactor(prev, limit) {
			let factor = 0;
			while(factor * (prev + factor) <= limit) {
				factor++;
			}
			return factor - 1;
		}
		/**
		 * find remaining digits for square root
		 * @param {String} [curSqrt] [current square root]
		 * @param {String} [remain] [remaining value]
		 * @param {String} [digits] [remaining digits]
		 * 
		 * @return {array []} [square root and remaining value]
		 */
		function restSqrt(curSqrt, remain, digits) {
			while(digits.length) {
				let factor = maxFactor(Number(curSqrt) * 20, Number(remain));
				remain = String(Number(remain) - (Number(curSqrt) * 20 + factor) * factor) + digits.slice(2, 4);
				curSqrt += String(factor);
				digits = digits.slice(2);
			}
			return [curSqrt, remain];
		}
		/**
		 * find square root for whole number part
		 * @param {String} [whole] [whole number part string]
		 * 
		 * @return {array []} [square root and remaining value]
		 */
		function getWholeSqrt(whole) {
			let sqrt = maxWholeSqrt(whole.slice(0, 2));
			let remain = String(Number(whole.slice(0, 2)) - Math.pow(Number(sqrt), 2)) + whole.slice(2, 4);
			return restSqrt(sqrt, remain, whole.slice(2));
		}
		/**
		 * find square root for decimal number part
		 * @param {String} [decimal] [decimal number part string]
		 * @param {String} [prev] [square root from whole number part]
		 * @param {String} [remain] [remaining value from whole number part]
		 * @param {int} [precision] [precision of square root]
		 * 
		 * @return {int} [square root]
		 */
		function getDecimalSqrt(decimal, prev, remain, precision) {
			let prevLen = prev.length;
			decimal += "0".repeat(precision * 2 - decimal.length);
			remain += decimal.slice(0, 2);
			return restSqrt(prev, remain, decimal)[0].slice(prevLen);
		}
		/**
		 * find square root for a given number
		 * @param {int} [precision] [precision of square root]
		 * @param {int} [number] [number to square root]
		 *
		 * @return {float} [square root]
		 */
		function squareRoot(precision, number) {
			number = String(number).split(".");
			let [whole, decimal] = [prependNum(number[0]), appendNum(number[1] || "00")];
			let [wholeSqrt, remain] = getWholeSqrt(whole);
			return precision === 0 ? wholeSqrt : wholeSqrt + "." + getDecimalSqrt(decimal, wholeSqrt, remain, precision);
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = "0 7720.17";
		console.log(`${input} => %c${squareRoot(...input.split(" ").map(num => Number(num)))}`, "color : yellow;");
		input = "1 7720.17";
		console.log(`${input} => %c${squareRoot(...input.split(" ").map(num => Number(num)))}`, "color : yellow;");
		input = "2 7720.17"; 
		console.log(`${input} => %c${squareRoot(...input.split(" ").map(num => Number(num)))}`, "color : yellow;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = "0 12345";
		console.log(`${input} => %c${squareRoot(...input.split(" ").map(num => Number(num)))}`, "color : yellow;");
		input = "8 123456";
		console.log(`${input} => %c${squareRoot(...input.split(" ").map(num => Number(num)))}`, "color : yellow;");
	});
})();		