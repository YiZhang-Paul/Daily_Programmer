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
		 * @param {Array} [teams] - names of all teams
		 *
		 * @return {Array} [match-ups splitted into equal halves]
		 */
		function splitMatchUp(teams) {
			let pairs = [], matchUps = allMatchUps(teams);
			for(let i = 0; i < matchUps.length - 1; i += 2) {
				pairs.push(matchUps.slice(i, i + 2));
			}
			let picks = pairs.map(pair => Math.floor(Math.random() * 2));
			return [picks.map((pick, index) => pairs[index][pick]), picks.map((pick, index) => pairs[index][pick == 1 ? 0 : 1])];
		}
		/**
		 * check if a team is qualified for a match
		 * @param {Object} [record] - team record
		 * @param {String} [type] - game type
		 *
		 * @return {boolean} [test result]
		 */
		function isQualified(record, type) {
			return type == "home" ? 
				record.last != "home" || !record.homeLimit : record.last != "away" || !record.awayLimit;
		}
		/**
		 * find all valid match-ups for current teams
		 * @param {Array} [matchUps] - current available match-ups
		 * @param {Array} [records] - team records
		 * @param {Object} [candidates] - teams waiting for assignments
		 *
		 * @return {Array} [all valid match-ups]
		 */
		function validMatchUps(matchUps, records, candidates) {
			return matchUps.filter(match => 
				match.every(team => candidates.has(team)) && 
				isQualified(records.get(match[0]), "home") && 
				isQualified(records.get(match[1]), "away"));
		}
		/**
		 * update records for all teams
		 * @param {Array} [round] - match-ups for current round
		 * @param {Array} [records] - team records
		 *
		 * @return {Array} [updated records]
		 */
		function updateRecords(round, records) {
			round.forEach(match => {
				match.forEach((team, index) => {
					let record = records.get(team);
					record.homeLimit = record.last == "home" && index === 0 ? true : record.homeLimit;
					record.awayLimit = record.last == "away" && index == 1 ? true : record.awayLimit;
					record.last = index === 0 ? "home" : "away";
					records.set(team, record);
				});
			});
			return records;
		}
		/**
		 * pick match-ups for each round
		 * @param {Array} [matchUps] - available match-ups
		 * @param {Array} [teams] - names of all teams
		 * @param {Object} [records] - team records
		 *
		 * @return {Array} [match-ups for one round]
		 */
		function pickRound(matchUps, teams, records) {
			for(let i = 0; i < 10; i++) {
				let [candidates, round] = [new Set(teams), []];
				while(candidates.size) {
					let curMatchs = validMatchUps(matchUps, records, candidates);
					if(!curMatchs.length) {
						break;
					}
					let selected = curMatchs[Math.floor(Math.random() * curMatchs.length)];
					round.push(selected);
					for(let j = 0; j < selected.length; j++) {
						candidates.delete(selected[j]);
					}
					if(!candidates.size) {
						return round;
					}
				}
			}
			return null;
		}
		/**
		 * remove match-ups from all available match-ups
		 * @param {Array} [toRemove] - match-ups to be removed
		 * @param {Array} [matchUps] - all match-ups
		 *
		 * @return {Array} [remaining match-ups]
		 */
		function removeMatchUps(curRound, matchUps) {
			return matchUps.filter(match => 
				curRound.every(curMatch => curMatch[0] != match[0] && curMatch[1] != match[1]));
		}
		/**
		 * pick matches for all rounds 
		 * @param {Array} [matchUps] - available match-ups
		 * @param {Array} [teams] - names of all teams
		 * @param {Array} [records] - team records
		 *
		 * @return {Array} [all rounds]
		 */
		function pickAllRounds(matchUps, teams, records) {
			let rounds = [];
			while(matchUps.length) {
				let curRound = pickRound(matchUps, teams, records);
				if(!curRound) {
					return null;
				}
				rounds.push(curRound);
				records = updateRecords(curRound, records);
				matchUps = removeMatchUps(curRound, matchUps);
			}
			return rounds;
		}
		/**
		 * assign games for all teams
		 * @param {String} [teams] - names of all teams
		 *
		 * @return {String} [game schedules]
		 */
		function assignGames(teams) {
			let names = teams.split("\n").map(team => team.trim());
			let [matchUps, records] = [splitMatchUp(names), allRecords(names)];
			let [assignments, totalMatches] = [[], matchUps[0].length + matchUps[1].length];
			//while(assignments.length != totalMatches) {
//
			//}
			return assignments.join("\n");
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