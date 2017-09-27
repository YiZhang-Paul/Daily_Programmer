/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * round number to a given decimal place
		 * @param {float} [number] - number to be rounded
		 * @param {int} [decimal] - precision of number
		 *
		 * @return {float} [rounded number]
		 */
		function roundTo(number, decimal = 2) {
			const precision = Math.pow(10, decimal);
			return Math.round(number * precision) / precision;
		}
		/**
		 * calculate a cube's dimension for a given volume
		 * @param {float} [volume] - target volume
		 *
		 * @return {float} [dimension of cube]
		 */
		function getCubeDimension(volume) {
			return roundTo(Math.cbrt(volume));
		}
		/**
		 * calculate a sphere's radius for a given volume
		 * @param {float} [volume] - target volume
		 *
		 * @return {float} [radius of sphere]
		 */
		function getSphereRadius(volume) {
			return roundTo(Math.cbrt(volume * 3 / 4 / Math.PI));
		}
		/**
		 * calculate a cylinder's height and radius for a given volume
		 * @param {float} [volume] - target volume
		 *
		 * @return {Array} [cylinder's height and radius]
		 */
		function getCylinderDimension(volume) {
			const height = Math.ceil(Math.sqrt(volume / Math.PI));
			return [height, roundTo(Math.sqrt(volume / Math.PI / height))];
		}
		/**
		 * calculate a cone's height and radius for a given volume
		 * @param {float} [volume] - target volume
		 *
		 * @return {Array} [cone's height and radius]
		 */
		function getConeDimension(volume) {
			const [height, radius] = getCylinderDimension(volume);
			return [height * 3, radius];
		}
		/**
		 * find dimension for different shapes for a given volume
		 * @param {float} [volume] - target volume
		 *
		 * @return {String} [dimension for each shape]
		 */
		function getDimension(volume) {
			const cubeDimension = getCubeDimension(volume);
			const sphereRadius = getSphereRadius(volume);
			const [cylinderHeight, cylinderRadius] = getCylinderDimension(volume);
			const [coneHeight, coneRadius] = getConeDimension(volume);
			return [
				`Cube: ${cubeDimension}m Width, ${cubeDimension}m High, ${cubeDimension}m Tall`,
				`Cylinder: ${cylinderHeight}m Tall, Diameter of ${cylinderRadius * 2}m`,
				`Sphere: ${sphereRadius}m Radius`,
				`Cone: ${coneHeight}m Tall, ${coneRadius}m Radius`
			].join("\n");
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = 27;
		console.log(`%cTarget Volume: ${input} Cube Meter -> `, "color : skyblue;");
		console.log(`%c${getDimension(input)}`, "color : orange;");
		input = 42; 
		console.log(`%cTarget Volume: ${input} Cube Meter -> `, "color : skyblue;");
		console.log(`%c${getDimension(input)}`, "color : orange;");
		input = 1000;
		console.log(`%cTarget Volume: ${input} Cube Meter -> `, "color : skyblue;");
		console.log(`%c${getDimension(input)}`, "color : orange;");
		input = 2197;
		console.log(`%cTarget Volume: ${input} Cube Meter -> `, "color : skyblue;");
		console.log(`%c${getDimension(input)}`, "color : orange;");
	});
})();