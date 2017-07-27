/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * construct n-bit gray oode
		 * @param {int} [bitLen] - bit length of gray code
		 * @param {Array} [bits] - current gray code constructed
		 *
		 * @return {Array} [generated code]
		 */
		function makeGrayCode(bitLen, bits = ["0", "1"]) {
			return bits[0].length == bitLen ? 
				bits : makeGrayCode(bitLen, [...bits.slice().map(bit => "0" + bit), ...bits.slice().reverse().map(bit => "1" + bit)]);
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = 8;
		console.log(`%c${input} -> `, "color : yellow;");
		makeGrayCode(input).forEach(row => {
			console.log(row);
		});
		input = 16;
		console.log(`%c${input} -> `, "color : yellow;");
		makeGrayCode(input).forEach(row => {
			console.log(row);
		});
	});
})();		