/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * critical hit calculator
		 * @param {int} [sides] - number of sides on the die
		 * @param {int} [health] - health left on the enemy
		 *
		 * @return {float} [probability of critical hit]
		 */
		function getCritChance(sides, health) {
			if(sides > health) {
				return (sides - health + 1) / sides;
			}
			let [maxRolls, remain] = [Math.floor(health / sides), health % sides];
			return Math.pow(1 / sides, maxRolls) * (remain ? (sides - remain + 1) / sides : 1);
		}
		//challenge input 
		console.log(`%cChallenge Input: `, "color : red;");
		let input = [4, 1];
		console.log(`%cSides: %c${input[0]}%c, Health: %c${input[1]}%c, Crit Chance: %c${getCritChance(...input)}`, "color : skyblue;", "color : orange;", "color : skyblue;", "color : orange;", "color : skyblue;", "color : orange;");
		input = [4, 4];
		console.log(`%cSides: %c${input[0]}%c, Health: %c${input[1]}%c, Crit Chance: %c${getCritChance(...input)}`, "color : skyblue;", "color : orange;", "color : skyblue;", "color : orange;", "color : skyblue;", "color : orange;");
		input = [4, 5];
		console.log(`%cSides: %c${input[0]}%c, Health: %c${input[1]}%c, Crit Chance: %c${getCritChance(...input)}`, "color : skyblue;", "color : orange;", "color : skyblue;", "color : orange;", "color : skyblue;", "color : orange;");
		input = [4, 6];
		console.log(`%cSides: %c${input[0]}%c, Health: %c${input[1]}%c, Crit Chance: %c${getCritChance(...input)}`, "color : skyblue;", "color : orange;", "color : skyblue;", "color : orange;", "color : skyblue;", "color : orange;");
		input = [1, 10];
		console.log(`%cSides: %c${input[0]}%c, Health: %c${input[1]}%c, Crit Chance: %c${getCritChance(...input)}`, "color : skyblue;", "color : orange;", "color : skyblue;", "color : orange;", "color : skyblue;", "color : orange;");
		input = [100, 200];
		console.log(`%cSides: %c${input[0]}%c, Health: %c${input[1]}%c, Crit Chance: %c${getCritChance(...input)}`, "color : skyblue;", "color : orange;", "color : skyblue;", "color : orange;", "color : skyblue;", "color : orange;");
		input = [8, 20];
		console.log(`%cSides: %c${input[0]}%c, Health: %c${input[1]}%c, Crit Chance: %c${getCritChance(...input)}`, "color : skyblue;", "color : orange;", "color : skyblue;", "color : orange;", "color : skyblue;", "color : orange;");		
	});
})();			