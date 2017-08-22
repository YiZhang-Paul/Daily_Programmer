/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * translate letter to decimal
		 * @param {char} [letter] - letter to be translated 
		 *
		 * @return {int} [translated letter]
		 */
		function charToDecimal(letter) {
			return letter.charCodeAt() - 87;
		}
		/**
		 * get decimal value for a number
		 * @param {int} [number] - number to be transformed
		 * @param {int} [base] - base to be transformed into
		 *
		 * @return {int} [transformed number]
		 */
		function getDecimal(number, base) {
			return number == "0" ? 0 : Number.parseInt(number, base);
		}
		/**
		 * find minimum base
		 * @param {String} [number] - number to be examined
		 *
		 * @return {int} [minimum base]
		 */
		function getMinBase(number) {
			let digits = number.split("").map(digit => 
				/[a-z]/.test(digit) ? charToDecimal(digit) : Number(digit));
			return Math.max(...digits) + 1;
		}
		/**
		 * print all bases for a number starting from minimum base
		 * @param {String} [number] - number to be examined
		 */
		function printAllBase(number) {
			console.log(`%c${number} -> `, "color : skyblue;");
			for(let i = getMinBase(number); i <= 16; i++) {
				console.log(`%cBase ${i} => %c${getDecimal(number, i)}`, "color : skyblue;", "color : orange;");
			}
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = "1";
		let base = getMinBase(input);
		console.log(`${input} : %cBase ${base} => %c${getDecimal(input, base)}`, "color : skyblue;", "color : orange;");
		input = "21";
		base = getMinBase(input);
		console.log(`${input} : %cBase ${base} => %c${getDecimal(input, base)}`, "color : skyblue;", "color : orange;");
		input = "ab3";
		base = getMinBase(input);
		console.log(`${input} : %cBase ${base} => %c${getDecimal(input, base)}`, "color : skyblue;", "color : orange;");
		input = "ff";
		base = getMinBase(input);
		console.log(`${input} : %cBase ${base} => %c${getDecimal(input, base)}`, "color : skyblue;", "color : orange;");
		//bonus 1 input
		console.log(`%cBonus 1 Input: `, "color : red;");
		printAllBase("1");
		printAllBase("21");
		printAllBase("ab3");
		printAllBase("ff");
		//bonus 2 input
		console.log(`%cBonus 2 Input: `, "color : red;");
		input = "0";
		base = getMinBase(input);
		console.log(`${input} : %cBase ${base} => %c${getDecimal(input, base)}`, "color : skyblue;", "color : orange;");
	});
})();		