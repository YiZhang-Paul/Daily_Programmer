/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * fill grid on canvas
		 * @param {float} [x] - X-Coordinate
		 * @param {float} [y] - Y-Coordinate
		 * @param {float} [gridWidth] - width of grid
		 * @param {String} [color] - color of grid
		 * @param {Object} [canvas] - canvas to draw on
		 */
		function fillGrid(x, y, gridWidth, color, canvas) {
			let ctx = canvas.getContext("2d");
			ctx.beginPath();
			ctx.rect(x, y, gridWidth, gridWidth);
			ctx.fillStyle = color;
			ctx.fill(); 
		}
		/**
		 * split a grid into 3 x 3 grids
		 * @param {Object} [grid] - grid to split
		 * @param {Array} [rules] - color filling rule
		 *
		 * @return {Array} [splitted grids]
		 */
		function splitGrid(grid, rules) {
			const pixelWidth = grid.width / 3;
			return rules[grid.color].map((newColor, index) => {
				return {
					color : newColor, 
					discard : index == 4, 
					x : grid.x + pixelWidth * (index % 3), 
					y : grid.y + pixelWidth * Math.floor(index / 3), 
					width : pixelWidth
				};
			});
		}
		/**
		 * split all non-discarded grids
		 * @param {Array} [grids] - all grids
		 * @param {Array} [rules] - color filling rules
		 *
		 * @return {Array} [splitted grids]
		 */
		function splitAllGrid(grids, rules) {
			for(let i = 0; i < grids.length; i++) {
				if(Array.isArray(grids[i])) {
					splitAllGrid(grids[i], rules);
					continue;
				}
				grids[i] = !grids[i].discard ? splitGrid(grids[i], rules) : grids[i];
			}
			return grids;
		}
		/**
		 * generate carpet
		 * @param {int} [iteration] - total number of iterations
		 * @param {String} [colorRule] - color filling rules
		 * @param {float} [pixelWidth] - initial pixel width
		 *
		 * @return {Array} [carpet pattern after all iteration]
		 */
		function generateCarpet(iteration, colorRule, pixelWidth) {
			let rules = colorRule.split("\n").map(rule => rule.match(/\d+/g).map(Number));
			let carpet = [{color : 0, discard : false, x : 0, y : 0, width : pixelWidth}];
			for(let i = 0; i < iteration; i++) {
				carpet = splitAllGrid(carpet, rules);
			}
			return carpet;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let iteration = 4;
		let rules = `0 0 0 0 1 0 0 0 0
                 1 1 1 1 1 1 1 1 1`;
		console.log(generateCarpet(4, rules, 500));
	});
})();		