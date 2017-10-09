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
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		/**
		 * initialize round
		 * @param {Array} [objects] - avaliable objects for the round
		 *
		 * @return {Array} [objects behind each door]
		 */
		function initRound(objects = ["goat", "goat", "car"]) {
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
		/**
		 * suggest a door to player
		 * @param {Array} [arrangement] - current arrangement
		 * @param {int} [curPick] - current player pick
		 *
		 * @return {int} [suggested door]
		 */
		function suggestDoor(arrangement, curPick) {
			let remainDoors = arrangement.map((door, index) => index).filter(door => door != curPick);
			let validDoors = remainDoors.filter(door => arrangement[door] != "car");
			const doorShown = validDoors[randomNumber(0, validDoors.length - 1)];
			return remainDoors.filter(door => door != doorShown);
		}
		/**
		 * check if a player wins a round
		 * @param {Array} [arrangement] - current arrangement
		 * @param {int} [curPick] - current player pick
		 *
		 * @return {boolean} [test result]
		 */
		function isWin(arrangement, curPick) {
			return arrangement[curPick] == "car";
		}
		/**
		 * simulate a round with both tactics
		 *
		 * @return {Object} [round result with both tactics]
		 */
		function simulateRound() {
			let arrangement = initRound();
			const doorPick = pickDoor();
			return {
				stick : isWin(arrangement, doorPick),
				change : isWin(arrangement, suggestDoor(arrangement, doorPick))
			};
		}
		console.log(simulateRound());
	});
})();		