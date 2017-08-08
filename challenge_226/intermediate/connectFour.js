/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * create game grid
		 * @param {int} [row] - total number of rows
		 * @param {int} [col] - total number of columns
		 *
		 * @return {Array} [game grid]
		 */
		function makeGrid(row = 6, col = 7) {
			let grid = [];
			for(let i = 0; i < row; i++) {
				grid.push(new Array(col).fill(0));
			}
			return grid;
		}
		/**
		 * convert character to column index
		 * @param {char} [char] - character to be converted
		 *
		 * @return {int} [column index]
		 */
		function charToIndex(char) {
			return char.toLowerCase().charCodeAt() - 97;
		}
		/**
		 * convert column index to character label
		 * @param {int} [index] - column index
		 *
		 * @return {char} [column label]
		 */
		function indexToChar(index) {
			return String.fromCharCode(index + 65);
		}
		/**
		 * drop a disc
		 * @param {char} [label] - label of column to drop disc
		 * @param {Array} [grid] - game grid
		 *
		 * @return {Array} [row and column of dropped disc]
		 */
		function dropDisc(label, grid) {
			let colIndex = charToIndex(label);
			let rowIndex = grid[grid.length - 1][colIndex] ? grid.findIndex(row => row[colIndex]) - 1 : grid.length - 1;
			grid[rowIndex][colIndex] = label == label.toUpperCase() ? "X" : "O";
			return [rowIndex, colIndex];
		}
		/**
		 * check connects on a given direction
		 * @param {int} [vDirect] - vertical traversing direction
		 * @param {int} [hDirect] - horizontal traversing direction
		 * @param {int} [row] - starting row
		 * @param {int} [col] - starting column
		 * @param {Array} [grid] - game grid to be traversed
		 *
		 * @return {Array} [connected grids]
		 */
		function getConnect(vDirect, hDirect, row, col, grid) {
			let disc = grid[row][col];
			let connects = [], dist = 1;
			let [nextRow, nextCol] = [row + vDirect * dist, col + hDirect * dist];
			while(grid[nextRow] && grid[nextRow][nextCol] == disc) {
				dist++;
				connects.push(`${indexToChar(nextCol)}${grid.length - nextRow}`);
				[nextRow, nextCol] = [row + vDirect * dist, col + hDirect * dist];
			}
			return connects;
		}
		/**
		 * check for game ending connects
		 * @param {int} [vDirect] - vertical traversing direction
		 * @param {int} [hDirect] - horizontal traversing direction
		 * @param {int} [row] - starting row
		 * @param {int} [col] - starting column
		 * @param {Array} [grid] - game grid to be traversed
		 *
		 * @return {String} [game ending connect]
		 */
		function hasEndConnect(vDirect, hDirect, row, col, grid) {
			let connects = [...getConnect(vDirect, hDirect, row, col, grid).reverse(),
			                `${indexToChar(col)}${grid.length - row}`,
			                ...getConnect(-vDirect, -hDirect, row, col, grid)];
			return connects.length == 4 ? connects.join(" ") : null;			                
		}
		/**
		 * check for game end
		 * @param {int} [row] - starting row
		 * @param {int} [col] - starting column
		 * @param {Array} [grid] - game grid
		 *
		 * @return {String} [game ending connect]
		 */
		function gameEnd(row, col, grid) {
			let directions = {h : [0, -1], v : [-1, 0], ld : [-1, -1], rd : [1, -1]};
			for(let direction in directions) {
				let connects = hasEndConnect(...directions[direction], row, col, grid);
				if(connects) {
					return connects;
				}
			}
			return null;
		}
		/**
		 * simulate connect four game and determine winner
		 * @param {String} [moves] - player moves
		 *
		 * @return {String} [game result]
		 */
		function playConnectFour(moves) {
			let [allMove, grid] = [moves.match(/\w/g), makeGrid()];
			for(let i = 0; i < allMove.length; i++) {
				let recentGrid = dropDisc(allMove[i], grid);
				let endConnect = gameEnd(...recentGrid, grid);
				if(endConnect) {
					return `${i % 2 ? "O" : "X"} Won at Move ${Math.ceil((i + 1) * 0.5)} (with ${endConnect})`;
				}
			}
			return "Cannot Decide Winner.";
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = `C  d
                 D  d
                 D  b
                 C  f
                 C  c
                 B  a
                 A  d
                 G  e
                 E  g`;
    console.log(input.split("\n").map(line => line.trim()).join("\n"));             
		console.log(`%c-> ${playConnectFour(input)}`, "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = `D  d
             D  c    
             C  c    
             C  c
             G  f
             F  d
             F  f
             D  f
             A  a
             E  b
             E  e
             B  g
             G  g
             B  a`;
    console.log(input.split("\n").map(line => line.trim()).join("\n"));           
		console.log(`%c-> ${playConnectFour(input)}`, "color : orange;");
	});
})();