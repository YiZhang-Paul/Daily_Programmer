/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {

		class Team {

			constructor(name) {

				this.name = name;
				this.recentGame = null;
				this.maxHomeGamePlayed = false;
				this.maxAwayGamePlayed = false;
			}

			reset() {

				this.resetRecentGame();
				this.maxHomeGamePlayed = false;
				this.maxAwayGamePlayed = false;
			}

			resetRecentGame() {

				this.recentGame = null;
			}

			isValidLocation(location) {

				if(location === "home") {

					return !this.maxHomeGamePlayed || this.recentGame !== "home";
				}

				return !this.maxAwayGamePlayed || this.recentGame !== "away";
			}

			updateData(location) {

				if(location === "home" && this.recentGame === "home") {

					this.maxHomeGamePlayed = true;
				}
 				else if(location === "away" && this.recentGame === "away") {

					this.maxAwayGamePlayed = true;
				}

				this.recentGame = location;
			}
		}

		class Matchup {

			constructor(home, away) {

				this.home = home;
				this.away = away;
			}

			get title() {

				return `${this.home.name} vs. ${this.away.name}`;
			}
		}

		class TournamentManager {

			constructor(names) {

				this.teams = this.getTeams(names);
			}

			reset() {

				this.teams.forEach(team => {

					team.reset();
				});
			}

			resetRecentGames() {

				this.teams.forEach(team => {

					team.resetRecentGame();
				});
			}

			getNames(names) {

				return names.split("\n")
							.map(name => name.trim())
							.filter(name => name);
			}

			getTeams(names) {

				return this.getNames(names)
						   .map(name => new Team(name));
			}

			getRandomIndex(array) {

				return Math.floor(Math.random() * array.length);
			}

			shuffleTeams(teams) {

				let shuffled = [];
				let copy = teams.slice();

				while(copy.length) {

					const index = this.getRandomIndex(copy);
					shuffled.push(copy.splice(index, 1)[0]);
				}

				return shuffled;
			}

			rotateTeams(teams) {

				return [

					...teams.slice(teams.length / 2, -1),
					...teams.slice(0, teams.length / 2),
					...teams.slice(-1)
				];
			}

			assignMatch(home, away) {

				if(!home.isValidLocation("home") || !away.isValidLocation("away")) {

					throw "Invalid Match Location.";
				}

				home.updateData("home");
				away.updateData("away");

				return new Matchup(home, away);
			}

			getRound(roundNumber, teams) {

				let round = [];
				let home = teams.slice(0, teams.length / 2);
				let away = teams.slice(teams.length / 2).reverse();

				for(let i = 0; i < home.length; i++) {

					let match = i === 0 && roundNumber % 2 === 0 ?
						this.assignMatch(away[i], home[i]) :
						this.assignMatch(home[i], away[i]);

					round.push(match);
				}

				return round;
			}

			getHalfSeason() {

				let teams = this.shuffleTeams(this.teams);
				let rounds = [];

				for(let i = 0; i < teams.length - 1; i++) {

					rounds.push(this.getRound(i + 1, teams));
					teams = this.rotateTeams(teams);
				}

				return rounds;
			}

			switchLocations(rounds) {

				let reversed = [];

				rounds.forEach(round => {

					let newRound = round.map(match => {

						return this.assignMatch(match.away, match.home);
					});

					reversed.push(newRound);
				});

				return reversed;
			}

			getSeason() {

				try {

					let firstHalf = this.getHalfSeason();
					this.resetRecentGames();
					let secondHalf = this.switchLocations(firstHalf);

					return [...firstHalf, ...secondHalf];
				}
				catch(e) {

					this.reset();

					return this.getSeason();
				}
			}
		}

		class Scheduler {

			constructor(teams, start, end, restPeriod) {

				this.manager = new TournamentManager(teams);
				this.start = new Date(start);
				this.end = new Date(end);
				this.restPeriod = restPeriod;
			}

			getWeeklySchedule() {

				let schedule = [6];

				for(let i = 1; i < 6 / (this.restPeriod + 1); i++) {

					const lastDay = schedule.slice(-1)[0];
					const nextDay = (lastDay + this.restPeriod + 1) % 7;

					if(schedule[0] - nextDay >= this.restPeriod) {

						schedule.push(nextDay ? nextDay : 7);
					}
				}

				return schedule.sort((a, b) => a - b);
			}

			showRound(round) {

				const spacing = "  ";

				return round.map((match, index) => {

					return `${spacing}${index + 1}. ${match.title}`;

				}).join("\n");
			}

			showSeasonSchedule() {

				let season = this.manager.getSeason();

				return season.map((round, index) => {

					return `Round ${index + 1}:\n\n${this.showRound(round)}\n`;

				}).join("\n");
			}
		}

		//default input
		console.log(`%cDefault Input:`, "color : red;");
		let names = `Cleveland Cavaliers
					 Golden State Warriors
					 San Antonio Spurs
					 Toronto raptors`;

		let scheduler = new Scheduler(names);
		console.log(scheduler.showSeasonSchedule());

		//challenge input
		console.log(`%cChallenge Input:`, "color : red;");
		names = `Atlanta Hawks
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

		let start = new Date(2020, 9, 1);
		let end = new Date(2021, 3, 30);
		scheduler = new Scheduler(names, start, end, 2);
		//console.log(scheduler.showSeasonSchedule());
	});
})();