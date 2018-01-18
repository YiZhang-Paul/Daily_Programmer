/* jslint esversion: 6 */
(() => {
  	document.addEventListener("DOMContentLoaded", () => {

		class Point {

			constructor(x, y) {

				this.x = x;
				this.y = y;
			}
		}

		class Particle {

			constructor(grid, width = 0, height = 0, velocity = 1) {

				this.width = width;
				this.height = height;
				this.coordinate = this.startPoint;
				this.velocity = velocity;
				this.hVelocity = this.velocity;
				this.vVelocity = this.velocity;
				this.minX = this.width * 0.5;
				this.maxX = grid.width - this.width * 0.5;
				this.minY = this.height * 0.5;
				this.maxY = grid.height - this.height * 0.5;
				this.bounces = 0;
				this.distanceTraveled = 0;
			}

			get startPoint() {

				return new Point(this.width * 0.5, this.height * 0.5);
			}

			get atLeftRight() {

				return new Set([this.minX, this.maxX]).has(this.coordinate.x);
			}

			get toLeftRight() {

				return this.hVelocity > 0 ? this.maxX - this.coordinate.x : this.coordinate.x - this.minX;
			}

			get atTopBottom() {

				return new Set([this.minY, this.maxY]).has(this.coordinate.y);
			}

			get toTopBottom() {

				return this.vVelocity > 0 ? this.maxY - this.coordinate.y : this.coordinate.y - this.minY;
			}

			get collide() {

				return this.atLeftRight || this.atTopBottom;
			}

			get atCorner() {

				return this.atLeftRight && this.atTopBottom;
			}

			get currentCorner() {

				if(!this.atCorner) {

					return null;
				}

				if(this.coordinate.x === this.minX) {

					return this.coordinate.y === this.minY ? "UL" : "LL";
				}

				return this.coordinate.y === this.minY ? "UR" : "LR";
			}

			bounce() {

				this.hVelocity *= this.atLeftRight ? -1 : 1;
				this.vVelocity *= this.atTopBottom ? -1 : 1;
				this.bounces += this.collide ? 1 : 0;
			}

			move() {

				const distance = Math.min(this.velocity, this.toLeftRight, this.toTopBottom);
				this.coordinate.x += distance * (this.hVelocity > 0 ? 1 : -1);
				this.coordinate.y += distance * (this.vVelocity > 0 ? 1 : -1);
				this.distanceTraveled += distance;
				this.bounce();
			}
		}

		function ricochet(gridHeight, gridWidth, particleHeight, particleWidth, velocity) {

			let grid = {width : gridWidth, height : gridHeight};
			let particle = new Particle(grid, particleWidth, particleHeight, velocity);

			do {

				particle.move();

			} while(!particle.atCorner);

			return [particle.currentCorner, particle.bounces - 1, particle.distanceTraveled / velocity];
		}

		//default input
		console.log("%cDefault Input:", "color : red;");
		console.log(ricochet(8, 3, 0, 0, 1).join(" "));
		console.log(ricochet(15, 4, 0, 0, 2).join(" "));

		//bonus input
		console.log("%cBonus Input:", "color : red;");
		console.log(ricochet(10, 7, 3, 2, 1).join(" "));
  	});
})();