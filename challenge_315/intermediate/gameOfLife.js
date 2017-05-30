/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * game of life class
		 * @param int, int
		 *
		 * row    : row count of game grid
		 * column : column count of game grid
		 */
		class GameOfLife {
			constructor(row, column) {
				//canvas
				this.canvas = this.makeCanvas();
				this.ctx = this.canvas.getContext("2d");
				//game grid
				this.grid = this.makeGrid(row, column);
				this.gridWidth = this.canvas.width / column;
				this.gridHeight = this.canvas.height / row; 
			}
			/**
			 * game grids
			 * @param int, int
			 *
			 * row    : row count of game grid
			 * column : column count of game grid
			 *
			 * returns array []
			 */
			makeGrid(row, column) {
				let grid = [];
				for(let i = 0; i < row; i++) {
					grid[i] = [];
					for(let j = 0; j < column; j++) {
						//randomize state and color
						let state = Math.random() * 100 <= 7 ? 1 : 0;
						let color = Math.floor(Math.random() * 2) == 1 ? "blue" : "red"; 
						grid[i].push({state, color});
					}
				}
				return grid;
			}
			/**
			 * game canvas
			 *
			 * returns obj {}
			 */
			makeCanvas() {
				let canvas = document.createElement("canvas");
				canvas.className = "canvas";
				let height = window.innerHeight * 0.66;
				let width = height;
				canvas.width = width;
				canvas.height = height;
				canvas.style.width = width + "px";
				canvas.style.height = height + "px";
				document.getElementById("main").appendChild(canvas);
				return canvas;
			} 
			/**
			 * check neighbour states
			 * @param int, int
			 *
			 * row    : row count of current grid
			 * column : column count of current grid
			 *
			 * returns array []
			 */
			checkNeighbour(row, column) {
				let neighbourOn = 0, diffColor = 0;
				for(let i = row - 1; i < row + 2; i++) {
					for(let j = column - 1; j < column + 2; j++) {
						if(i == row && j == column) {
							continue;	
						}
						//wrap the grid around
						let curRow = i, curColumn = j; 
						if(curRow < 0 || curRow > this.grid.length - 1) {
							curRow = curRow < 0 ? this.grid.length - 1 : 0;
						}
						if(curColumn < 0 || curColumn > this.grid[curRow].length - 1) {
							curColumn = curColumn < 0 ? this.grid[curRow].length - 1 : 0;
						}
						//get all neighbours' states and colors
						let neighbour = this.grid[curRow][curColumn];
						if(neighbour.state == 1) neighbourOn++;	
						if(neighbour.color != this.grid[row][column].color) diffColor++;
					}
				}
				return [neighbourOn, diffColor];
			} 
			/** 
			 * switch grid on or off
			 * @param int, int, int, int
			 *
			 * row       : row count of current grid
			 * column    : column count of current grid
			 * totalOn   : total number of neighbours that are on
			 * diffColor : total number of neighbours with different color
			 */
			switchGrid(row, column, totalOn, diffColor) {
				let curGrid = this.grid[row][column];
				let sameColor = 9 - diffColor;
				if(diffColor < sameColor) {
					if(curGrid.state == 1) {
						this.grid[row][column].state = totalOn < 2 || totalOn > 3 ? 0 : 1;
					} else {
						this.grid[row][column].state = totalOn == 3 ? 1 : 0;
					}		
				} else if(diffColor > sameColor) {
					this.grid[row][column].color = curGrid.color == "blue" ? "red" : "blue"; 
				}
				//apply last rule
				if(!curGrid.state && totalOn == 3 && diffColor > sameColor) {
					this.grid[row][column].color = curGrid.color == "blue" ? "red" : "blue";
				}
			} 
			/**
			 * update grids
			 */
			update() {
				for(let i = 0; i < this.grid.length; i++) {
					for(let j = 0; j < this.grid[i].length; j++) {
						this.switchGrid(i, j, ...this.checkNeighbour(i, j));
					}
				}
			} 
			/**
			 * draw a grid
			 * @param int, int
			 *
			 * row    : row count of current grid
			 * column : column count of current grid
			 */
			drawGrid(row, column) {
				this.ctx.beginPath();
				let startX = column * this.gridWidth;
				let startY = row * this.gridHeight;
				this.ctx.rect(startX, startY, this.gridWidth, this.gridHeight);
				this.ctx.fillStyle = this.grid[row][column].color;
				this.ctx.fill();
			} 
			/**
			 * draw game board
			 */
			draw() {
				this.ctx.beginPath();
				this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
				this.ctx.fillStyle = "black";
				this.ctx.fill();
				//draw grids
				for(let i = 0; i < this.grid.length; i++) {
					for(let j = 0; j < this.grid[i].length; j++) {
						if(this.grid[i][j].state == 1) this.drawGrid(i, j);
					}
				}
			}
		} 
		//test game of life
		let gameOfLife = new GameOfLife(80, 80);
		//set interval for the game
		setInterval(() => {
			gameOfLife.update();
			gameOfLife.draw();
		}, 100);
	});
})();