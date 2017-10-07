/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * generate new side base on previous side
		 * @param {Array} [oldSide] - previous side
		 *
		 * @return {Array} [new side]
		 */
		function makeNewSide(oldSide) {
			let newSide = [];
			for(let i = 1; i < oldSide.length; i++) {
				newSide.push(oldSide[i - 1] + oldSide[i]);
			}
			return newSide;
		}
		/**
		 * generate side for Pascal's Pyramid
		 * @param {int} [layer] - target layer
		 *
		 * @return {Array} [side of target layer]
		 */
		function getSide(layer) {
			let side = [0, 1, 0];
			for(let i = 1; i < layer; i++) {
				side = [0, ...makeNewSide(side), 0];
			}
			return side.slice(1, -1);
		}
		console.log(getSide(1));
		console.log(getSide(2));
		console.log(getSide(3));
		console.log(getSide(4));
		console.log(getSide(5));
		console.log(getSide(6));
		console.log(getSide(7));
	});
})();