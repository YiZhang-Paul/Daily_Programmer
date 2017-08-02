/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * hacking game class
		 */
		class HackGame {
			constructor() {
				this.setLevel();
				this.words = [];
				this.target = null;
				this.moves = 4;
				this.getWordList().then(list => {
					this.init(list);
					this.displayInfo();
					this.run();
				});
			}
			/**
			 * set game difficulty
			 */
			setLevel() {
				let msg = "Please Choose Your Difficulty(1 - 5).";
				this.difficulty = window.prompt(msg);
				while(isNaN(this.difficulty) || this.difficulty < 1 || this.difficulty > 5) {
					this.difficulty = window.prompt("Invalid Input! " + msg);
				}
			}
			/**
			 * initialize game 
			 * @param {Array} [list] - list of all words
			 */
			init(list) {
				this.words = this.populateWords(list, ...this.getWordSpec());
				this.target = this.getGoal();
			}
			/**
			 * run game
			 */
			run() {
				while(this.moves) {
					this.getMove();
				}
			}
			/**
			 * display game base information
			 */
			displayInfo() {
				console.log(`Difficulty (1-5)? ${this.difficulty}`);
				this.words.forEach(word => {
					console.log(`%c${word}`, "color : orange;");
				});
			}
			/**
			 * retrieve word list
			 * @param {String} [url] - word list file URL
			 *
			 * @return {Object} [Promise Object]
			 */
			getWordList(url = "wordList.txt") {
				return new Promise((resolve, reject) => {
					let xhttp = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
					xhttp.onreadystatechange = function() {
						if(this.readyState == 4 && this.status == 200) {
							resolve(this.responseText.split("\n").map(word => word.trim().toUpperCase()));
						}
					};
					xhttp.open("GET", url, true);
					xhttp.send();
				});
			}
			/**
			 * generate word list
			 * @param {Array} [list] - list of all words
			 * @param {int} [total] - total number of words in the list
			 * @param {int} [len] - word length
			 *
			 * @return {Array} [word list]
			 */
			populateWords(list, total, len) {
				let candidates = list.filter(word => word.length == len);
				let words = [];
				for(let i = 0; i < total; i++) {
					words.push(candidates.splice(Math.floor(Math.random() * candidates.length), 1)[0]);
				}
				return words;
			}
			/**
			 * determine goal 
			 * @param {Array} [list] - available words for the game
			 *
			 * @return {String} [game goal]
			 */
			getGoal(list = this.words) {
				return list[Math.floor(Math.random() * list.length)];
			}
			/**
			 * determine number of words and word length base on difficulty
			 * @param {int} [level] - difficulty level
			 *
			 * @return {Array} [word number and word length]
			 */
			getWordSpec(level = this.difficulty) {
				return level == 5 ? [15, 15] : [5 + level * 2, 4 + level * 2];
			}
			/**
			 * check how many characters the player gets correct
			 * @param {String} [choice] - player choice
			 *
			 * @return {int} [number of letter correct]
			 */
			charsCorrect(choice) {
				return choice.split("").filter((char, index) => char == this.target[index]).length;
			}
			/**
			 * check game end
			 * @param {String} [choice] - player choice
			 */
			checkEnd(choice) {
				let corrects = this.charsCorrect(choice);
				console.log(`Guess (${this.moves} left)? ${choice}`);
				console.log(`${corrects}/${this.target.length} correct`);
				if(corrects == this.target.length) {
					this.moves = 0;
					console.log("You Win!");
				} else if(!this.moves) {
					console.log("You Lost!");
				}
			}
			/**
			 * process game moves
			 */
			getMove() {
				let msg = `Please Guess a Word(1-${this.words.length}): `;
				let choice = window.prompt(msg);
				while(!this.words[choice - 1]) {
					choice = window.prompt("Invalid Choice! " + msg);
				}
				this.moves--;
				this.checkEnd(this.words[choice - 1]);
			}
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let game = new HackGame();
	});
})();		