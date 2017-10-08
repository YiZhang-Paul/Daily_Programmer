/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * find permitter of a polygon
		 * @param {String} [specs] - polygon specifications
		 *
		 * @return {float} [permitter of polygon]
		 */
		function getPermitter(specs) {
			const [side, circumradius] = specs.match(/\d+\.{0,1}\d*/g).map(Number);
			return (Math.sin(Math.PI / side) * circumradius * 2 * side).toFixed(3);
		}
		//challenge input
		console.log(`%cChalleng Input: `, "color : red;");
		let input = "5 3.7";
		console.log(`%c${getPermitter(input)}`, "color : orange;");
		input = "100 1.0";
		console.log(`%c${getPermitter(input)}`, "color : orange;");
	});
})();