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
		/**
		 * find least common multiply of all numbers
		 * @param {Array} [numbers] - numbers to be checked
		 *
		 * @return {int} [least common multiply]
		 */
		function findLCM(numbers) {
			let factors = numbers.map(getFactors);
			let commonFactor = [];
			for(let i = 0; i < factors.length; i++) {
				for(let j = i + 1; j < factors.length; j++) {
					for(let k = factors[i].length - 1; k >= 0; k--) {
						const index = factors[j].indexOf(factors[i][k]);
						if(index != -1) {
							commonFactor.push(factors[j].splice(index, 1)[0]);
							factors[i].splice(k, 1);
						}
					}
				}
				commonFactor.push(...factors[i]);
			} 
			return commonFactor.reduce((acc, val) => acc * val);
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