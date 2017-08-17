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
			operands = operands.split(" ").map(num => Number(num));
			let [binaryOp1, binaryOp2] = operands.map(num => num.toString(2));
			let finalBits = new Array(binaryOp1.length + binaryOp2.length - 1).fill("0");
			for(let i = binaryOp2.length - 1; i >= 0; i--) {
				let bits = binaryOp2[i] == "0" ? "0".repeat(binaryOp1.length + binaryOp2.length - 1) : "0".repeat(binaryOp2.length - 1 - (binaryOp2.length - 1 - i)) + ((operands[0] << (binaryOp2.length - 1 - i)).toString(2)); 
				for(let j = 0; j < finalBits.length; j++) {
					finalBits[j] = finalBits[j] == "0" ? bits[j] : (bits[j] == "1" ? "0" : "1");
				}
			}
			return `${Number.parseInt(finalBits.join(""), 2)}(${finalBits.join("")})`;
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