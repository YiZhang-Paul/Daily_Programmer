/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * find greatest common divisor
		 * @param {int} [num1] - number 1
		 * @param {int} [num2] - number 2
		 *
		 * @return {int} [greatest common divisor]
		 */
		function findGCD(num1, num2) {
			return num1 % num2 ? findGCD(num2, num1 % num2) : num2;
		}
		/**
		 * simplify fraction
		 * @param {String} [fraction] - fraction to be simplified
		 *
		 * @return {String} [simplified fraction]
		 */
		function simplifyFraction(fraction) {
			fraction = fraction.split(" ").map(num => Number(num));
			let gcd = findGCD(...fraction.slice().sort((a, b) => b - a));
			return fraction.map(num => num / gcd).join(" ");
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = "4 8";
		console.log(`%c${input} -> %c${simplifyFraction(input)}`, "color : skyblue;", "color : orange;");
    input = "1536 78360";
		console.log(`%c${input} -> %c${simplifyFraction(input)}`, "color : skyblue;", "color : orange;");
    input = "51478 5536";
		console.log(`%c${input} -> %c${simplifyFraction(input)}`, "color : skyblue;", "color : orange;");
    input = "46410 119340";
		console.log(`%c${input} -> %c${simplifyFraction(input)}`, "color : skyblue;", "color : orange;");
    input = "7673 4729";
		console.log(`%c${input} -> %c${simplifyFraction(input)}`, "color : skyblue;", "color : orange;");
    input = "4096 1024";
		console.log(`%c${input} -> %c${simplifyFraction(input)}`, "color : skyblue;", "color : orange;");
	});
})();			