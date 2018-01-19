/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {

		class Matchup {

			constructor(home, away) {

				this.home = home;
				this.away = away;
			}

			get teams() {

				return this.home.name + " <-> " + this.away.name;
			}
		}

		class Team {

			constructor(name) {

				this.name = name;
				this.recentGame = null;
				this.teamPlayed = new Set();
				this.consecutiveHomeGamesPlayed = false;
				this.consecutiveAwayGamesPlayed = false;
			}

			get nextLocation() {

				if(!this.consecutiveHomeGamesPlayed && !this.consecutiveAwayGamesPlayed) {

					return "any";
				}

				if(!this.consecutiveHomeGamesPlayed) {

					return this.recentGame === "home" ? "any" : "home";
				}

				if(!this.consecutiveAwayGamesPlayed) {

					return this.recentGame === "away" ? "any" : "away";
				}

				if(this.consecutiveHomeGamesPlayed && this.consecutiveAwayGamesPlayed) {

					return this.recentGame === "home" ? "away" : "home";
				}
			}

			isValidOpponent(opponent) {

				if(opponent === this || this.teamPlayed.has(opponent.name)) {

					return false;
				}

				if(this.nextLocation === "any") {

					return true;
				}

				return opponent.nextLocation === "any" || opponent.nextLocation !== this.nextLocation;
			}

			getOpponents(teams, unassigned) {

				return teams.filter(team => {

					return unassigned.has(team.name) && this.isValidOpponent(team);
				});
			}
		}

		class Scheduler {

			constructor(names) {

				this.names = this.getNames(names);
				this.teams = this.getTeams();
			}

			get totalRounds() {

				return (this.names.length - 1) * 2;
			}

			reset() {

				this.teams = this.getTeams();
			}

			getNames(names) {

				return names.split("\n").map(name => name.trim());
			}

			getTeams() {

				return this.names.map(name => new Team(name));
			}

			reverseTeams(rounds) {

				let reversed = [];

				rounds.forEach(round => {

					reversed.push(round.map(match => new Matchup(match.away, match.home)));
				});

				return reversed;
			}

			pickRandom(teams) {

				return teams[Math.floor(Math.random() * teams.length)];
			}

			assignMatch(team1, team2) {

				let home;

				if(team1.nextLocation !== "any") {

					home = team1.nextLocation === "home" ? team1 : team2;
				}
				else if(team2.nextLocation !== "any") {

					home = team2.nextLocation === "home" ? team2 : team1;
				}
				else {

					home = team1.recentGame === "home" ? team2 : team1;
				}

				let match = new Matchup(home, home === team1 ? team2 : team1);
				this.updateHomeTeamData(match);
				this.updateAwayTeamData(match);

				return match;
			}

			updateHomeTeamData(match) {

				if(match.home.recentGame === "home") {

					match.home.consecutiveHomeGamesPlayed = true;
				}

				match.home.recentGame = "home";
				match.home.teamPlayed.add(match.away.name);
			}

			updateAwayTeamData(match) {

				if(match.away.recentGame === "away") {

					match.away.consecutiveAwayGamesPlayed = true;
				}

				match.away.recentGame = "away";
				match.away.teamPlayed.add(match.home.name);
			}

			scheduleRound() {

				let round = [];
				let names = new Set(this.names);

				for(let i = 0; i < this.teams.length; i++) {

					if(!names.has(this.teams[i].name)) {

						continue;
					}

					let opponents = this.teams[i].getOpponents(this.teams, names);

					if(opponents.length === 0) {

						return null;
					}

					let match = this.assignMatch(this.teams[i], this.pickRandom(opponents));
					names.delete(match.home.name);
					names.delete(match.away.name);
					round.push(match);
				}

				return round;
			}

			scheduleHalfSeason() {

				let halfSeason = [];

				for(let i = 0; i < this.totalRounds / 2; i++) {

					let round = this.scheduleRound();

					if(round === null) {

						this.reset();

						return this.scheduleHalfSeason();
					}

					halfSeason.push(round);
				}

				return halfSeason;
			}

			scheduleSeason() {

				let halfSeason = this.scheduleHalfSeason();

				return [...halfSeason, ...this.reverseTeams(halfSeason)];
			}
		}

		function showRound(round) {

			const spacing = "    ";

			return round.map(match => spacing + match.teams).join("\n");
		}

		function showSchedule(schedule) {

			return schedule.map((round, index) => `Round ${index + 1}:\n\n${showRound(round)}\n`)
						   .join("\n");
		}

		//default input
		console.log(`%cDefault Input:`, "color : red;");
		let names = `Cleveland Cavaliers
					 Golden State Warriors
					 San Antonio Spurs
					 Toronto raptors`;

		let scheduler = new Scheduler(names);
		console.log(showSchedule(scheduler.scheduleHalfSeason()));

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

		scheduler = new Scheduler(names);
		console.log(showSchedule(scheduler.scheduleHalfSeason()));
	});
})();