/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * check if right hand counting is valid
		 * @param array []
		 *
		 * pattern : right hand counting pattern
		 *
		 * returns boolean
		 */
		function rightHandValid(pattern) {
			return !pattern.slice(2).some((digit, index) => digit && !pattern[index + 2 - 1]);
		}
		/**
		 * count with right hand
		 * @param array []
		 *
		 * pattern : right hand counting pattern
		 *
		 * returns int
		 */
		function rightHandCount(pattern) {
			return pattern.slice(1).filter(digit => digit).length + (pattern[0] ? 5 : 0);
		} 
		/**
		 * count with hand
		 * @param String
		 *
		 * pattern : patterns for both hands
		 * 
		 * returns int
		 */
		function countWithHand(pattern) {
			pattern = pattern.split("").map(digit => Number(digit));
			let leftHand = pattern.slice(0, pattern.length * 0.5).reverse();
			let rightHand = pattern.slice(pattern.length * 0.5);
			let invalid = !rightHandValid(leftHand) || !rightHandValid(rightHand);
			return invalid ? "Invalid" : rightHandCount(leftHand) * 10 + rightHandCount(rightHand);
		} 	
		//challenge input
		let input = "0111011100";
		console.log(`${input} -> %c${countWithHand(input)}`, "color : red;");
    input = "1010010000";
		console.log(`${input} -> %c${countWithHand(input)}`, "color : red;");
    input = "0011101110";
		console.log(`${input} -> %c${countWithHand(input)}`, "color : red;");
    input = "0000110000";
		console.log(`${input} -> %c${countWithHand(input)}`, "color : red;");
    input = "1111110001";
		console.log(`${input} -> %c${countWithHand(input)}`, "color : red;");
	});
})();		