/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * calculate repulsion force between two particles
		 * @param {String} [stats] - stats for two particles
		 *
		 * @return {String} [repulsion force]
		 */
		function getRepulsion(stats) {
			let particle = stats.match(/-?\d+\.?\d*/g).map(Number);
			let distanceSquare = Math.pow(particle[1] - particle[4], 2) + Math.pow(particle[2] - particle[5], 2);
			return (particle[0] * particle[3] / distanceSquare).toFixed(4);
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = `1 -5.2 3.8
                 1 8.7 -4.1`;
		console.log(`%c${getRepulsion(input)}`, "color : orange;");  
		input = `4 0.04 -0.02
				     4 -0.02 -0.03`;               
		console.log(`%c${getRepulsion(input)}`, "color : orange;");  
	});
})();		