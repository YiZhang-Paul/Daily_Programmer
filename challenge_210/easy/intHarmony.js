/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * convert decimal number into binary representation
		 * @param {int} [number] - number to be converted
		 *
		 * @return {String} [binary representation]
		 */
		function toBinary(number) {
			return "0".repeat(32 - number.toString(2).length) + number.toString(2);
		}
		/**
		 * convert number into decimal
		 * @param {String} [number] - number to be converted
		 * @param {int} [curBase] - current base of number
		 *
		 * @return {int} [decimal representation]
		 */
		function toDecimal(number, curBase = 2) {
			return Number.parseInt(number, curBase);
		}
		/**
		 * check compatibility of numbers
		 * @param {int} [number1] - number 1
		 * @param {int} [number2] - number 2
		 *
		 * @return {Array} [compatibility result]
		 */
		function getCompatibility(number1, number2) {
			const [binary1, binary2] = [number1, number2].map(toBinary);
			let match = 0, avoid1 = "", avoid2 = "";
			for(let i = 0; i < binary1.length; i++) {
				match += binary1[i] == binary2[i] ? 1 : 0;
				avoid1 += binary1[i] == "0" ? "1" : "0"; 
				avoid2 += binary2[i] == "0" ? "1" : "0";
			}
			return [Math.round(match / 32 * 100000) / 1000, ...[avoid1, avoid2].map(num => toDecimal(num))];
		}
		/**
		 * display compatibility result
		 * @param {int} [number1] - number 1
		 * @param {int} [number2] - number 2
		 *
		 * @return {String} [compatibility result]
		 */
		function showResult(number1, number2) {
			const [match, avoid1, avoid2] = getCompatibility(number1, number2);
			return `${match}% Compatibility\n${number1} Should Avoid ${avoid1}\n${number2} Should Avoid ${avoid2}`;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = [1, 2];
		console.log(`%c${input.join(" & ")} -> `, "color : skyblue;");
		console.log(`%c${showResult(...input)}`, "color : orange;");
		input = [100, 42];
		console.log(`%c${input.join(" & ")} -> `, "color : skyblue;");
		console.log(`%c${showResult(...input)}`, "color : orange;");
		//challenge` input
		console.log(`%cChallenge Input: `, "color : red;");
		input = [20, 65515];
		console.log(`%c${input.join(" & ")} -> `, "color : skyblue;");
		console.log(`%c${showResult(...input)}`, "color : orange;");
		input = [32000, 101];
		console.log(`%c${input.join(" & ")} -> `, "color : skyblue;");
		console.log(`%c${showResult(...input)}`, "color : orange;");
		input = [42000, 42];
		console.log(`%c${input.join(" & ")} -> `, "color : skyblue;");
		console.log(`%c${showResult(...input)}`, "color : orange;");
		input = [13, 12345];
		console.log(`%c${input.join(" & ")} -> `, "color : skyblue;");
		console.log(`%c${showResult(...input)}`, "color : orange;");
		input = [9999, 9999];
		console.log(`%c${input.join(" & ")} -> `, "color : skyblue;");
		console.log(`%c${showResult(...input)}`, "color : orange;");
		input = [8008, 37331];
		console.log(`%c${input.join(" & ")} -> `, "color : skyblue;");
		console.log(`%c${showResult(...input)}`, "color : orange;");
		input = [54311, 2];
		console.log(`%c${input.join(" & ")} -> `, "color : skyblue;");
		console.log(`%c${showResult(...input)}`, "color : orange;");
		input = [31200, 34335];
		console.log(`%c${input.join(" & ")} -> `, "color : skyblue;");
		console.log(`%c${showResult(...input)}`, "color : orange;");
	});
})();		