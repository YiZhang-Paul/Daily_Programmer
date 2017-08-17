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
		 * @param {boolean} [explode] - allow/forbid explosion
		 *
		 * @return {Array} [house after applying smoke]
		 */
		function applySmoke(house, cords, explode = false) {
			let [x, y] = cords.split(" ").map(cord => Number(cord));
			let tile = getTile(y, x, house);
			if(new Set("F#|/=_").has(tile) || tile === null) {
				return explode && tile == "F" ? applyExplosion(house, y, x) : undefined;
			}
			house[y][x] = tile == "S" ? "F" : "S";
		}
		/**
		 * apply explosion
		 * @param {Array} [house] - house being simulated
		 * @param {int} [row] - row in house
		 * @param {int} [col] - column in house
		 */
		function applyExplosion(house, row, col) {
			getAdjacentTiles(row, col, house).forEach(tileCord => {
				let [tile, x, y] = [getTile(...tileCord, house), tileCord[1], tileCord[0]];
				if(new Set("F/_").has(tile)) {
					return spreadExplosion(house, row, col, y - row, x - col);
				}
				switch(tile) {
					case " " : 
						house[y][x] = "F";
						break;
					case "|" : case "=" :
						house[y][x] = "_";
						break;
					case "#" :
						house[y][x] = "=";
						break;		
				}
			});
		}
    /**
     * spread explosion
     * @param {Array} [house] - house being simulated
     * @param {int} [curRow] - current row in house
     * @param {int} [curCol] - current column in house
     * @param {int} [vDir] - vertical moving direction of explosion
     * @param {int} [hDir] - horizontal moving direction of explosion
     */
    function spreadExplosion(house, curRow, curCol, vDir, hDir) {
    	let nextTile = getTile(curRow + vDir, curCol + hDir, house);
    	while(new Set("F/_").has(nextTile)) {
    		[curRow, curCol] = [curRow + vDir, curCol + hDir];
    		let [nextRow, nextCol] = [curRow + vDir, curCol + hDir];
    		nextTile = getTile(nextRow, nextCol, house);
    		if(new Set("#|=").has(nextTile)) {
    			house[nextRow][nextCol] = nextTile == "#" ? "=" : "_";
    		}
    	} 
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
		 * spread fire, will keep on spreading until no more fire can be spreaded
		 * @param {Array} [house] - house being simulated
		 */
		function spreadFire(house) {
			let spreaded = false;
			house.forEach((row, rowIndex) => {
				row.forEach((col, colIndex) => {
					if(getTile(rowIndex, colIndex, house) == "F") {
						getAdjacentTiles(rowIndex, colIndex, house).forEach(tileCord => {
							let [tile, x, y] = [getTile(...tileCord, house), tileCord[1], tileCord[0]];
							if(tile == "S") {
								[house[y][x], spreaded] = ["F", true];
							} else if((tile == "/" || tile == "_") && getTile(y * 2 - rowIndex, x * 2 - colIndex, house) == "S") {
								[house[y * 2 - rowIndex][x * 2 - colIndex], spreaded] = ["F", true];
							}
						});
					}
				});
			});
			return spreaded ? spreadFire(house) : undefined;
		}
		/**
		 * simulate "Let It Burn" game
		 * @param {String} [layout] - house layout
		 * @param {Array} [moves] - locations to apply smoke
		 * @param {boolean} [explode] - allow/forbid explosion
		 *
		 * @return {Array} [final state of house]
		 */
		function letItBurn(layout, moves, explode = false) {
			let house = makeHouse(layout);
			moves.forEach(move => {
				applySmoke(house, move, explode);
				spreadFire(house);
			});
			return house;
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = `#############/#
                 #     |       #
                 #     #       #
                 #     #       #
                 #######       #
                 #     _       #
                 ###############`;
		let moves = ["1 1", "1 2", "1 3", "5 6", "2 4", "1 1", "1 2", "5 5", "5 5", "9 1", "7 5", "2 2"];
		let result = letItBurn(input, moves).map(row => row.join("")).join("\n");                
		console.log(`%c${input.split("\n").map(line => line.trim()).join("\n")}`, "color : skyblue;");                 
		console.log(`Result -> `);
		console.log(`%c${result}`, "color : orange;");
		//bonus input
		console.log(`%cBonus Input: `, "color : red;");
		console.log(`%c${result}`, "color : skyblue;"); 
		moves = ["7 1", "8 1", "9 1", "10 1", "8 1", "11 1"];
		result = letItBurn(result, moves, true).map(row => row.join("")).join("\n"); 
		console.log(`Result -> `);  
		console.log(`%c${result}`, "color : orange;");
	});
})();