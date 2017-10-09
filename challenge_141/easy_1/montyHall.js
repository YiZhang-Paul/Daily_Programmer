/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * generate random number
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
		 * @param {Array} [objects] - available objects for the round
		 *
		 * @return {Array} [objects behind each door]
		 */
		function initRound(objects = ["goat", "goat", "car"]) {
			let arrange = [];
			while(objects.length) {
				const index = randomNumber(0, objects.length - 1);
				arrange.push(objects.splice(index, 1)[0]);
			}
			return arrange;
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
		 * @param {Array} [arrange] - arrangement of objects
		 * @param {int} [pick] - player's pick
		 *
		 * @return {int} [suggested door]
		 */
		function suggestDoor(arrange, pick) {
			let remainDoors = arrange.map((door, index) => index).filter(door => door != pick);
			let validDoors = remainDoors.filter(door => arrange[door] != "car");
			const doorShown = validDoors[randomNumber(0, validDoors.length - 1)];
			return remainDoors.filter(door => door != doorShown);
		}
		/**
		 * check if a player wins a round
		 * @param {Array} [arrange] - arrangement of objects
		 * @param {int} [pick] - player's pick
		 *
		 * @return {boolean} [test result]
		 */
		function isWin(arrange, pick) {
			return arrange[pick] == "car";
		}
		/**
		 * simulate a round with both tactics
		 *
		 * @return {Object} [round result with both tactics]
		 */
		function simulateRound() {
			let arrange = initRound();
			const pick = pickDoor();
			return {
				stick : isWin(arrange, pick),
				change : isWin(arrange, suggestDoor(arrange, pick))
			};
		}
		/**
		 * simulate games and calculate success rate with both tactics
		 * @param {int} [rounds] - total number of rounds to simulate
		 *
		 * @return {String} [winning rates for different tactics]
		 */
		function getSuccessRate(rounds) {
			let [tactic1Win, tactic2Win] = [0, 0];
			for(let i = 0; i < rounds; i++) {
				let result = simulateRound();
				tactic1Win += result.stick ? 1 : 0;
				tactic2Win += result.change ? 1 : 0;
			}
			return [tactic1Win, tactic2Win].map((wins, index) => {
				return `Tactic ${index + 1}: ${(wins / rounds * 100).toFixed(1)}% Winning Chance`;
			}).join("\n");
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		console.log(`%c1000000 Games ->\n%c${getSuccessRate(1000000)}`, "color : skyblue;", "color : orange;");
	});
})();		