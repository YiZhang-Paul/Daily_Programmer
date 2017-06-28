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
  			this.xCord = 0;
  			this.yCord = 0;
  			this.hVelocity = velocity;
  			this.vVelocity = velocity;
  			this.minX = 0;
  			this.maxX = grid.width;
  			this.minY = 0;
  			this.maxY = grid.height;
  		}
  		/**
  		 * bounce particle
  		 */
  		bounce() {
  			this.hVelocity *= this.xCord === 0 || this.xCord == this.maxX ? -1 : 1;
  			this.vVelocity *= this.yCord === 0 || this.yCord == this.maxY ? -1 : 1;
  		} 
  		/**
  		 * move particle
  		 */
  		move() {
  			this.bounce();
  			this.xCord += this.hVelocity;
  			this.yCord += this.vVelocity;
  		} 
  		/**
  		 * check stop
  		 * 
  		 * returns boolean
  		 */
  		checkStop() {
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
  	} 
  	/**
  	 * calculate ending corner, bounce time
  	 * and total time traveld for a particle
  	 * @param int, int, int
  	 *
  	 * width    : width of grid
  	 * height   : height of grid
  	 * velocity : particle movement speed
  	 */
  	function ricochet(width, height, velocity) {
  		let grid = new Grid(width, height);
  		let particle = new Particle(grid, velocity);
  		console.log(grid, particle);

  	} 
  	//default input
  	let input = [8, 3, 1];
  	ricochet(...input);
    input = [15, 4, 2];
  });
})();  	