/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * check if fangs are valid
		 * @param {Array} [fangs] - fangs to be checked
		 * @param {int} [goal] - target number the fangs should multiply to
		 *
		 * @return {boolean} [test result]
		 */
		function isValidFang(fangs, goal) {
			return fangs.every(fang => fang[0] != "0") &&
			       fangs.filter(fang => fang[1] == "0").length < 2 &&
			       fangs.reduce((acc, val) => acc * Number(val), 1) == goal;
		}
		/**
		 * check if a number is a vampire number and get its fangs
		 * @param {int} [number] - number to be checked
		 * @param {Array} [digits] - all digits in number
		 * @param {Array} [curDigit] - current selected digits
		 *
		 * @return {String} [vampire number and its fangs]
		 */
		function getFangs(number, digits, curDigit = []) {
			if(!digits.length) {
				let fangs = curDigit.join("").match(/\d{2}/g);
				return isValidFang(fangs, number) ? `${number}=${fangs.join("*")}` : null;
			}
			for(let i = 0; i < digits.length; i++) {
				let result = getFangs(number, [...digits.slice(0, i), ...digits.slice(i + 1)], [...curDigit, digits[i]]);
				if(result) {
					return result;
				}
			}
			return null;
		}
		/**
		 * find vampires numbers in a given range
		 * @param {int} [digits] - total digits in numbers
		 *
		 * @return {Array} [all vaild vampire numbers]
		 */
		function findVampire(digits) {
			let [vampires, low, high] = [[], Math.pow(10, digits - 1), Math.pow(10, digits) - 1];
			for(let i = low; i <= high; i++) {
				let result = getFangs(i, String(i).split(""));
				if(result) {
					vampires.push(result);
				}
			}
			return vampires;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		console.log(`4 Digits, 2 Fangs ->`);
		findVampire(4).forEach(vampire => {
			console.log(`%c${vampire}`, "color : orange;");
		});
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		console.log(`6 Digits, 3 Fangs ->`);
		findVampire(6).forEach(vampire => {
			console.log(`%c${vampire}`, "color : orange;");
		});
	});
})();		