/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * read initial data of triangle
		 * @param {String} [data] - triangle data
		 *
		 * @return {Object} [triangle with initial data]
		 */
		function readData(data) {
			let triangle = {a : null, b : null, c : null, A : null, B : null, C : 90};
			data.split("\n").forEach(item => {
				const [key, value] = item.trim().split("=");
				triangle[key] = Number(value);
			});
			return triangle;
		}
		/**
		 * describe triangle
		 * @param {String} [data] - triangle data
		 *
		 * @return {String} [triangle description]
		 */
		function describeTriangle(data) {
			let description = "", triangle = readData(data);
			for(let key in triangle) {
				if(triangle[key] === null) {
					if(new Set("abc").has(key)) {
						triangle[key] = key == "c" ? Math.hypot(triangle.a, triangle.b) : Math.sqrt(Math.pow(triangle.c, 2) - Math.pow(triangle.a || triangle.b, 2));
					} else {
						triangle[key] = Math.atan2(...(key == "A" ? [triangle.a, triangle.b] : [triangle.b, triangle.a])) * 180 / Math.PI;
					}
				}
				description += `${key} = ${Math.round(triangle[key] * 100) / 100}\n`;
			}
			return description;
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = `a=3
								 b=4
								 C=90`;
		console.log(describeTriangle(input));
	});
})();		