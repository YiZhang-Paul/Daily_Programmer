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
			let newSide = new Array(oldSide.length + 1).fill(0);
			return newSide.map((num, index) => (oldSide[index - 1] || 0) + (oldSide[index] || 0));
		}
		/**	
		 * generate side for Pascal's Pyramid
		 * @param {int} [layer] - target layer
		 *
		 * @return {Array} [side of target layer]
		 */
		function getSide(layer) {
			let side = [1];
			for(let i = 1; i < layer; i++) {
				side = makeNewSide(side);
			}
			return side;
		}
		/**	
		 * make new row
		 * @param {Array} [aboveRow] - row above
		 * @param {Array} [curRow] - current row
		 *
		 * @return {Array} [new row]
		 */
		function makeNewRow(aboveRow, curRow) {
			return curRow.map((num, index) => num + (aboveRow[index - 1] || 0) + (aboveRow[index] || 0));
		}
		/**	
		 * generate a given layer of Pascal's Pyramid
		 * @param {int} [layer] - target layer
		 *
		 * @return {String} [target layer]
		 */
		function getLayer(layer) {
			let curLayer = [[1]];
			for(let i = 2; i <= layer; i++) {
				let newLayer = [[1]];
				for(let j = 1; j < curLayer.length; j++) {
					newLayer.push(makeNewRow(curLayer[j - 1], curLayer[j]));
				}
				curLayer = [...newLayer, getSide(i)];
			}
			return displayLayer(curLayer);
		}
		/**
		 * display Pascal's Pyramid layer
		 * @param {Array} [layer] - layer to display
		 *
		 * @return {String} [layer display]
		 */
		function displayLayer(layer) {
			const curMaxLen = Math.max(...layer.map(row => row.join(" ").length));
			const maxLenIndex = layer.findIndex(row => row.join(" ").length == curMaxLen);
			const lenIncrease = 2 * (layer.length - 1 - maxLenIndex);
			const lastRowLen = curMaxLen + lenIncrease * (layer.length - 1 - maxLenIndex);
			return layer.map((row, index) => {
				const spaces = index > maxLenIndex ? 
					Math.round((curMaxLen + lenIncrease * (index - maxLenIndex) - row.join("").length) / (row.length - 1)) : 1;
				const rowStr = row.join(" ".repeat(spaces));
				return index == layer.length - 1 ? rowStr : " ".repeat(Math.floor((lastRowLen - rowStr.length) * 0.5)) + rowStr;
			}).join("\n");
		}
		//default input		
		console.log(`%cDefault Input: `, "color : red;");
		console.log(getLayer(1));
		console.log(getLayer(2));
		console.log(getLayer(3));
		console.log(getLayer(4));
		console.log(getLayer(5));
		console.log(getLayer(6));
		//challenge input		
		console.log(`%cChallenge Input: `, "color : red;");
		console.log(getLayer(14));
	});
})();