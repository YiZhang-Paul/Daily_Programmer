/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * find rectangle to cover all circles
		 * @param {String} [circles] - circle coordinate and radius
		 *
		 * @return {Array} [rectangle vertices]
		 */
		function getCoverRectangle1(circles) {
			circles = circles.split("\n").map(line => line.trim().split(",").map(Number));
			let top = Math.max(...circles.map(circle => circle[1] + circle[2])).toFixed(3);
			let bottom = Math.min(...circles.map(circle => circle[1] - circle[2])).toFixed(3);
			let right = Math.max(...circles.map(circle => circle[0] + circle[2])).toFixed(3);
			let left = Math.min(...circles.map(circle => circle[0] - circle[2])).toFixed(3);
			return [[left, bottom], [left, top], [right, top], [right, bottom]];
		}
		/**
		 * rotate coordinate
		 * @param {float} [x] - X-Coordinate
		 * @param {float} [y] - Y-Coordinate
		 * @param {float} [angle] - angle of rotation
		 * @param {String} [direction] - rotation direction
		 *
		 * @return {Array} [rotated coordinates]
		 */
		function rotateCord(x, y, angle, direction) {
			return direction ? 
				[x * Math.cos(angle) - y * Math.sin(angle), x * Math.sin(angle) + y * Math.cos(angle)].map(cord => cord.toFixed(3)) :
				[x * Math.cos(angle) + y * Math.sin(angle), -x * Math.sin(angle) + y * Math.cos(angle)].map(cord => cord.toFixed(3));
		}
		/**
		 * find rectangle to cover all circles in rotated coordinates
		 * @param {String} [info] - angle of rotation, circle coordinate and radius
		 *
		 * @return {Array} [rectangle vertices]
		 */
		function getCoverRectangle2(info) {
			info = info.split("\n").map(line => line.trim().split(",").map(Number));
			let angle = Math.atan(info[0][1] / info[0][0]);
			let circles = info.slice(1).map(circle => {
				[circle[0], circle[1]] = rotateCord(circle[0], circle[1], angle);
				return circle;
			});
			return getCoverRectangle1(circles.join("\n")).map(vertex => rotateCord(...vertex, angle, "clock"));
		}
		/**
		 * display vertices
		 * @param {Array} [vertices] - coordinates of vertices
		 */
		function displayVertices(vertices) {
			console.log(`%c${vertices.map(vertex => `(${vertex.join(", ")})`).join(", ")}`, "color : orange;");
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = `1,1,2
								 2,2,0.5
								 -1,-3,2
								 5,2,1`;
		displayVertices(getCoverRectangle1(input));			
		//bonus input
		console.log(`%cBonus Input: `, "color : red;");
		input = `1,1
						 1,1,2
						 2,2,0.5
						 -1,-3,2
						 5,2,1`;		 
		displayVertices(getCoverRectangle2(input));			
	});
})();		