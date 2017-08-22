/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * generate a fixed number of Fibonacci numbers
		 * @param {int} [len] - total length of number list
		 *
		 * @return {Array} [Fibonacci number list]
		 */
		function getFibonacci(len) {
			let list = [1, 1];
			for(let i = 0; i < len - 2; i++) {
				list.push(list[list.length - 1] + list[list.length - 2]);
			}
			return len >= 2 ? list : list.slice(0, len);
		}
		/**
		 * generate Fibonacci numbers until a given limit
		 * @param {int} [limit] - maximum number of Fibonacci number
		 *
		 * @return {Array} [Fibonacci number list]
		 */
		function maxFibonacci(limit) {
			if(limit < 1) {
				return [];
			}
			let list = [1, 1];
			while(list[list.length - 1] <= limit) {
				list.push(list[list.length - 1] + list[list.length - 2]);
			}
			return list.slice(0, -1);
		}
		/**
		 * convert binary number to Fibonacci base
		 * @param {String} [number] - number to be converted
		 *
		 * @return {String} [converted number]
		 */
		function binaryToFibo(number) {
			let fibonacci = getFibonacci(number.length).reverse();
			return fibonacci.reduce((acc, val, index) => acc + (Number(number[index]) ? val : 0), 0);
		}
		/**
		 * convert Fibonacci base to binary number
		 * @param {String} [number] - number to be converted
		 *
		 * @return {String} [converted number]
		 */
		function fiboToBinary(number) {
			number = Number(number);
			let fibonacci = maxFibonacci(number).reverse();
			let binary = new Array(fibonacci.length).fill(0);
			while(number !== 0) {
				for(let i = 0; i < fibonacci.length; i++) {
					if(fibonacci[i] <= number) {
						[binary[i], number] = [1, number - fibonacci[i]];
						break;
					}
				}
			}
			return binary.join("");
		}
		/**
		 * convert between binary and Fibonacci base
		 * @param {String} [info] - conversion information
		 *
		 * @return {String} [converted number]
		 */
		function convertBase(info) {
			let [curBase, number] = info.split(" ");
			if(curBase == "F") {
				return binaryToFibo(number);
			}
			return fiboToBinary(number);
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = "10 16";
		console.log(`%c${input} -> %c${convertBase(input)}`, "color : skyblue;", "color : orange;");
    input = "10 32";
		console.log(`%c${input} -> %c${convertBase(input)}`, "color : skyblue;", "color : orange;");
    input = "10 9024720";
		console.log(`%c${input} -> %c${convertBase(input)}`, "color : skyblue;", "color : orange;");
    input = "F 10";
		console.log(`%c${input} -> %c${convertBase(input)}`, "color : skyblue;", "color : orange;");
    input = "F 1";
		console.log(`%c${input} -> %c${convertBase(input)}`, "color : skyblue;", "color : orange;");
    input = "F 111111";
		console.log(`%c${input} -> %c${convertBase(input)}`, "color : skyblue;", "color : orange;");
    input = "F 100000";
		console.log(`%c${input} -> %c${convertBase(input)}`, "color : skyblue;", "color : orange;");
    input = "F 10110110100111001";
		console.log(`%c${input} -> %c${convertBase(input)}`, "color : skyblue;", "color : orange;");
	});
})();			