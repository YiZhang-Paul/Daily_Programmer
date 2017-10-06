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
		fillGrid(0, 0, 50, "black", document.getElementById("canvas"));
	});
})();		