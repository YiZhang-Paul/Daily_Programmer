/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * create house
		 * @param {String} [layout] - house layout
		 *
		 * @return {Array} [simulated house]
		 */
		function makeHouse(layout) {
			return layout.split("\n").map(line => line.trim().split(""));
		}
		/**
		 * get a tile in the house
		 * @param {int} [row] - row in house
		 * @param {int} [col] - column in house
		 * @param {Array} [house] - house being simulated
		 *
		 * @return {char} [tile in house]
		 */
		function getTile(row, col, house) {
			return !house[row] || house[row][col] === undefined ? null : house[row][col];
		}
		/**
		 * develop smoke at given coordinate
		 * @param {Array} [house] - house being simulated
		 * @param {String} [cords] - X, Y coordinates
		 *
		 * @return {Array} [house after applying smoke]
		 */
		function applySmoke(house, cords) {
			let [x, y] = cords.split(" ").map(cord => Number(cord));
			let tile = getTile(y, x, house);
			if(new Set("F#|/=_").has(tile) || tile === null) {
				return;
			}
			house[y][x] = tile == "S" ? "F" : "S";
		}
		/**
		 * retrieve adjacent tiles on all four directions
		 * @param {int} [row] - row in house
		 * @param {int} [col] - column in house
		 * @param {Array} [house] - house being simulated
		 *
		 * @return {Array} [coordinates of adjacent tiles]
		 */
		function getAdjacentTiles(row, col, house) {
			let adjacent = [];
			if(getTile(row - 1, col, house) !== null) adjacent.push([row - 1, col]);
			if(getTile(row + 1, col, house) !== null) adjacent.push([row + 1, col]);
			if(getTile(row, col - 1, house) !== null) adjacent.push([row, col - 1]);
			if(getTile(row, col + 1, house) !== null) adjacent.push([row, col + 1]);
			return adjacent;
		}
		/**
		 * spread fire 
		 * @param {Array} [house] - house being simulated
		 */
		function spreadFire(house) {
			let noSpread = false;
			while(!noSpread) {
				let spreaded = false;
				for(let i = 0; i < house.length; i++) {
					for(let j = 0; j < house[i].length; j++) {
						if(house[i][j] == "F") {
							let adjacentTiles = getAdjacentTiles(i, j, house);
							for(let k = 0; k < adjacentTiles.length; k++) {
								if(getTile(...adjacentTiles[k], house) == "S") {
									house[adjacentTiles[k][0]][adjacentTiles[k][1]] = "F";
									spreaded = true;
								}
							}
						}
					}
				}
				noSpread = !spreaded;
			}
		}
		/**
		 * simulate "Let It Burn" game
		 * @param {String} [layout] - house layout
		 * @param {Array} [moves] - locations to apply smoke
		 *
		 * @return {Array} [final state of house]
		 */
		function letItBurn(layout, moves) {
			let house = makeHouse(layout);
			moves.forEach(move => {
				applySmoke(house, move);
				spreadFire(house);
			});
			return house;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = `#############/#
                 #     |       #
                 #     #       #
                 #     #       #
                 #######       #
                 #     _       #
                 ###############`;
		let moves = ["1 1", "1 2", "1 3", "5 6", "4 2", "1 1", "1 2", "5 5", "5 5", "9 1", "5 7", "2 2"];                 
		console.log(`%c${input.split("\n").map(line => line.trim()).join("\n")}`, "color : skyblue;");                 
		console.log(`Result -> `);
		console.log(`%c${letItBurn(input, moves).map(row => row.join("")).join("\n")}`, "color : orange;");
	});
})();		