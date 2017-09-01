/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * bucket class
		 * @param {int} [capacity] - bucket capacity
		 * @param {int} [carrying] - currnet carrying amount
		 */
		class Bucket {
			constructor(capacity, carrying = 0) {
				this.capacity = capacity;
				this.carrying = carrying;
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
			 * @return {boolean} [rest result]
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
			 * check if a bucket can transfer water to another bucket
			 * @param {Object} [target] - target bucket
			 *
			 * @return {boolean} [test result]
			 */
			canTransfer(target) {
				return this.canEmpty() ? target.canFill() : false;
			}
			/**
			 * transfer water to other buckets
			 * @param {Object} [target] - target bucket
			 */
			transfer(target) {
				let amount = Math.min(target.capacity - target.carrying, this.carrying);
				[target.carrying, this.carrying] = [target.carrying + amount, this.carrying - amount];
			}
		}
		/**
		 * riddle solver class
		 * @param {Array} [capacities] - bucket capacities
		 * @param {int} [target] - target value
		 */
		class RiddleSolver {
			constructor(capacities, target) {
				this.capacities = capacities;
				this.solutions = this.solveRiddle(target);
			}
			/**
			 * check if a solution is found
			 * @param {Array} [buckets] - current buckets
			 * @param {int} [target] - target solution
			 *
			 * @return {boolean} [test result]
			 */
			isSolved(buckets, target) {
				return buckets.some(bucket => bucket.carrying == target);
			}
			/**
			 * check if a duplicate move exists
			 * @param {Array} [moves] - all moves
			 *
			 * @return {boolean} [test result]
			 */
			hasMove(moves) {
				let tested = moves[moves.length - 1];
				let pastMoves = [...moves.slice(0, -1), [...this.capacities]];
				return pastMoves.some(move => move[0] == tested[0] && move[1] == tested[1]);
			}
			/**
			 * find all available moves
			 * @param {Array} [buckets] - current buckets
			 *
			 * @return {Array} [all available moves]
			 */
			getMoves(buckets) {
				let moves = [];
				buckets.forEach((bucket, index) => {
					if(bucket.canFill()) moves.push([index, "fill"]);
					if(bucket.canEmpty()) moves.push([index, "empty"]);
					if(bucket.canTransfer(buckets[index ? 0 : 1])) moves.push([index, "transfer", index ? 0 : 1]); 
				});
				return moves;
			}
			/**
			 * get buckets
			 *
			 * @return {Array} [new buckets]
			 */
			getBucket() {
				return this.capacities.map(capacity => new Bucket(capacity));
			}
			/**
			 * copy current buckets
			 * @param {Array} [buckets] - current buckets
			 *
			 * @return {Array} [bucket copies]
			 */
			copyBucket(buckets) {
				return buckets.map(bucket => new Bucket(bucket.capacity, bucket.carrying));
			}
			/**
			 * apply moves to buckets
			 * @param {Array} [buckets] - buckets to apply moves
			 * @param {Array} [move] - move to be applied
			 */
			applyMove(bucket, move) {
				bucket[move[0]][move[1]](bucket[move[2]]);
			}
			/**
			 * solve riddles
			 * @param {int} [target] - target value
			 * @param {Array} [curBuckets] - current buskets
			 * @param {Array} [moves] - all moves 
			 *
			 * @return {Array} [solution to target value]
			 */
			solveRiddle(target, curBuckets = this.getBucket(), moves = [[0, 0]]) {
				if(this.isSolved(curBuckets, target)) {
					return [moves];
				}
				let solutions = [], nextMoves = this.getMoves(curBuckets);
				if(!nextMoves || this.hasMove(moves)) {
					return null;
				}
				for(let i = 0; i < nextMoves.length; i++) {
					let buckets = this.copyBucket(curBuckets);
					this.applyMove(buckets, nextMoves[i]);
					let solution = this.solveRiddle(target, buckets, [...moves, [buckets[0].carrying, buckets[1].carrying]]);
					if(solution && solution.length) {
						solutions.push(...solution);
						break;
					}
				}
				return solutions;
			}
		}
		/**
		 * display solution
		 * @param {Array} [solution] - solution to be displayed
		 */
		function displaySolution(solutions) {
			if(!solutions.length) {
				console.log(`%cNo Solution Found.`, "color : orange;");
				return;
			}
			solutions.forEach(solution => {
				console.log(`%c${solution.map(move => `(${move.join(", ")})`).join(" -> ")} End`, "color : orange;");
			});
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let time = new Date().getTime();
		let input = [3, 5, 4];
		let solver = new RiddleSolver(input.slice(0, 2), input[2]);
		console.log(`%cBuckets: ${input.slice(0, 2).join(", ")}; Target: ${input[2]} -> %cTime Spent: ${new Date().getTime() - time}ms`, "color : skyblue;", "color : red;");
		displaySolution(solver.solutions);
		time = new Date().getTime();
    input = [6, 16, 7];
    solver = new RiddleSolver(input.slice(0, 2), input[2]);
		console.log(`%cBuckets: ${input.slice(0, 2).join(", ")}; Target: ${input[2]} -> %cTime Spent: ${new Date().getTime() - time}ms`, "color : skyblue;", "color : red;");
		displaySolution(solver.solutions);
		time = new Date().getTime();
    input = [101, 317, 64];
    solver = new RiddleSolver(input.slice(0, 2), input[2]);
		console.log(`%cBuckets: ${input.slice(0, 2).join(", ")}; Target: ${input[2]} -> %cTime Spent: ${new Date().getTime() - time}ms`, "color : skyblue;", "color : red;");
		displaySolution(solver.solutions);
		time = new Date().getTime();
    input = [571, 317, 420];
    solver = new RiddleSolver(input.slice(0, 2), input[2]);
		console.log(`%cBuckets: ${input.slice(0, 2).join(", ")}; Target: ${input[2]} -> %cTime Spent: ${new Date().getTime() - time}ms`, "color : skyblue;", "color : red;");
		displaySolution(solver.solutions);
		time = new Date().getTime();
    input = [1699, 1409, 1334];
    solver = new RiddleSolver(input.slice(0, 2), input[2]);
		console.log(`%cBuckets: ${input.slice(0, 2).join(", ")}; Target: ${input[2]} -> %cTime Spent: ${new Date().getTime() - time}ms`, "color : skyblue;", "color : red;");
		displaySolution(solver.solutions);
	});
})();		