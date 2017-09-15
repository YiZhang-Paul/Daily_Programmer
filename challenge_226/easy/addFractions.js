/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * find all factors of a number
		 * @param {int} [number] - number to be factored
		 *
		 * @return {Array} [all factors of number]
		 */
		function getFactors(number) {
			let factors = [];
			while(number != 1) {
				for(let i = 2; i <= number; i++) {
					if(number % i === 0) {
						number /= i;
						factors.push(i);
						break;
					}
				}
			}
			return factors.length ? factors : [1];
		}
		// //default input
		// console.log(`%cDefault Input: `, "color : red;");
		// let input = `1/6
		// 					   3/10`;
		// console.log(addFraction(input));		
		// input = `1/3
  //            1/4
  //            1/12`;
		// console.log(addFraction(input));		
  //   //challenge input
		// console.log(`%cChallenge Input: `, "color : red;"); 
		// input = `2/9
		// 	       4/35
		// 	       7/34
		// 	       1/2
		// 	       16/33`; 
		// console.log(addFraction(input));		
		// input = `1/7
  //            35/192
  //            61/124
  //            90/31
  //            5/168
  //            31/51
  //            69/179
  //            32/5
  //            15/188
  //            10/17`;       					   
		// console.log(addFraction(input));
	});
})();		