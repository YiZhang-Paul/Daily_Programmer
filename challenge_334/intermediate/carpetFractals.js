/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * split a grid into 3 x 3 grids
		 * @param {Object} [grid] - grid to split
		 * @param {Array} [rules] - color filling rule
		 *
		 * @return {Array} [splitted grids]
		 */
		function splitGrid(grid, rules) {
			const pixelWidth = grid.width / 3;
			return rules[grid.color].map((color, index) => {
				return {
					color,
					x : grid.x + pixelWidth * (index % 3),
					y : grid.y + pixelWidth * Math.floor(index / 3),
					width : pixelWidth
				};
			});
		}
		/**
		 * split all grids into smaller grids
		 * @param {Array} [grids] - all grids to split
		 * @param {Array} [rules] - color filling rule
		 *
		 * @return {Array} [all grids splitted]
		 */
		function splitAllGrid(grids, rules) {
			for(let i = 0; i < grids.length; i++) {
				if(Array.isArray(grids[i])) {
					splitAllGrid(grids[i], rules);
					continue;
				}
				grids[i] = splitGrid(grids[i], rules);
			}
			return grids;
		}
		/**
		 * generate carpet pattern
		 * @param {int} [iteration] - total number of iteration
		 * @param {Array} [rules] - color filling rules
		 * @param {float} [pixelWidth] - initial pixel width
		 *
		 * @return {Array} [carpet pattern after all iteration]
		 */
		function makeCarpet(iteration, rules, pixelWidth) {
			let pattern = [{color : 0, x : 0, y : 0, width : pixelWidth}];
			for(let i = 0; i < iteration; i++) {
				pattern = splitAllGrid(pattern, rules);
			}
			return pattern;
		}
		/**
		 * get color rules
		 * @param {String} [rules] - color rules
		 *
		 * @return {Array} [all color rules]
		 */
		function getColorRule(rules) {
			return rules.split("\n").map(rule => rule.match(/\d+/g).map(Number));
		}
		/**
		 * get color value
		 * @param {int} [rgbSum] - sum of RGB value
		 *
		 * @return {String} [RGB color value]
		 */
		function getColorValue(rgbSum) {
			let values = new Array(3).fill(rgbSum).map((slot, index) => {
				return rgbSum > index * 255 ? Math.min(255, rgbSum - index * 255) : 0;
			});
			return `rgb(${values.join(", ")})`;
		}
		/**
		 * create color table
		 * @param {int} [total] - total number of colors in table
		 *
		 * @return {Array} [color table]
		 */
		function getColorTable(total) {
			const colorStep = Math.floor(255 * 3 / total);
			let table = [], rgbSum = 0;
			for(let i = 0; i < total; i++) {
				table.push(getColorValue(rgbSum));
				rgbSum += colorStep;
			}
			return table;
		}
		/**
		 * draw grid
		 * @param {Object} [grid] - grid to draw
		 * @param {Array} [colorTable] - color table
		 * @param {Object} [canvas] - canvas to draw on
		 */
		function drawGrid(grid, colorTable, canvas) {
			let ctx = canvas.getContext("2d");
			ctx.beginPath();
			ctx.rect(grid.x, grid.y, grid.width, grid.width);
			ctx.fillStyle = colorTable[grid.color];
			ctx.fill();
		}
		/**
		 * draw all grids
		 * @param {Array} [grids] - all grids to draw
		 * @param {Array} [colorTable] - color table
		 * @param {Object} [canvas] - canvas to draw on
		 */
		function drawAllGrid(grids, colorTable, canvas) {
			for(let i = 0; i < grids.length; i++) {
				if(Array.isArray(grids[i])) {
					drawAllGrid(grids[i], colorTable, canvas);
					continue;
				}
				drawGrid(grids[i], colorTable, canvas);
			}
		}
		/**
		 * draw carpet
		 * @param {int} [iteration] - total number of iteration
		 * @param {String} [rules] - color filling rules
		 * @param {String} [canvasID] - ID of canvas to draw on
		 */
		function drawCarpet(iteration, rules, canvasID = "canvas") {
			let colorRules = getColorRule(rules);
			let colorTable = getColorTable(colorRules.length);
			let canvas = document.getElementById(canvasID);
			let grids = makeCarpet(iteration, colorRules, canvas.offsetWidth);
			drawAllGrid(grids, colorTable, canvas);
		}
		//default & challenge & bonus input
		console.log(`%cDefault & Challenge & Bonus Input: `, "color : red;");
		let rule1 = `0 0 0 0 1 0 0 0 0
                 1 1 1 1 1 1 1 1 1`;
		let rule2 = `2 0 2 0 1 0 2 0 2
                 1 1 1 1 2 1 1 1 1
                 2 1 2 0 0 0 2 1 2`;
		let rule3 = `30 31 5 4 13 11 22 26 21
						     0 0 0 0 0 0 21 24 19
						     31 28 26 30 31 31 31 30 30
						     18 14 2 1 2 3 1 3 3
						     28 16 10 3 23 31 9 6 2
						     30 15 17 7 13 13 30 20 30
						     17 30 30 2 30 30 2 14 25
						     8 23 3 12 20 18 30 17 9
						     1 20 29 2 2 17 4 3 3
						     31 1 8 29 9 6 30 9 8
						     17 28 24 18 18 20 20 30 30
						     26 28 16 27 25 28 12 30 4
						     16 13 2 31 30 30 30 30 30
						     20 20 20 15 30 14 23 30 25
						     30 30 30 29 31 28 14 24 18
						     2 2 30 25 17 17 1 16 4
						     2 2 2 3 4 14 12 16 8
						     31 30 30 30 31 30 27 30 30
						     0 0 0 5 0 0 0 13 31
						     2 20 1 17 30 17 23 23 23
						     1 1 1 17 30 30 31 31 29
						     30 14 23 28 23 30 30 30 30
						     25 27 30 30 25 16 30 30 30
						     3 26 30 1 2 17 2 2 2
						     18 18 1 15 17 2 6 2 2
						     31 26 23 30 31 24 30 29 2
						     15 6 14 19 20 8 2 20 12
						     30 30 17 22 30 30 15 6 17
						     30 17 15 27 28 3 24 18 6
						     30 30 31 30 30 30 30 27 27
						     30 30 30 30 30 30 30 30 30
						     30 30 27 30 31 24 29 28 27`;
		let rules = [rule1, rule2, rule3], counter = 0;
		let intervalHandler = setInterval(() => {
			let canvas = document.getElementById("canvas");
			let ctx = canvas.getContext("2d"), width = canvas.offsetWidth;
			ctx.clearRect(0, 0, width, width);
			drawCarpet(4, rules[counter]);
			counter = counter + 1 == rules.length ? 0 : counter + 1;
		}, 1500);				     
	});
})();		