/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * permute all possible match-ups
		 * @param array [], array []
		 *
		 * teamList   : list of all team names
		 * curMatchUp : current match-up
		 *
		 * returns array []
		 */
		function getMatchUp(teamList, curMatchUp = []) {
			if(curMatchUp.length == 2) {
				return curMatchUp;
			}
			let permutation = [];
			for(let i = 0; i < teamList.length; i++) {
				let curTeam = teamList[i];
				let otherTeam = [...teamList.slice(0, i), ...teamList.slice(i + 1)];
				permutation.push(getMatchUp(otherTeam, [...curMatchUp, curTeam]));
			}
			return permutation;
		}
		/**
		 * group all match-ups by teams
		 * @param array []
		 *
		 * teamList : list of all team names
		 *
		 * returns array []
		 */
		function getTeamMatchUp(teamList) {
			let allMatchUps = getMatchUp(teamList);
			let teamMatchUps = [];
			let totalTeamMatch = allMatchUps.length / teamList.length;
			for(let i = 0; i < allMatchUps.length; i += totalTeamMatch) {
				teamMatchUps.push(...allMatchUps.slice(i, i + totalTeamMatch));
			}
			return teamMatchUps;
		}
		//default input
		let allTeamNames = ["Cleveland Cavaliers", "Golden State Warriors", "San Antonio Spurs", "Toronto raptors"];
		let teamMatchUps = getTeamMatchUp(allTeamNames);
		console.log(teamMatchUps);
		//challenge input
		allTeamNames = ["Atlanta Hawks", "Boston Celtics", "Brooklyn Nets", "Charlotte Hornets", "Chicago Bulls", "Cleveland Cavaliers", "Dallas Mavericks", "Denver Nuggets", "Detroit Pistons", "Golden State Warriors", "Houston Rockets", "Indiana Pacers", "Los Angeles Clippers", "Los Angeles Lakers", "Memphis Grizzlies", "Miami Heat", "Milwaukee Bucks", "Minnesota Timberwolves", "New Orleans Pelicans", "New York Knicks", "Oklahoma City Thunder", "Orlando Magic", "Philadelphia 76ers", "Phoenix Suns", "Portland Trail Blazers", "Sacramento Kings", "San Antonio Spurs", "Toronto Raptors", "Utah Jazz", "Washington Wizards"];
		teamMatchUps = getTeamMatchUp(allTeamNames);
		console.log(teamMatchUps);
	});
})();