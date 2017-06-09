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
				this.consecutiveRemain = 1;
			}
			/**
			 * find opponents who have not played
			 * home games with current team
			 * @param obj {}
			 *
			 * pickedTeam : team already picked by other teams 
			 *
			 * returns array []
			 */
			findHomeTeam(pickedTeam) {
				return this.allOpponents.slice().filter(opponent => 
					!opponent.home && !pickedTeam.has(opponent.opponent));
			} 
			/**
			 * find opponents who have not played
			 * away games with current team
			 * @param obj {}
			 *
			 * pickedTeam : team already picked by other teams 
			 *
			 * returns array []
			 */
			findAwayTeam(pickedTeam) {
				return this.allOpponents.slice().filter(opponent => 
					!opponent.away && !pickedTeam.has(opponent.opponent));
			}   
			/**
			 * update all opponent status
			 * param String, obj {}
			 *
			 * location : location of current game
			 * opponent : opponent picked
			 */
			updateOpponentStatus(location, opponent) {
				//update game location information for current team
				this.lastGameLocation = location;
				opponent[location] = true;
				//update game locaotion for opponent team
				let opponentLocation = location == "home" ? "away" : "home";
				opponent.opponent.lastGameLocation = opponentLocation;
				let index = opponent.opponent.allOpponents.findIndex(opponent => opponent.opponent.name == this.name);
				opponent.opponent.allOpponents[index][opponentLocation] = true;
			} 
			/**
			 * pick home team
			 * @param array []
			 *
			 * homeTeams : all available home teams
			 *
			 * returns obj {}
			 */
			pickHomeTeam(homeTeams) {
				let opponent = homeTeams[Math.floor(Math.random() * homeTeams.length)];
				this.updateOpponentStatus("home", opponent);
				return opponent;
			} 
			/**
			 * pick away team
			 * @param array []
			 *
			 * awayTeams : all available away teams
			 *
			 * returns obj {}
			 */
			pickAwayTeam(awayTeams) {
				let opponent = awayTeams[Math.floor(Math.random() * awayTeams.length)];
				this.updateOpponentStatus("away", opponent);
				return opponent;
			}  
			/**
			 * pick opponents
			 * @param obj {}
			 *
			 * pickedTeam : team already picked by other teams 
			 *
			 * returns obj {}
			 */
			pickOpponent(pickedTeam) {
				let opponent;
				//find all opponent who had not played home/away game
				let homeTeams = this.findHomeTeam(pickedTeam);
				let awayTeams = this.findAwayTeam(pickedTeam); 
				if(!this.lastGameLocation) {
					if(homeTeams.length > awayTeams.length) {
						opponent = this.pickHomeTeam(homeTeams);
					} else {
						opponent = this.pickAwayTeam(awayTeams);
					}
				} else if(this.lastGameLocation == "home") {
					opponent = awayTeams.length ? this.pickAwayTeam(awayTeams) : this.pickHomeTeam(homeTeams);
				} else {
					opponent = homeTeams.length ? this.pickHomeTeam(homeTeams) : this.pickAwayTeam(awayTeams);
				}
				return opponent.opponent;
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
				this.totalRounds = (allTeams.length - 1) * 2;
				//update current remaining opponent for every team 
				this.updateAllOpponent();
				//post schedule
				this.postSchedule();
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
			 *
			 * returns array []
			 */ 
			scheduleRound() {
				let curRound = [], scheduledTeams = new Set();
				this.allTeams.forEach(team => {
					if(!scheduledTeams.has(team)) {
						let opponent = team.pickOpponent(scheduledTeams);
						let schedule = opponent.lastGameLocation == "home" ? 
							`${opponent.name} - ${team.name}` : `${team.name} - ${opponent.name}`;
						//record new schedule
						curRound.push(schedule);
						//record team already picked
						scheduledTeams.add(team);
						scheduledTeams.add(opponent);
					}
				});
				return curRound;
			}
			/**
			 * print out schedule for one round
			 * @param int, array []
			 *
			 * roundNum : current round number
			 * curRound : schedule information for current round
			 */
			printRound(roundNum, curRound) {
				console.log(`Round ${roundNum}`);
				curRound.forEach(round => {
					console.log(round);
				});
			} 
			/**
			 * post schedule for all rounds
			 */
			postSchedule() {
				for(let i = 0; i < this.totalRounds; i++) {
					this.printRound(i + 1, this.scheduleRound());
				}
			} 
		} 
		//default input
		let allTeamNames = ["Cleveland Cavaliers", "Golden State Warriors", "San Antonio Spurs", "Toronto raptors"];
		//create manager for all teams
		let allTeams = allTeamNames.map(name => new Team(name));
		let scheduleManager = new ScheduleManager(allTeams);
	});
})();