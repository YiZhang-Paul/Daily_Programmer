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

  });
})();  	