/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {

		class Matchup {

			constructor(home, away) {

				this.home = home;
				this.away = away;
			}

			get teams() {

				return this.home.name + " <---> " + this.away.name;
			}
		}

		class Team {

			constructor(name) {

				this.name = name;
				this.recentGame = null;
				this.maxHomeGamesPlayed = false;
				this.maxAwayGamesPlayed = false;
			}
		}

		class Scheduler {

			constructor(names) {

				this.teams = this.getTeams(names);
				this.matchups = this.getMatchups(this.teams);
			}

			getTeams(names) {

				return names.split("\n")
							.map(name => new Team(name.trim()));
			}

			getMatchups(teams) {

				let matchups = [];

				for(let i = 0; i < teams.length - 1; i++) {

					for(let j = i + 1; j < teams.length; j++) {

						matchups.push(new Matchup(teams[i], teams[j]));
						matchups.push(new Matchup(teams[j], teams[i]));
					}
				}

				return matchups;
			}
		}

		//default input
		console.log(`%cDefault Input:`, "color : red;");
		let names = `Cleveland Cavaliers
					 Golden State Warriors
					 San Antonio Spurs
					 Toronto raptors`;


		let scheduler = new Scheduler(names);
		console.log(scheduler);


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
	});
})();