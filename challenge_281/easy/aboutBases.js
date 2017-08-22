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
		 * find minimum base
		 * @param {String} [number] - number to be examined
		 *
		 * @return {int} [minimum base]
		 */
		function getMinBase(number) {
			let digits = number.split("").map(digit => 
				/[a-z]/.test(digit) ? charToDecimal(digit) : Number(digit));
			let minBase = Math.max(...digits) + 1; 
			return `Base ${minBase} => ${Number.parseInt(number, minBase)}`;
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		console.log(`%c${getMinBase("1")}`, "color : orange;");
		console.log(`%c${getMinBase("21")}`, "color : orange;");
		console.log(`%c${getMinBase("ab3")}`, "color : orange;");
		console.log(`%c${getMinBase("ff")}`, "color : orange;");
	});
})();		