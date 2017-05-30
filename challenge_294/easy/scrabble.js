/**
 * codes for challenge No.294[Easy]
 */
/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * check if a word can be formed by given tile
		 * @param String, String, boolean
		 *
		 * tile      : tile of letters
		 * word      : word to be examined
		 * needScore : indicate if total score needs to be calculated
		 *
		 * returns boolean[array []]
		 */
		//version 1 
		function scrabble1(tile, word, needScore) {
			//store letter tile and word in arrays
			var tileChars = tile.split("").filter(a => a != "?");
			var wordChars = word.split(""); 
			//total number of available wild cards
			var wildCardNum = tile.length - tileChars.length;
			//check if given word can be formed by given tile
			var charUsed = [];
			for(var i = 0; i < tileChars.length; i++) {
				var index = wordChars.indexOf(tileChars[i]);
				if(index != -1) {
					//use letter and record letter used
					charUsed.push(wordChars.splice(index, 1)[0]);
				} 
			}
			//calculate total score if needed
			var totalScore;
			if(needScore && wordChars.length <= wildCardNum) {
				totalScore = charUsed.reduce((acc, val) => acc + getScore(val), 0);
			}
			//return result
			return {
				"result" : wordChars.length <= wildCardNum,
				"score" : totalScore
			};
		} 
		//version 2
		function scrabble2(tile, word) {
			//function to store letters in objects
			function letterToObj(string) {
				for(var obj = {"?" : 0}, i = 0; i < string.length; i++) {
					obj[string[i]] = obj[string[i]] ? obj[string[i]] + 1 : 1;
				}
				return obj;
			}
			//store letters of tile and word in objects
			var tileObj = letterToObj(tile);
			var wordObj = letterToObj(word);
			var canMakeWord = true; 
			//compare word and given tile
			for(var letter in wordObj) {
				if(!tileObj[letter] || tileObj[letter] < wordObj[letter]) {
					var wildCardNeeded = tileObj[letter] ? wordObj[letter] - tileObj[letter] : wordObj[letter];
					if(wildCardNeeded > tileObj["?"]) {
						canMakeWord = false;
						break;
					} else {
						tileObj["?"] -= wildCardNeeded;
					}
				}
			}
			return canMakeWord;
		}
		/**
		 * find longest word from word list 
		 * that can be formed by given tile
 		 *
 		 * @param String
 		 *
 		 * tile : given letter tile
 		 *
 		 * returns String
		 */
		function longest(tile) {
			var xhttp = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
			xhttp.onreadystatechange = function() {
				if(this.readyState == 4 && this.status == 200) {
					//retrieve and sort word list from longest to shortest
					var sortedList = this.response.split("\n").sort((a, b) => b.length - a.length);
					//find longest word that can be formed by given tile
					var maxLength = 0;
					var longestWord;
					for(var i = 0; i < sortedList.length; i++) {
						var currentWord = sortedList[i].trim();
						//stop when no longer word exists
						if(maxLength >= currentWord.length) {
							console.log(`longest: "${tile}" -> ${longestWord}`);
							break;
						} else if(tile.length >= currentWord.length && 
							        scrabble1(tile, currentWord).result && 
							        currentWord.length > maxLength) {
							//update maximum length and longest word seen so far
							maxLength = currentWord.length;
							longestWord = currentWord;
						}
					}
				}
			};
			xhttp.open("GET", "enable1-1.txt", true);
			xhttp.send();
		} 
		/**
		 * retrieve score for respective letter
		 * @param char
		 *
		 * letter : letter that evalutes to a score 
		 * 
		 * returns int
		 */
		function getScore(letter) {
			var score = 0;
			switch(letter) {
				case "e" : case "a" : case "i" : case "o" :
				case "n" : case "r" : case "t" : case "l" :
				case "s" : case "u" :
					score = 1;
					break;
				case "d" : case "g" :
					score = 2;
					break;
				case "b" : case "c" : case "m" : case "p" :
					score = 3;
					break;		
				case "f" : case "h" : case "v" : case "w" :
				case "y" :
					score = 4;
					break;
				case "k" :
					score = 5;
					break;
				case "j" : case "x" : 
					score = 8;
					break;
				case "q" : case "z" :
					score = 10;
					break;				
			}	
			return score;
		} 
		/**
		 * find word with highest score that can be formed by given tile
		 * @param String
		 * 
		 * tile : given letter tile
		 *
		 * returns int
		 */
		function highest(tile) {
			var xhttp = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
			xhttp.onreadystatechange = function() {
				if(this.readyState == 4 && this.status == 200) {
					//retrieve word list and sort word list from longest to shortest
					var sortedList = this.response.split("\n").sort((a, b) => b.length - a.length);
					//find word with highest score that can be formed by letter tile
					var maxScore = 0;
					var bestWord;
					for(var i = 0; i < sortedList.length; i++) {
						var currentWord = sortedList[i].trim();
						//stop when no higher score can be achieved
						if(maxScore >= currentWord.length * 10) {
							break;
						} else {
							var score = scrabble1(tile, currentWord, true).score;
							//update maximum score and respective word seen so far 
							if(score && score > maxScore) {
								maxScore = score;
								bestWord = currentWord;
							}
						}
					}
					console.log(`highest: "${tile}" -> ${bestWord}`);
				}
			};
			xhttp.open("GET", "enable1-1.txt", true);	
			xhttp.send();
		} 
		/**
		 * basic questions
		 */
		console.log(`"ladilmy", "daily"   -> ${scrabble1("ladilmy", "daily").result}`);
		console.log(`"eerriin", "eerie"   -> ${scrabble1("eerriin", "eerie").result}`);
		console.log(`"orrpgma", "program" -> ${scrabble1("orrpgma", "program").result}`);
		console.log(`"orppgma", "program" -> ${scrabble1("orppgma", "program").result}`);
		/**
		 * bonus 1
		 */
		console.log(`"pizza??", "pizzazz" -> ${scrabble1("pizza??", "pizzazz").result}`);
		console.log(`"piizza?", "pizzazz" -> ${scrabble1("piizza?", "pizzazz").result}`);
		console.log(`"a??????", "program" -> ${scrabble1("a??????", "program").result}`);
		console.log(`"b??????", "program" -> ${scrabble1("b??????", "program").result}`);
		/**
		 * bonus 2
		 */
		longest("dcthoyueorza");
		longest("uruqrnytrois");
		longest("rryqeiaegicgeo??");
		longest("udosjanyuiuebr??");
		longest("vaakojeaietg????????");
		/**
		 * bonus 3
		 */
		highest("dcthoyueorza");
		highest("uruqrnytrois");
		highest("rryqeiaegicgeo??");
		highest("udosjanyuiuebr??");
		highest("vaakojeaietg????????");
	});
})();