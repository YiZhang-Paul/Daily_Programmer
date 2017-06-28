/* jslint esversion: 6 */
(() => {
  document.addEventListener("DOMContentLoaded", () => {
  	/**
  	 * particle class
  	 * @param obj {}, int
  	 * 
  	 * grid     : grid containing particle
  	 * velocity : movement speed
  	 */
  	class Particle {
  		constructor(grid, velocity) {
  			this.moving = false;
  			this.xCord = 0;
  			this.yCord = 0;
  			this.hVelocity = velocity;
  			this.vVelocity = velocity;
  			this.minX = 0;
  			this.maxX = grid.width;
  			this.minY = 0;
  			this.maxY = grid.height;
  			this.totalBounce = 0;
  			this.totalDist = 0;
  		}
  		/**
  		 * bounce particle
  		 */
  		bounce() {
  			let atLeftRight = this.xCord === 0 || this.xCord == this.maxX;
  			let atTopBottom = this.yCord === 0 || this.yCord == this.maxY;
  			this.hVelocity *= atLeftRight ? -1 : 1;
  			this.vVelocity *= atTopBottom ? -1 : 1;
  			this.totalBounce += atLeftRight || atTopBottom ? 1 : 0;
  		} 
  		/**
  		 * move particle
  		 */
  		move() {
  			this.moving = true;
  			let toLeftRight = this.hVelocity > 0 ? this.maxX - this.xCord : this.xCord - this.minX; 
  			let toTopBottom = this.vVelocity > 0 ? this.maxY - this.yCord : this.yCord - this.minY;
				let travelDist = Math.min(Math.abs(this.hVelocity), toLeftRight, toTopBottom);   			
  			this.xCord += (this.hVelocity > 0 ? 1 : -1) * travelDist;
  			this.yCord += (this.vVelocity > 0 ? 1 : -1) * travelDist;
  			this.totalDist += travelDist;
  			this.bounce();
  		} 
  		/**
  		 * check corners
  		 * 
  		 * returns boolean
  		 */
  		hitCorner() {
  			let atLeftRight = this.xCord === 0 || this.xCord == this.maxX;
  			let atTopBottom = this.yCord === 0 || this.yCord == this.maxY;
  			return atLeftRight && atTopBottom;
  		} 
  	} 
  	/**
  	 * grid class
  	 * @param int, int
  	 *
  	 * width  : width of grid
  	 * height : height of grid
  	 */
  	class Grid {
  		constructor(width, height) {
  			this.width = width;
  			this.height = height;
  		}
  		/**
  		 * determine corner
  		 * @param int, int
  		 * 
  		 * xCord : X-Coordinate
  		 * yCord : Y-Coordinate
  		 *
  		 * returns String
  		 */
  		getCorner(xCord, yCord) {
  			let corner;
  			let atTopBottom = yCord === 0 || yCord == this.height;
  			if(xCord === 0 && atTopBottom) {
  				corner = yCord === 0 ? "UL" : "LL";
  			} else if(xCord == this.width && atTopBottom) {
  				corner = yCord === 0 ? "UR" : "LR";
  			}	
  			return corner;
  		} 
  	} 
  	/**
  	 * calculate ending corner, bounce time
  	 * and total time traveld for a particle
  	 * @param int, int, int
  	 *
  	 * height   : height of grid
  	 * width    : width of grid
  	 * velocity : particle movement speed
  	 *
  	 * returns array []
  	 */
  	function ricochet(height, width, velocity) {
  		let grid = new Grid(width, height);
  		let particle = new Particle(grid, velocity);
  		while(!particle.hitCorner() || !particle.moving) {
  			particle.move();
  		}
  		let corner = grid.getCorner(particle.xCord, particle.yCord);
  		return [corner, particle.totalBounce - 1, particle.totalDist / velocity];
  	} 
  	//default input
  	console.log("Default Input 1:");
  	let input = [8, 3, 1];
  	let result = ricochet(...input);
  	console.log(result.join(" "));
  	console.log("Default Input 2:");
    input = [15, 4, 2];
  	result = ricochet(...input);
  	console.log(result.join(" "));
  });
})();  	