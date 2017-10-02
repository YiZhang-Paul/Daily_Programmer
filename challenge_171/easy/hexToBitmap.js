/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * draw bitmap
		 * @param {String} [bits] - HEX value of bits to draw
		 *
		 * @return {String} [bitmap]
		 */
		function drawBitmap(bits) {
			return bits.match(/\w+/g).reduce((acc, val) => {
				const binary = Number.parseInt(val, 16).toString(2);
				const leadZero = "0".repeat(8 - binary.length);
				return acc + (`${leadZero}${binary}\n`).replace(/\d/g, match => match == "0" ? " " : "*");
			}, "");
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		console.log(drawBitmap("18 3C 7E 7E 18 18 18 18"));
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		console.log(drawBitmap("FF 81 BD A5 A5 BD 81 FF"));
		console.log(drawBitmap("AA 55 AA 55 AA 55 AA 55"));
		console.log(drawBitmap("3E 7F FC F8 F8 FC 7F 3E"));
		console.log(drawBitmap("93 93 93 F3 F3 93 93 93"));
	});
})();		