/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * adjust input number
		 * @param String
		 *
		 * numStr : number string to be adjusted
		 *
		 * returns array []
		 */
		function adjustNumber(numStr) {
			let numParts = numStr.split(".");
			return ["0".repeat(numParts[0].length % 2) + numParts[0], 
							numParts[1] ? numParts[1] + "0".repeat(numParts[1].length % 2): "00"];
		} 
		/**
		 * find largest whole number whose 
		 * square is closest to a given number
		 * @param int
		 *
		 * limit : upper limit
		 *
		 * returns int
		 */
		function maxWholeSqrt(limit) {
			let sqrt = 0;
			while(Math.pow(sqrt, 2) <= limit) {
				sqrt++;
			}
			return sqrt - 1;
		} 
		/**
		 * find largest factor for a given number
		 * @param int, int
		 *
		 * sideA : length of side A
		 * limit : upper limit 
		 *
		 * returns int
		 */
		function maxFactor(sideA, limit) {
			let factor = 0, num = 20 * sideA;
			while(factor * (num + factor) <= limit) {
				factor++;
			}
			return factor - 1;
		} 
		/**
		 * find square root
		 * @param int, float
		 *
		 * precision : precision of square root
		 * number    : number to square root
		 *
		 * returns float
		 */ 
		function squareRoot(precision, number) {
			let [whole, decimal] = adjustNumber(number.toString());
			let result = maxWholeSqrt(Number(whole.slice(0, 2))).toString();
			let remain = ((Number(whole.slice(0, 2)) - Math.pow(Number(result), 2)) || "").toString() + whole.slice(2, 4);
			whole = whole.slice(2);
			while(whole.length) {
				let factor = maxFactor(Number(result), Number(remain));
				remain = (Number(remain) - (20 * Number(result) + factor) * factor).toString() + whole.slice(2, 4);
				whole = whole.slice(2);
				result += factor;
			}
			return Number(result);
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = "0 7720.17";
		console.log(`${input} => ${squareRoot(...input.split(" ").map(num => Number(num)))}`);
		input = "1 7720.17";
		console.log(`${input} => ${squareRoot(...input.split(" ").map(num => Number(num)))}`);
		input = "2 7720.17"; 
		console.log(`${input} => ${squareRoot(...input.split(" ").map(num => Number(num)))}`);
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = "0 12345";
		console.log(`${input} => ${squareRoot(...input.split(" ").map(num => Number(num)))}`);
		input = "8 123456";
		console.log(`${input} => ${squareRoot(...input.split(" ").map(num => Number(num)))}`);
		input = "1 12345678901234567890123456789"; 
		console.log(`${input} => ${squareRoot(...input.split(" ").map(num => Number(num)))}`);
	});
})();		