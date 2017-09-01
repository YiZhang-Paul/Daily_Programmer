/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * check if coconut amount is valid
		 * @param {int} [coconut] - total number of coconuts
		 * @param {int} [sailors] - total number of sailors
		 * 
		 * @return {boolean} [test result]
		 */
		function validCoconutCount(coconut, sailors) {
			for(let i = 0; i < sailors; i++) {
				if(coconut % sailors != 1) {
					return false;
				}
				coconut -= ((coconut - 1) / sailors + 1);
			}
			return coconut % sailors === 0;
		}
		/**
		 * find minimum amount of coconut
		 * @param {int} [sailors] - total number of sailors
		 *
		 * @return {int} [minimum amount of coconuts]
		 */
		function getMinCoconut(sailors) {
			let coconut = Math.pow(sailors, 2) + 1;
			while(!validCoconutCount(coconut, sailors)) {
				coconut += sailors;
			}
			return coconut;
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = 5;
		console.log(`%c${input} Sailors -> %c${getMinCoconut(5)} Coconuts`, "color : skyblue;", "color : orange;");
	});
})();			