/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * look up table for time to word convertion
		 */		
		let translateTable = {
			0 : "oh", 1 : "one", 2 : "two", 3 : "three", 4 : "four", 5 : "five", 6 : "six", 
			7 : "seven", 8 : "eight", 9 : "nine", 10 : "ten", 11 : "eleven", 12 : "twelve", 
			13 : "thirteen", 14 : "fourteen", 15 : "fifteen", 16 : "sixteen", 17 : "seventeen", 
			18 : "eighteen", 19 : "nineteen", 20 : "twenty", 30 : "thirty", 40 : "fourty", 50 : "fifty"
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
 			time = time.split(":").map(num => Number(num));	
 			let [hour, minute] = [hourToWord(time[0]), minuteToWord(time[1])];
 			return `It's ${hour}${minute ? " " + minute : minute} ${time[0] / 12 >= 1 ? "pm" : "am"}`;
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
 			return hour % 12 === 0 ? "twelve" : translateTable[hour % 12];
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
 			if(minute < 10) {
 				return minute === 0 ? "" : "oh " + translateTable[minute];
 			}
 			return translateTable[minute] ? translateTable[minute] : translateTable[minute - (minute % 10)] + " " + translateTable[minute % 10];
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