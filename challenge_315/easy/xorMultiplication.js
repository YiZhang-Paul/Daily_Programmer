/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * XOR multiplication
		 * @param {String} [operands] - operands for multiplication
		 *
		 * @return {String} [multiplication result]
		 */
		function xorMultiply(operands) {
			let [operand1, operand2] = operands.split(" ").map(operand => Number(operand).toString(2));
			let bitsLen = operand1.length + operand2.length - 1;
			let result = new Array(bitsLen).fill("0");
			for(let i = operand2.length - 1; i >= 0; i--) {
				let curBits = operand2[i] == "0" ? 
					"0".repeat(bitsLen) : "0".repeat(i) + (Number.parseInt(operand1, 2) << (operand2.length - 1 - i)).toString(2);
				for(let j = 0; j < result.length; j++) {
					result[j] = result[j] == "0" ? curBits[j] : (curBits[j] == "1" ? "0" : "1");
				}
			}
			return `${Number.parseInt(result.join(""), 2)} (${result.join("")})`;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = "14 13";
		console.log(`${input.split(" ").join(" @ ")} = %c${xorMultiply(input)}`, "color : orange;");
		input = "5 9";
		console.log(`${input.split(" ").join(" @ ")} = %c${xorMultiply(input)}`, "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
    input = "1 2";
		console.log(`${input.split(" ").join(" @ ")} = %c${xorMultiply(input)}`, "color : orange;");
    input = "9 0";
		console.log(`${input.split(" ").join(" @ ")} = %c${xorMultiply(input)}`, "color : orange;");
    input = "6 1";
		console.log(`${input.split(" ").join(" @ ")} = %c${xorMultiply(input)}`, "color : orange;");
    input = "3 3";
		console.log(`${input.split(" ").join(" @ ")} = %c${xorMultiply(input)}`, "color : orange;");
    input = "2 5";
		console.log(`${input.split(" ").join(" @ ")} = %c${xorMultiply(input)}`, "color : orange;");
    input = "7 9";
		console.log(`${input.split(" ").join(" @ ")} = %c${xorMultiply(input)}`, "color : orange;");
    input = "13 11";
		console.log(`${input.split(" ").join(" @ ")} = %c${xorMultiply(input)}`, "color : orange;");
    input = "5 17";
		console.log(`${input.split(" ").join(" @ ")} = %c${xorMultiply(input)}`, "color : orange;");
    input = "14 13";
		console.log(`${input.split(" ").join(" @ ")} = %c${xorMultiply(input)}`, "color : orange;");
    input = "19 1";
		console.log(`${input.split(" ").join(" @ ")} = %c${xorMultiply(input)}`, "color : orange;");
    input = "63 63";		
		console.log(`${input.split(" ").join(" @ ")} = %c${xorMultiply(input)}`, "color : orange;");
	});
})();