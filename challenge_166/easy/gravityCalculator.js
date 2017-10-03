/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * find weight of an object on surface of a given planet
		 * @param {float} [mass] - object mass
		 * @param {String} [planet] - planet name and its data
		 *
		 * @return {float} [weight on planet surface]
		 */
		function getWeight(mass, planet) {
			const [G, radius, density] = [6.67e-11, ...planet.match(/\d+\.*\d*/g).map(Number)];
			return (G * mass * 4 / 3 * Math.PI * radius * density).toFixed(3);
		}
		/**
		 * find weight of an object on surface of different planets
		 * @param {float} [mass] - object mass
		 * @param {Array} [planets] - planets to test
		 * 
		 * @return {String} [weight on each planet surface]
		 */
		function getWeightOnPlanets(mass, planets) {
			let weights = "";
			planets.forEach(planet => {
				weights += `${planet.match(/\w+/)}: ${getWeight(mass, planet)}\n`;
			});
			return weights;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = [100, ["Tantalus, 3104500, 5009", "Reach, 7636500, 4966", "Circumstance, 4127000, 4132", "Tribute, 2818000, 4358"]];
		console.log(`%c${getWeightOnPlanets(...input)}`, "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = [75, ["Mercury, 2439700, 5427", "Venus, 6051900, 5243", "Earth, 6367445, 5515", "Mars, 3386000, 3934", "Jupiter, 69173000, 1326", "Saturn, 57316000, 687", "Uranus, 25266000, 1270", "Neptune, 24553000, 1638", "Pluto, 1173000, 2050"]];
		console.log(`%c${getWeightOnPlanets(...input)}`, "color : orange;");
	});
})();		