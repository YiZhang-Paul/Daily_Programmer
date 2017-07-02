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
 			console.log(time);
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
 		timeInWords(input);
    input = "01:30";
    input = "12:05";
    input = "14:01";
    input = "20:29";
    input = "21:00";
	});
})();			