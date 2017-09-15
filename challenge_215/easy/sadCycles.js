/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * raise all digits of a number to given power and get sum
		 * @param {int} [number] - number to be manipulated
		 * @param {int} [power] - target power
		 *
		 * @return {int} [result number]
		 */
		function getPowerSum(number, power = 2) {
			return String(number).split("")
													 .map(digit => Math.pow(Number(digit), power))
													 .reduce((acc, val) => acc + val);
		}
		/**
		 * find sad cycle for a given base and given power
		 * @param {int} [number] - base number
		 * @param {int} [power] - power to raise to
		 *
		 * @return {Array} [sad cycle]
		 */
		function getSadCycle(number, power) {
			let cycle = [];
			let seen = new Set([number]), found = false;
			while(!found) {
				number = getPowerSum(number, power);
				if(number == cycle[0]) {
					found = true;
					break;
				}
				if(seen.has(number)) {
					cycle.push(number);
					continue;
				}
				seen.add(number);
			}
			return cycle;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = [12, 2];
		console.log(`%c${input.join("^")} -> %c${getSadCycle(...input).join(" ")}`, "color : skyblue;", "color : orange;");
		input = [13, 2];
		console.log(`%c${input.join("^")} -> %c${getSadCycle(...input).join(" ")}`, "color : skyblue;", "color : orange;");
		input = [82375, 3];
		console.log(`%c${input.join("^")} -> %c${getSadCycle(...input).join(" ")}`, "color : skyblue;", "color : orange;");
		input = [1060925, 7];
		console.log(`%c${input.join("^")} -> %c${getSadCycle(...input).join(" ")}`, "color : skyblue;", "color : orange;");
		input = [117649, 5];	
		console.log(`%c${input.join("^")} -> %c${getSadCycle(...input).join(" ")}`, "color : skyblue;", "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = [2, 6];
		console.log(`%c${input.join("^")} -> %c${getSadCycle(...input).join(" ")}`, "color : skyblue;", "color : orange;");
		input = [7, 7];
		console.log(`%c${input.join("^")} -> %c${getSadCycle(...input).join(" ")}`, "color : skyblue;", "color : orange;");
		input = [14, 3];
		console.log(`%c${input.join("^")} -> %c${getSadCycle(...input).join(" ")}`, "color : skyblue;", "color : orange;");
		input = [2, 11];
		console.log(`%c${input.join("^")} -> %c${getSadCycle(...input).join(" ")}`, "color : skyblue;", "color : orange;");
	});
})();		