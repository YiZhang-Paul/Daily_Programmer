/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {	
		/**
		 * simplify square roots
		 * @param int, int, int, int
		 *
		 * a, b, c, b : all four numbers to involved in the radical
		 *
		 * returns String
		 */
		function simplifySqrt(a, b, c, d) {
			//find greatest common divisor
			let findGCD = (num1, num2) => num2 === 0 ? num1 : findGCD(num2, num1 % num2);
			//prime numbers up to 20
			let primes = [2, 3, 5, 7, 11, 13, 17, 19];
			let primeSqrs = primes.map(prime => Math.pow(prime, 2));
			[b, c] = [b * d, c * d]; //eliminate d from radical
			let factored = false;
			do {
				for(let i = 0; i < primeSqrs.length; i++) {
					factored = b % primeSqrs[i] !== 0;
					if(b % primeSqrs[i] === 0) {
						[a, b] = [a * primes[i], b / primeSqrs[i]];
						break;
					}
				}
			} while(!factored);
			return `a = ${a / findGCD(a, c)}, b = ${b}, c = ${c / findGCD(a, c)}`;
		}	
		//default input
		let input = [2, 5, 5, 10];
		console.log(`${input.join(" ")} -> ${simplifySqrt(...input)}`);
		//challenge input
		input = [45, 1465, 26, 15];
		console.log(`${input.join(" ")} -> ${simplifySqrt(...input)}`);
	});
})();		