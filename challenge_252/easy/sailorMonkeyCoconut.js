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
		function hasValidCoconut(coconut, sailors) {
			for(let i = 0; i < sailors; i++) {
				if(coconut % sailors != 1) {
					return false;
				}
				coconut -= ((coconut - 1) / sailors + 1);
			}
			return coconut % sailors === 0;
		}
	});
})();			