/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * find weight of an object on surface of a given planet
		 * @param {float} [mass] - object's mass
		 * @param {String} [planet] - planet name and its data
		 *
		 * @return {float} [weight on planet surface]
		 */
		//G × mass of first object × 4/3 × π × radius * density
		function getWeight(mass, planet) {
			const [G, radius, density] = [6.67e-11, ...planet.match(/\d+\.*\d*/g).map(Number)];
			return (G * mass * 4 / 3 * Math.PI * radius * density).toFixed(3);
		}
		console.log(getWeight(100, "Mercury, 2439700, 5427"));
		console.log(getWeight(100, "Tantalus, 3104500, 5009"));
		console.log(getWeight(100, "Reach, 7636500, 4966"));
	});
})();		