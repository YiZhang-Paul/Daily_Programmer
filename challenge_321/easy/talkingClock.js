/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * look up table for time to word convertion
		 */		
		let translateTable = {
			0 : "oh", 1 : "one", 2 : "two", 3 : "three", 4 : "four",
			5 : "five", 6 : "six", 7 : "seven", 8 : "eight", 9 : "nine", 
			10 : "ten", 11 : "eleven", 12 : "twelve", 13 : "thirteen", 
			14 : "fourteen", 15 : "fifteen", 16 : "sixteen", 17 : "seventeen",
			18 : "eighteen", 19 : "nineteen", 20 : "twenty", 30 : "thirty",
			40 : "fourty", 50 : "fifty"
		};
		/**
		 * output time in words
		 * @param String
		 *
		 * time : time to be converted
		 *
		 * returns String
 		 */
 		function timeToWord(time) {
 			time = time.split(":");	
 			let hour = hourToWord(time[0]);
 			let minute = minuteToWord(time[1]);
 			let dayNight = Number(time[0]) / 12 >= 1 ? "pm" : "am";
 			return `It's ${hour}${minute ? " " + minute : minute} ${dayNight}`;
 		} 
 		/**
 		 * translate hour to word
 		 * @param String
 		 *
 		 * hour : hour to be translated 
 		 *
 		 * returns String
 		 */
 		function hourToWord(hour) {
 			let word = "";
 			switch(Number(hour) % 12) {
 				case 0 : case 12 : 
 					word = "twelve";
 					break;
 				case 1 : 
 					word = "one";
 					break;
 				case 2 : 
 					word = "two";
 					break;
 				case 3 : 
 					word = "three";
 					break;
 				case 4 : 
 					word = "four";
 					break;
 				case 5 : 
 					word = "five";
 					break;
 				case 6 : 
 					word = "six";
 					break;
 				case 7 : 
 					word = "seven";
 					break;
 				case 8 : 
 					word = "eight";
 					break;
 				case 9 : 
 					word = "nine";
 					break;
 				case 10 : 
 					word = "ten";
 					break;
 				case 11 : 
 					word = "eleven";
 					break;										
 			}
 			return word;
 		} 
 		/**
 		 *
 		 * translate minute to word
 		 * @param String
 		 *
 		 * minute : minute to be translated
 		 *
 		 * returns String
 		 */
 		function minuteToWord(minute) {
 			let word = "";
 			if(Number(minute) < 10 && minute.length == 2) {
 				return Number(minute) === 0 ? word : "oh " + minuteToWord(minute[1]);
 			} else if(Number(minute) > 20 && Number(minute) % 10 && minute.length == 2) {
 				return minuteToWord(Math.floor(Number(minute) / 10) * 10) + " " + minuteToWord(Number(minute) % 10);
 			}
 			switch(Number(minute)) {
 				case 0 : 
 				 	word = "oh";
 				 	break;
 				case 1 : 
 					word = "one";
 					break;
 				case 2 : 
 					word = "two";
 					break;
 				case 3 : 
 					word = "three";
 					break;
 				case 4 : 
 					word = "four";
 					break;
 				case 5 : 
 					word = "five";
 					break;	
 				case 6 : 
 					word = "six";
 					break;	
 				case 7 : 
 					word = "seven";
 					break;
 				case 8 : 
 					word = "eight";
 					break;
 				case 9 : 
 					word = "nine";
 					break;
 				case 10 : 
 					word = "ten";
 					break;
 				case 11 : 
 					word = "eleven";
 					break;	
 				case 12 : 
 					word = "twelve";
 					break;	
 				case 13 : 
 					word = "thirteen";
 					break;
 				case 14 : 
 					word = "fourteen";
 					break;
 				case 15 : 
 					word = "fifteen";
 					break;
 				case 16 : 
 					word = "sixteen";
 					break;
 				case 17 : 
 					word = "seventeen";
 					break;
 				case 18 : 
 					word = "eighteen";
 					break;		
 				case 19 : 
 					word = "nineteen";
 					break;
 				case 20 : 
 					word = "twenty";
 					break;	
 				case 30 : 
 					word = "thirty";
 					break;
 				case 40 : 
 					word = "fourty";
 					break;
 				case 50 : 
 					word = "fifty";
 					break;						 
 			}
 			return word;
 		} 
 		//default inputs
 		let input = "00:00";
 		console.log(timeToWord(input));
    input = "01:30";
 		console.log(timeToWord(input));
    input = "12:05";
 		console.log(timeToWord(input));
    input = "14:01";
 		console.log(timeToWord(input));
    input = "20:29";
 		console.log(timeToWord(input));
    input = "21:00";
 		console.log(timeToWord(input));
	});
})();			