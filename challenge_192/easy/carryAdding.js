/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * split number into digits
		 * @param {float} [number] - number to be splitted
		 *
		 * @return {Array} [digits of the number]
		 */
		function splitNumber(number) {
			return String(number).split("").map(Number);
		}
		/**
		 * re-adjust a number to better fit in summation process
		 * @param {float} [number] - number to be re-formatted
		 * @param {int} [total] - desired length of number
		 * @param {char} [leadChar] - leading characters to fill up missing length
		 *
		 * @return {Array} [digits of number with leading zeros]
		 */
		function formatNumber(number, total, leadChar = 0) {
			let leadChars = new Array(total - String(number).length).fill(leadChar);
			return [...leadChars, ...splitNumber(number)];
		}
		/**
		 * get sum of digits in a given column
		 * @param {Array} [operands] - all operands for summation
		 * @param {int} [index] - column index of digit
		 * @param {int} [carry] - carry from previous summation
		 *
		 * @return {int} [sum of all digits in given column]
		 */
		function getSubSum(operands, index, carry = 0) {
			return operands.reduce((acc, val) => acc + val[index], 0) + carry;
		}
		/**
		 * join row together for display
		 * @param {Array} [row] - row to join
		 *
		 * @return {String} [joined row]
		 */
		function joinRow(row) {
			const spaces = " ".repeat(row.findIndex(digit => digit));
			return spaces + row.slice(spaces.length).join("");
		}
		/**
		 * display add result
		 * @param {Array} [operands] - operands for summation
		 * @param {Array} [sum] - sum
		 * @param {Array} [carry] - carries of summation
		 *
		 * @return {String} [summation result] 
		 */
		function displaySum(operands, sum, carry) {
			let lineSplit = new Array(carry.length).fill("-");
			return [...operands, lineSplit, sum, lineSplit, carry.map(digit => digit || " ")].map(row => joinRow(row)).join("\n");
		}
		/**
		 * add with carry
		 * @param {String} [expression] - numbers to add
		 *
		 * @return {float} [sum of all numbers]
		 */
		function addWithCarry(expression) {
			const maxLength = Math.max(...expression.match(/\d+/g).map(number => number.length)) + 1;
			let operands = expression.match(/\d+/g).map(number => formatNumber(Number(number), maxLength));
			let [sum, carries] = [null, null].map(item => new Array(maxLength).fill(0));
			for(let i = operands[0].length - 1; i >= 0; i--) {
				const subSum = getSubSum(operands, i, carries[i]);
				sum[i] = subSum % 10;
				if(i - 1 >= 0 && subSum > 9) {
					carries[i - 1] = Math.floor(subSum / 10);
				}
			}
			return displaySum(operands, sum, carries);
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
	});
})();		