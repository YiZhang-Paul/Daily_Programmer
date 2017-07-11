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
			if(!pattern[1] && pattern.slice(2).some(num => num)) {
				return false;
			} else {
				for(let i = 2; i < pattern.length; i++) {
					if(!pattern[i - 1] && pattern[i]) {
						return false;
					}
				}
			}
			return true;
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
			if(!rightHandValid(leftHand) || !rightHandValid(rightHand)) {
				return "Invalid";
			}
			console.log(rightHandCount(rightHand));
		} 	
		//challenge input
		let input = "0111011100";
		console.log(countWithHand(input));
    input = "1010010000";
		console.log(countWithHand(input));
    input = "0011101110";
		console.log(countWithHand(input));
    input = "0000110000";
		console.log(countWithHand(input));
    input = "1111110001";
		console.log(countWithHand(input));
	});
})();		