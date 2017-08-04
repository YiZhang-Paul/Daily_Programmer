/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * construct maze
		 * @param {String} [layout] - maze layout
		 *
		 * @return {Array} [maze]
		 */
		function createMaze(layout) {
			return layout.split("\n").map(line => line.trim().split(" ").map(grid => [grid, new Set()]));
		}
		/**
		 * determine starting point index
		 * @param {Array} [row] - starting row
		 * @param {char} [move] - starting move
		 * @param {int} [lastIndex] - index of last invalid starting point
		 *
		 * @return {int} [index of starting point]
		 */
		function getStartIndex(row, move, lastIndex) {
			let index = row.slice(lastIndex).findIndex(grid => grid[0] == move);
			return index == -1 ? -1 : index + lastIndex;
		}
		/**
		 * return a grid on specified coordinate
		 * @param {Array} [maze] - maze to be traversed
		 * @param {Object} [cords] - target coordinate
		 *
		 * @return {Array} [target grid]
		 */
		function getGrid(maze, cords) {
			return maze[cords.y] ? maze[cords.y][cords.x] : null;
		}
		/**
		 * get grid direction and coordinates on all four directions
		 * @param {Object} [cords] - current coordinate
		 *
		 * @return {Array} [direction and coordinates on all four directions]
		 */
		function getSurroundGrid(cords) {
			return [["up", {x : cords.x, y : cords.y - 1}],
			        ["down", {x : cords.x, y : cords.y + 1}],
			        ["left", {x : cords.x - 1, y : cords.y}],
			        ["right", {x : cords.x + 1, y : cords.y}]];
		}
		/**
		 * check valid directions can move to 
		 * @param {Array} [maze] - maze to be traversed
		 * @param {Object} [cords] - current coordinate
		 * @param {char} [nextMove] - next move
		 *
		 * @return {Array} [all valid directions]
		 */
		function canMoveTo(maze, cords, nextMove) {
			let validDirs = [];
			let grids = getSurroundGrid(cords);
			for(let i = 0; i < grids.length; i++) {
				let testGrid = getGrid(maze, grids[i][1]);
				if(testGrid && testGrid[0] == nextMove) {
					validDirs.push(grids[i]);
				}
			}
			return validDirs;
		}
		/**
		 * find opposite direction
		 * @param {String} [curDir] - current direction
		 *
		 * @return {String} [opposite direction]
		 */
		function oppositeDir(curDir) {
			switch(curDir) {
				case "up" : case "down" :
					return curDir == "up" ? "down" : "up";
				case "left" : case "right" :
					return curDir == "left" ? "right" : "left";	
			}
		}
		/**
		 * find path to move out of maze
		 * @param {Array} [maze] - maze to be traversed
		 * @param {Array} [moves] - all moves 
		 * @param {Array} [paths] - current path
		 * @param {int} [curStep] - current step
		 * @param {int} [revisited] - current number of revisits
		 *
		 * @return {Array} [path to move out of maze]
		 */
		function findPath(maze, moves, paths, curStep = 0, revisited = 0) {
			let curCord = paths[paths.length - 1];
			if(curCord.y === 0) {
				return paths.map(grid => [maze[grid.y][grid.x][0], grid]);
			}
			let validDirs = canMoveTo(maze, curCord, moves[(curStep + 1) % moves.length]);
			for(let i = 0; i < validDirs.length; i++) {
				let [direction, nextCord] = validDirs[i];
				//record visited grid and set revisiting limit
				getGrid(maze, curCord)[1].add(oppositeDir(direction));
				let revisiting = getGrid(maze, nextCord)[1].has(direction);
				if(!revisiting || !revisited) {
					let result = findPath(maze, moves, [...paths, nextCord], curStep + 1, revisiting ? 1 : 0);
					if(result.length) {
						return result;
					}
				}
			}
			return [];
		}
		/**
		 * find path to get out of maze
		 * @param {Array} [maze] - maze to be traversed
		 * @param {Array} [moves] - all moves
		 *
		 * @return {Array} [coordinates along the path]
		 */
		function moveOutMaze(maze, moves) {
			let startY = maze.length - 1;
			let startX = getStartIndex(maze[startY], moves[0], 0);
			let paths = findPath(maze, moves, [{x : startX, y : startY}]);
			while(!paths.length) {
				startX = getStartIndex(maze[startY], moves[0], startX + 1);
				if(startX == -1) {
					break;
				}
				paths = findPath(maze, moves, [{x : startX, y : startY}]);
			}
			return paths;
		}
		/**
		 * display route
		 * @param {String} [layout] - maze layout
		 * @param {Array} [moves] - all moves
		 */
		function displayRoute(layour, moves) {
			let maze = createMaze(layout);
			moveOutMaze(maze, moves).forEach(grid => {
				maze[grid[1].y][grid[1].x] = grid[0];
			});
			maze.forEach(row => {
				console.log(row.map(grid => Array.isArray(grid) ? "/" : grid).join(" "));
			});
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let layout = `B O R O Y
                  O R B G R
                  B O G O Y 
                  Y G B Y G 
                  R O R B R`;
    let moves = ["O", "G"];   
    displayRoute(layout, moves);
    //challenge input
		console.log(`%cChallenge Input: `, "color : red;");  
		layout = `R R B R R R B P Y G P B B B G P B P P R
							B G Y P R P Y Y O R Y P P Y Y R R R P P
							B P G R O P Y G R Y Y G P O R Y P B O O
							R B B O R P Y O O Y R P B R G R B G P G
							R P Y G G G P Y P Y O G B O R Y P B Y O
							O R B G B Y B P G R P Y R O G Y G Y R P
							B G O O O G B B R O Y Y Y Y P B Y Y G G
							P P G B O P Y G B R O G B G R O Y R B R
							Y Y P P R B Y B P O O G P Y R P P Y R Y
							P O O B B B G O Y G O P B G Y R R Y R B
							P P Y R B O O R O R Y B G B G O O P B Y
							B B R G Y G P Y G P R R P Y G O O Y R R
							O G R Y B P Y O P B R Y B G P G O O B P
							R Y G P G G O R Y O O G R G P P Y P B G
							P Y P R O O R O Y R P O R Y P Y B B Y R
							O Y P G R P R G P O B B R B O B Y Y B P
							B Y Y P O Y O Y O R B R G G Y G R G Y G
							Y B Y Y G B R R O B O P P O B O R R R P
							P O O O P Y G G Y P O G P O B G P R P B
							R B B R R R R B B B Y O B G P G G O O Y`;
		moves = ["R", "O", "Y", "P", "O"]; 
		displayRoute(layout, moves);
	});
})();			