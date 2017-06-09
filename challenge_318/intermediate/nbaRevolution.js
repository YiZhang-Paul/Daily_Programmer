/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * team class
		 */
		class Team {
			constructor(name) {
				this.name = name;
				this.lastOpponent = null;
				this.lastGameLocation = null;
				this.remainingOpponents = null;
			}
		} 
		/**
		 * schedule manager class
		 */
		class ScheduleManager {
			constructor(allTeams) {
				this.allTeams = allTeams;
				this.totalGames = 0;
				this.homeTeamList = [];
				this.awayTeamList = [];
			}
		} 
	});
})();