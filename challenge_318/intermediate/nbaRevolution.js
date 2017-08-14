/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * generate all match-ups
		 * @param {String} [names] - names of all teams
		 *
		 * @return {Array} [all match ups]
		 */
		function allMatchUps(names) {
			let teams = names.split("\n").map(name => name.trim());
			let matchUps = [];
			for(let i = 0; i < teams.length; i++) {
				for(let j = i + 1; j < teams.length; j++) {
					matchUps.push([teams[i], teams[j]], [teams[j], teams[i]]);
				}
			}
			return matchUps;
		}
		/**
		 * assign games for all teams
		 * @param {String} [names] - names of all teams
		 *
		 * @return {String} [game schedules]
		 */
		function assignGames(names) {
			let matchUps = allMatchUps(names);
			console.log(matchUps);
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = `Cleveland Cavaliers
                 Golden State Warriors
                 San Antonio Spurs
                 Toronto raptors`;
		console.log(assignGames(input));              
	});
})();