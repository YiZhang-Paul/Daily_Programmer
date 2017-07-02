/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * output time in words
		 * @param String
		 *
		 * time : time to be converted
		 *
		 * returns String
 		 */
 		function timeInWords(time) {
 			time = time.split(":");	
 			let hour = time[0] <= 20 ? numToWord(Number(time[0])) : numToWord(Math.floor(Number(time[0]) / 10) * 10) + numToWord(Number(time[0]) % 10);
 			let minute = time[1] <= 20 ? numToWord(Number(time[1])) : numToWord(Math.floor(Number(time[1]) / 10) * 10) + numToWord(Number(time[1]) % 10);
 			let dayNight = time[0] / 12 >= 0 ? "PM" : "AM";
 			return `It's ${hour} ${minute} ${dayNight}`;
 		} 
 		/**
 		 * traslate number to words
 		 * @param String
 		 *
 		 * number : number to be translated
 		 *
 		 * returns String
 		 */
 		function numToWord(number) {
 			let word;
 			switch(number) {
 				case 0 :
 					word = "";
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
 		console.log(timeInWords(input));
    input = "01:30";
 		console.log(timeInWords(input));
    input = "12:05";
 		console.log(timeInWords(input));
    input = "14:01";
 		console.log(timeInWords(input));
    input = "20:29";
 		console.log(timeInWords(input));
    input = "21:00";
 		console.log(timeInWords(input));
	});
})();			