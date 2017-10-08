/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * draw tree
		 * @param {String} [specs] - tree specifications
		 *
		 * @return {String} [tree]
		 */
		function drawTree(specs) {
			const [base, trunk, leaf] = specs.match(/\S+/g);
			const halfBase = (base - 1) * 0.5;
			let tree = "";
			for(let i = 0; i < halfBase + 1; i++) {
				tree += `${" ".repeat(halfBase - i)}${leaf.repeat(1 + i * 2)}\n`;
			}
			return tree + `${" ".repeat(halfBase - 1)}${trunk.repeat(3)}`;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = "7 # *";
		console.log(`%c${drawTree(input)}`, "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = "3 # *";
		console.log(`%c${drawTree(input)}`, "color : orange;");
		input = "13 = +";
		console.log(`%c${drawTree(input)}`, "color : orange;");
	});
})();		