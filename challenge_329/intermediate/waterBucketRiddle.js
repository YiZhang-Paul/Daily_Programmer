/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * bucket class
		 * @param {int} [capacity] - bucket capacity
		 */
		class Bucket {
			constructor(capacity) {
				this.capacity = capacity;
				this.carrying = 0;
			}
			/**
			 * check if a bucket can be filled
			 *
			 * @return {boolean} [test result]
			 */
			canFill() {
				return this.carrying < this.capacity;
			}
			/**
			 * fill bucket 
			 */
			fill() {
				this.carrying = this.capacity;
			}
			/**
			 * check if a bucket can be emptied
			 *
			 * @return {boolean} [test result]
			 */
			canEmpty() {
				return this.carrying > 0;
			}
			/**
			 * empty bucket
			 */
			empty() {
				this.carrying = 0;
			}
			/**
			 * check if a bucket can transfer water to other bukcets
			 * @param {Object} [target] - target bucket to receive water
			 * 
			 * @return {boolean} [test result]
			 */
			canTransfer(target) {
				return this.canEmpty() ? target.canFill() : false;
			}
			/**
			 * transfer water to other buckets
			 * @param {Object} [target] - target bucket to receive water
			 */
			transfer(target) {
				let amount = Math.min(target.capacity - target.carrying, this.carrying);
				[target.carrying, this.carrying] = [target.carrying + amount, this.carrying - amount];
			}
		}
	});
})();		