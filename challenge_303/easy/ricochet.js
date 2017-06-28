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
  			this.started = false;
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
  			let leftOrRight = this.xCord === 0 || this.xCord == this.maxX;
  			let topOrBottom = this.yCord === 0 || this.yCord == this.maxY;
  			this.hVelocity *= leftOrRight ? -1 : 1;
  			this.vVelocity *= topOrBottom ? -1 : 1;
  			this.totalBounce += leftOrRight || topOrBottom ? 1 : 0;
  		} 
  		/**
  		 * move particle
  		 */
  		move() {
  			this.started = true;
  			let toLeftOrRight = this.hVelocity > 0 ? this.maxX - this.xCord : this.xCord - this.minX; 
  			let toTopOrBottom = this.vVelocity > 0 ? this.maxY - this.yCord : this.yCord - this.minY;
				let travelDist = Math.min(Math.abs(this.hVelocity), toLeftOrRight, toTopOrBottom);   			
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
  		checkCorner() {
  			let leftOrRight = this.xCord === 0 || this.xCord == this.maxX;
  			let topOrBottom = this.yCord === 0 || this.yCord == this.maxY;
  			return leftOrRight && topOrBottom;
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
  			if(xCord === 0 && (yCord === 0 || yCord == this.height)) {
  				corner = yCord === 0 ? "UL" : "LL";
  			} else if(xCord == this.width && (yCord === 0 || yCord == this.height)) {
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
  		while(!particle.checkCorner() || !particle.started) {
  			particle.move();
  		}
  		let corner = grid.getCorner(particle.xCord, particle.yCord);
  		return [corner, particle.totalBounce - 1, particle.totalDist / velocity];
  	} 
  	//default input
  	let input = [8, 3, 1];
  	let result = ricochet(...input);
  	console.log(result[0], result[1], result[2]);
    input = [15, 4, 2];
  	result = ricochet(...input);
  	console.log(result[0], result[1], result[2]);
  });
})();  	