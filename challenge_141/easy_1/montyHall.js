/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * pick random number 
		 * @param {int} [min] - minimum number
		 * @param {int} [max] - maximum number
		 *
		 * @return {int} [random number]
		 */
		function randomNumber(min = 0, max = 3) {
			return Math.floor(Math.random() * (max + 1 - min)) + min;
		}
		/**
		 * initialize round
		 *
		 * @return {Array} [objects behind each door]
		 */
		function initRound() {
			let objects = ["goat", "goat", "car"];
			let arrangement = [];
			while(objects.length) {
				const index = randomNumber(0, objects.length - 1);
				arrangement.push(objects.splice(index, 1)[0]);
			}
			return arrangement;
		}
		/**
		 * pick a random door
		 * @param {int} [doors] - total number of doors
		 *
		 * @return {int} [random door number]
		 */
		function pickDoor(doors = 3) {
			return randomNumber(0, doors - 1);
		}
		
		console.log(pickDoor());
	});
})();		