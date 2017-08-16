/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * get all team match-ups
		 * @param {Array} [teams] - names of all teams
		 *
		 * @return {Array} [all match-ups]
		 */
		function allMatchUps(teams) {
			let matchUps = [];
			for(let i = 0; i < teams.length; i++) {
				for(let j = i + 1; j < teams.length; j++) {
					matchUps.push([teams[i], teams[j]], [teams[j], teams[i]]);
				}
			}
			return matchUps;
		}
		/**
		 * get all team records
		 * @param {Array} [teams] - names of all teams
		 *
		 * @return {Array} [all team records]
		 */
		function allRecords(teams) {
			let records = new Map();
			teams.forEach(team => {
				records.set(team, {last: null, homeLimit : false, awayLimit : false});
			});
			return records;
		}
		/**
		 * split match-ups for both season halves
		 * @param {Array} [matchUps] - all match-ups
		 *
		 * @return {Array} [match-ups splitted into equal halves]
		 */
		function splitMatchUp(matchUps) {
			let pairs = [];
			for(let i = 0; i < matchUps.length - 1; i += 2) {
				pairs.push(matchUps.slice(i, i + 2));
			}
			let picks = pairs.map(pair => Math.floor(Math.random() * 2));
			return [picks.map((pick, index) => pairs[index][pick]), picks.map((pick, index) => pairs[index][pick == 1 ? 0 : 1])];
		}
		/**
		 * assign games for all teams
		 * @param {String} [teams] - names of all teams
		 *
		 * @return {String} [game schedules]
		 */
		function assignGames(teams) {
			let names = teams.split("\n").map(team => team.trim());
			let matchUps = allMatchUps(names), records = allRecords(names);
			console.log(splitMatchUp(matchUps));
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = `Cleveland Cavaliers
                 Golden State Warriors
                 San Antonio Spurs
                 Toronto raptors`;
		console.log(assignGames(input)); 
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = `Atlanta Hawks
             Boston Celtics
             Brooklyn Nets
             Charlotte Hornets
             Chicago Bulls
             Cleveland Cavaliers
             Dallas Mavericks
             Denver Nuggets
             Detroit Pistons
             Golden State Warriors
             Houston Rockets
             Indiana Pacers
             Los Angeles Clippers
             Los Angeles Lakers
             Memphis Grizzlies
             Miami Heat
             Milwaukee Bucks
             Minnesota Timberwolves
             New Orleans Pelicans
             New York Knicks
             Oklahoma City Thunder
             Orlando Magic
             Philadelphia 76ers
             Phoenix Suns
             Portland Trail Blazers
             Sacramento Kings
             San Antonio Spurs
             Toronto Raptors
             Utah Jazz
             Washington Wizards`;
		console.log(assignGames(input));            
	});
})();