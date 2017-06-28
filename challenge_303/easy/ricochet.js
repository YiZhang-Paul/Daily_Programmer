/* jslint esversion: 6 */
(() => {
  document.addEventListener("DOMContentLoaded", () => {
  	/**
  	 * particle class
  	 * @param obj {}, int, int, int
  	 * 
  	 * grid     : grid containing particle
  	 * velocity : movement speed
  	 * width    : width of particle
  	 * height   : height of particle
  	 */
  	class Particle {
  		constructor(grid, velocity, width = 0, height = 0) {
  			this.moving = false;
  			this.width = width;
  			this.height = height;
  			this.xCord = this.width * 0.5;
  			this.yCord = this.height * 0.5;
  			this.hVelocity = velocity;
  			this.vVelocity = velocity;
  			this.minX = this.width * 0.5;
  			this.maxX = grid.width - this.width * 0.5;
  			this.minY = this.height * 0.5;
  			this.maxY = grid.height - this.height * 0.5;
  			this.totalBounce = 0;
  			this.totalDist = 0;
  		}
  		/**
  		 * bounce particle
  		 */
  		bounce() {
  			let atLeftRight = this.xCord == this.minX || this.xCord == this.maxX;
  			let atTopBottom = this.yCord == this.minY || this.yCord == this.maxY;
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
  			let atLeftRight = this.xCord == this.minX || this.xCord == this.maxX;
  			let atTopBottom = this.yCord == this.minY || this.yCord == this.maxY;
  			return atLeftRight && atTopBottom;
  		} 
  		/**
  		 * determine corner
  		 *
  		 * returns String
  		 */
  		getCorner() {
  			let corner;
  			let atTopBottom = this.yCord == this.minY || this.yCord == this.maxY;
  			if(this.xCord == this.minX && atTopBottom) {
  				corner = this.yCord == this.minY ? "UL" : "LL";
  			} else if(this.xCord == this.maxX && atTopBottom) {
  				corner = this.yCord == this.minY ? "UR" : "LR";
  			}	
  			return corner;
  		} 
  	} 
  	/**
  	 * calculate ending corner, bounce time
  	 * and total time traveld for a particle
  	 * @param int, int, int, int, int
  	 *
  	 * gHeight  : height of grid
  	 * gWidth   : width of grid
  	 * pHeight  : height of particle
  	 * pWidth   : width of particle
  	 * velocity : particle movement speed
  	 *
  	 * returns array []
  	 */
  	function ricochet(gHeight, gWidth, pHeight, pWidth, velocity) {
  		let particle = new Particle({width : gWidth, height : gHeight}, velocity, pWidth, pHeight);
  		while(!particle.hitCorner() || !particle.moving) {
  			particle.move();
  		}
  		return [particle.getCorner(), particle.totalBounce - 1, particle.totalDist / velocity];
  	} 
  	//default input
  	console.log("Default Input 1:");
  	let input = [8, 3, 0, 0, 1];
  	let result = ricochet(...input);
  	console.log(result.join(" "));
  	console.log("Default Input 2:");
    input = [15, 4, 0, 0, 2];
  	result = ricochet(...input);
  	console.log(result.join(" "));
  	//bonus input
  	console.log("Bonus Input:");
  	input = [10, 7, 3, 2, 1];
  	result = ricochet(...input);
  	console.log(result.join(" "));
  });
})();  	