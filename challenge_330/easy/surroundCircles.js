/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * find rectangle to cover all circles
		 * @param {String} [circles] - location and radius of all circles
		 *
		 * @return {Array} [rectangle vertices]
		 */
		function getCoverRectangle(circles) {
			circles = circles.split("\n").map(line => line.trim().split(",").map(Number));
			let top = Math.max(...circles.map(circle => circle[1] + circle[2])).toFixed(3);
			let bottom = Math.min(...circles.map(circle => circle[1] - circle[2])).toFixed(3);
			let left = Math.min(...circles.map(circle => circle[0] - circle[2])).toFixed(3);
			let right = Math.max(...circles.map(circle => circle[0] + circle[2])).toFixed(3);
			return [`(${left}, ${bottom})`, `(${left}, ${top})`, `(${right}, ${top})`, `(${right}, ${bottom})`];
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = `1,1,2
								 2,2,0.5
								 -1,-3,2
								 5,2,1`;
		console.log(`%c${getCoverRectangle(input).join(", ")}`, "color : orange;");								 
	});
})();		