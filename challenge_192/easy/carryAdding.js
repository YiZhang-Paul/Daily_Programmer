/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * split number into digits
		 * @param {float} [number] - number to split
		 *
		 * @return {Array} [digits of the number]
		 */
		function splitNumber(number) {
			return String(number).split("").map(digit => digit == "." ? "." : Number(digit));
		}
		/**
		 * re-format a number to match other operands
		 * @param {float} [number] - number to re-format
		 * @param {int} [prefix] - desired prefix length
		 * @param {int} [affix] - desired affix length
		 * @param {char} [filler] - character used to fill up the missing length
		 *
		 * @return {Array} [re-formatted number]
		 */
		function formatNumber(number, prefix, affix, filler = 0) {
			const [prefixLen, affixLen] = isDecimal(number) ? 
				String(number).split(".").map(segment => segment.length) : [String(number).length, 0];
			let head = new Array(prefix - prefixLen).fill(filler);  
			let tail = new Array(affix - affixLen).fill(filler); 
			return [...head, ...splitNumber(number), ...tail];
		}
		/**
		 * get sum of digits in a given column
		 * @param {Array} [operands] - all operands
		 * @param {int} [index] - column index of digits
		 * @param {int} [carry] - carry from previous summation
		 *
		 * @return {int} [sum of all digits in given column]
		 */
		function getColumnSum(operands, index, carry = 0) {
			return operands.reduce((acc, val) => acc + val[index], 0) + carry;
		}
		/**
		 * join row together for display
		 * @param {Array} [row] - row to join
		 *
		 * @return {String} [joined row]
		 */
		function joinRow(row) {
			const firstDigit = row.findIndex(digit => digit);
			const totalSpace = firstDigit == -1 ? 0 : firstDigit;
			return " ".repeat(totalSpace) + row.slice(totalSpace).join("");
		}
		/**
		 * check if a number is decimal
		 * @param {float} [number] - number to check
		 *
		 * @return {boolean} [test result]
		 */
		function isDecimal(number) {
			return /\./.test(String(number));
		}
		/**
		 * display add result
		 * @param {Array} [operands] - all operands
		 * @param {Array} [sum] - sum of operands
		 * @param {Array} [carry] - carries of summation
		 *
		 * @return {String} [summation result]
		 */
		function displaySum(operands, sum, carry) {
			let lineSplit = new Array(carry.length).fill("-");
			return [...operands, lineSplit, sum, lineSplit, carry].map(row => joinRow(row)).join("\n");
		}
		/**
		 * align operands for summation
		 * @param {String} [expression] - all numbers for summation
		 *
		 * @return {Array} [aligned operands]
		 */
		function alignOperand(expression) {
			let operands = expression.match(/\d+\.*\d*/g);
			const prefixLen = Math.max(...operands.map(num => isDecimal(num) ? num.split(".")[0].length : num.length)) + 1;
			const affixLen = Math.max(...operands.map(num => isDecimal(num) ? num.split(".")[1].length : 0));
			return operands.map(num => formatNumber(Number(num), prefixLen, affixLen));
		}
		/**
		 * add with carry
		 * @param {String} [expression] - numbers to add
		 *
		 * @return {float} [sum of all numbers]
		 */
		function addWithCarry(expression) {
			let operands = alignOperand(expression);
			let [sum, carry] = [null, null].map(slot => new Array(operands[0].length).fill(0));
			for(let i = operands[0].length - 1; i >= 0; i--) {
				if(operands[0][i] == ".") {
					sum[i] = ".";
					continue;
				}
				const subSum = getColumnSum(operands, i, carry[i]);
				sum[i] = subSum % 10;
				if(subSum > 9 && i - 1 >= 0) {
					carry[i - (operands[0][i - 1] == "." ? 2 : 1)] = Math.floor(subSum / 10);
				}
			}
			return displaySum(operands, sum, carry);
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = "23+456";
		console.log(`%c${input.replace(/\+/g, " + ")} -> `, "color : skyblue;");
		console.log(`%c${addWithCarry(input)}`, "color : orange;");
		input = "559+447";
		console.log(`%c${input.replace(/\+/g, " + ")} -> `, "color : skyblue;");
		console.log(`%c${addWithCarry(input)}`, "color : orange;");
		input = "559+447+13+102";
		console.log(`%c${input.replace(/\+/g, " + ")} -> `, "color : skyblue;");
		console.log(`%c${addWithCarry(input)}`, "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = "23+9+66";
		console.log(`%c${input.replace(/\+/g, " + ")} -> `, "color : skyblue;");
		console.log(`%c${addWithCarry(input)}`, "color : orange;");
		input = "8765+305";
		console.log(`%c${input.replace(/\+/g, " + ")} -> `, "color : skyblue;");
		console.log(`%c${addWithCarry(input)}`, "color : orange;");
		input = "12+34+56+78+90";
		console.log(`%c${input.replace(/\+/g, " + ")} -> `, "color : skyblue;");
		console.log(`%c${addWithCarry(input)}`, "color : orange;");
		input = "999999+1";
		console.log(`%c${input.replace(/\+/g, " + ")} -> `, "color : skyblue;");
		console.log(`%c${addWithCarry(input)}`, "color : orange;");
		//bonus input
		console.log(`%cBonus Input: `, "color : red;");
		input = "23.3+9.26+66.6621";
		console.log(`%c${input.replace(/\+/g, " + ")} -> `, "color : skyblue;");
		console.log(`%c${addWithCarry(input)}`, "color : orange;");
	});
})();		