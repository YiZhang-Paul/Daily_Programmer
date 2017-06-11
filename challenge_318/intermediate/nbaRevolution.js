/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * schedule manager class
		 * @param array []
		 *
		 * teamList : list of all team names
		 */
		class ScheduleManager {
			constructor(teamList) {
				this.teamList = teamList;
				this.homeTeams = [];
				this.awayTeams = [];
				this.totalRounds = (teamList.length - 1) * 2;
				this.gamesPerRound = teamList.length * 0.5;
				this.allTeamMatchUps = this.getTeamMatchUp();
				this.getSchedule(1);
				this.getSchedule(2);
				this.getSchedule(3);
				this.getSchedule(4);
				this.getSchedule(5);
				this.getSchedule(6);
			}
			/**
			 * permute all possible match-ups
			 * @param array [], array []
			 *
			 * teamList   : list of all team names
			 * curMatchUp : current match-up
			 *
			 * returns array []
			 */
			getMatchUp(teamList = this.teamList, curMatchUp = []) {
				if(curMatchUp.length == 2) {
					return curMatchUp;
				}
				let permutation = [];
				for(let i = 0; i < teamList.length; i++) {
					let curTeam = teamList[i];
					let otherTeam = [...teamList.slice(0, i), ...teamList.slice(i + 1)];
					permutation.push(this.getMatchUp(otherTeam, [...curMatchUp, curTeam]));
				}
				return permutation;
			}
			/**
			 * group all match-ups by teams
			 *
			 * returns array []
			 */
			getTeamMatchUp() {
				let allMatchUps = this.getMatchUp();
				let totalTeamMatch = allMatchUps.length / this.teamList.length;
				let teamMatchUps = [];
				for(let i = 0; i < allMatchUps.length; i += totalTeamMatch) {
					teamMatchUps.push(...allMatchUps.slice(i, i + totalTeamMatch));
				}
				return teamMatchUps;
			} 
			/**
			 * get random index of an array
			 * @param int
			 *
			 * length : length of array
			 *
			 * returns int
			 */
			getRandomIndex(length) {
				return Math.floor(Math.random() * length);
			}  
			/**
			 * print schedule
			 * @param int, array []
			 * 
			 * roundNum  : round number
			 * schedules : schedule to be printed
			 */
			printSchedule(roundNum, schedules) {
				console.log(`Round ${roundNum}\n`);
				schedules.forEach(schedule => {
					console.log(`${schedule[0]} - ${schedule[1]}`);
				});
			} 
			/**
			 * pick match-up for a team
			 * @param String, obj {}
			 *
			 * teamName   : name of team
			 * teamPicked : team already picked 
			 *
			 * returns String
			 */
			pickMatchUp(teamName, teamPicked) {
				//find all match-ups for given team
				let teamIndex = this.teamList.indexOf(teamName);
				let teamMatchUps = this.allTeamMatchUps[teamIndex];
				//pick a random match-up from all match-ups for given team
				let matchUpIndex = this.getRandomIndex(teamMatchUps.length);
				let matchUp = teamMatchUps[matchUpIndex];
				return !teamPicked.has(matchUp[1]) ? teamMatchUps.splice(matchUpIndex, 1)[0] : this.pickMatchUp(teamName, teamPicked);
			}
			/**
			 * generate schedule for a single round
			 * @param int
			 *
			 * roundNum : round number 
			 */
			getSchedule(roundNum) {
				let allTeamList;
				let teamPicked = new Set();
				let schedules = [];
				if(roundNum == 1) {
					allTeamList = this.teamList.slice();
					this.awayTeams = this.teamList.slice();
					for(let i = 0; i < this.gamesPerRound; i++) {
						let homeTeamIndex;
						do {
							homeTeamIndex = this.getRandomIndex(allTeamList.length);
						} while(teamPicked.has(allTeamList[homeTeamIndex]));
						//record home team and away team  
						let homeTeam = allTeamList.splice(homeTeamIndex, 1)[0];
						this.homeTeams.push(homeTeam);
						this.awayTeams.splice(this.awayTeams.indexOf(homeTeam), 1);
						//record match-up picked
						let matchUp = this.pickMatchUp(homeTeam, teamPicked);
						schedules.push(matchUp);
						//record participating teams
						teamPicked.add(matchUp[0]);
						teamPicked.add(matchUp[1]);
					}
				} else if(roundNum % 2 === 0) {
					allTeamList = this.awayTeams.slice();
					for(let i = 0; i < this.gamesPerRound; i++) {
						let awayTeamIndex;
						do {
							awayTeamIndex = this.getRandomIndex(allTeamList.length);
						} while(teamPicked.has(allTeamList[awayTeamIndex]));
						//record home team and away team  
						let awayTeam = allTeamList.splice(awayTeamIndex, 1)[0];
						//record match-up picked
						let matchUp = this.pickMatchUp(awayTeam, new Set([...Array.from(teamPicked), ...allTeamList]));
						schedules.push(matchUp);
						//record participating teams
						teamPicked.add(matchUp[0]);
						teamPicked.add(matchUp[1]);
					}
				} else {
					allTeamList = this.homeTeams.slice();
					for(let i = 0; i < this.gamesPerRound; i++) {
						let homeTeamIndex;
						do {
							homeTeamIndex = this.getRandomIndex(allTeamList.length);
						} while(teamPicked.has(allTeamList[homeTeamIndex]));
						//record home team and away team  
						let homeTeam = allTeamList.splice(homeTeamIndex, 1)[0];
						//record match-up picked
						let matchUp = this.pickMatchUp(homeTeam, new Set([...Array.from(teamPicked), ...allTeamList]));
						schedules.push(matchUp);
						//record participating teams
						teamPicked.add(matchUp[0]);
						teamPicked.add(matchUp[1]);
					}
				}
				//print schedule
				this.printSchedule(roundNum, schedules);
			} 
		} 
		//default input
		let allTeamNames = ["Cleveland Cavaliers", "Golden State Warriors", "San Antonio Spurs", "Toronto raptors"];
		let scheduleManager1 = new ScheduleManager(allTeamNames);
		//challenge input
		//allTeamNames = ["Atlanta Hawks", "Boston Celtics", "Brooklyn Nets", "Charlotte Hornets", "Chicago Bulls", "Cleveland Cavaliers", "Dallas Mavericks", "Denver Nuggets", "Detroit Pistons", "Golden State Warriors", "Houston Rockets", "Indiana Pacers", "Los Angeles Clippers", "Los Angeles Lakers", "Memphis Grizzlies", "Miami Heat", "Milwaukee Bucks", "Minnesota Timberwolves", "New Orleans Pelicans", "New York Knicks", "Oklahoma City Thunder", "Orlando Magic", "Philadelphia 76ers", "Phoenix Suns", "Portland Trail Blazers", "Sacramento Kings", "San Antonio Spurs", "Toronto Raptors", "Utah Jazz", "Washington Wizards"];
		//let scheduleManager2 = new ScheduleManager(allTeamNames);
	});
})();