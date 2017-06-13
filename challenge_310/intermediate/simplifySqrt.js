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
			[b, c] = [b * d, c * d];
			let primeSqrs = primes.map(prime => Math.pow(prime, 2));
			let factored = false;
			while(!factored) {
				factored = true;
				for(let i = 0; i < primeSqrs.length; i++) {
					if(b % primeSqrs[i] === 0) {
						b /= primeSqrs[i];
						a *= primes[i];
						factored = false;
						break;
					}
				}
			}
			factored = false;
			while(!factored) {
				factored = true;
				for(let i = 0; i < primes.length; i++) {
					if(a % primes[i] === 0 && c % primes[i] === 0) {
						a /= primes[i];
						c /= primes[i];
						factored = false;
						break;
					}
				}
			}
			return `a = ${a}, b = ${b}, c = ${c}`;
		}	
		//prime numbers up to 20
		let primes = [2, 3, 5, 7, 11, 13, 17, 19];
		//default input
		let input = [2, 5, 5, 10];
		console.log(simplifySqrt(...input));
		input = [45, 1465, 26, 15];
		console.log(simplifySqrt(...input));
	});
})();		