/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * team class
		 * @param String
		 *
		 * name : team name
		 */
		class Team {
			constructor(name) {
				this.name = name;
				this.lastGameLocation = null;
				this.allOpponents = [];
			}
		} 
		/**
		 * schedule manager class
		 * @param array []
		 *
		 * allTeams : all participating teams
		 */
		class ScheduleManager {
			constructor(allTeams) {
				this.allTeams = allTeams;
				this.currentRound = 0;
				this.totalRounds = (allTeams.length - 1) * 2;
				this.consecutiveRemain = 1;
				//update current remaining opponent for every team 
				this.updateAllOpponent();
			}
			/**
			 * update remaining opponents for each team
			 */
			updateAllOpponent() {
				this.allTeams.forEach((team, index, array) => {
					team.allOpponents = [...array.slice(0, index), ...array.slice(index + 1)];
					team.allOpponents = team.allOpponents.map(opponent => {
						return {opponent : opponent, home : false, away : false};
					});
				});
			}
			/**
			 * pick teams for each round
			 */ 
			pickRound() {
				
			}
			/**
			 * print out schedule for one round
			 */
			printRound() {

			} 
		} 
		//default input
		let allTeamNames = ["Cleveland Cavaliers", "Golden State Warriors", "San Antonio Spurs", "Toronto raptors"];
		//create manager for all teams
		let allTeams = allTeamNames.map(name => new Team(name));
		let scheduleManager = new ScheduleManager(allTeams);
	});
})();