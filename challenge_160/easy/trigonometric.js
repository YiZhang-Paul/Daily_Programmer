/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * read initial data of a triangle
		 * @param {String} [data] - initial data of triangle
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
		 * convert radian to degree
		 * @param {float} [radian] - radian to convert
		 *
		 * @return {float} [degree after conversion]
		 */
		function toDegree(radian) {
			return radian * 180 / Math.PI;
		}
		/**
		 * convert degree to radian
		 * @param {float} [degree] - degree to convert
		 *
		 * @return {float} [radian after conversion]
		 */
		function toRadian(degree) {
			return degree / 180 * Math.PI;
		}
		/**
		 * calculate all data of triangle
		 * @param {Object} [triangle] - triangle with initial data
		 *
		 * @return {Object} [triangle with all data]
		 */
		function getAllTriangleData(triangle) {
			let sideUnknown = ["a", "b", "c"].filter(side => triangle[side] === null);
			if(sideUnknown.length == 2) {
				triangle[triangle.A ? "B" : "A"] = triangle.C - (triangle.A || triangle.B);
				if(new Set(sideUnknown).has("c")) {
					const [unknown, known] = triangle.a ? ["b", "a"] : ["a", "b"];
					triangle[unknown] = triangle[known] * Math.tan(toRadian(triangle[unknown.toUpperCase()])); 
					triangle.c = Math.hypot(triangle.a, triangle.b);
				} else {
					triangle.a = triangle.c * Math.sin(toRadian(triangle.A));
					triangle.b = triangle.c * Math.sin(toRadian(triangle.B));
				}
			} else {
				triangle[sideUnknown[0]] = sideUnknown[0] == "c" ? Math.hypot(triangle.a, triangle.b) : Math.sqrt(Math.pow(triangle.c, 2) - Math.pow(triangle.a || triangle.b, 2));
				triangle.A = toDegree(Math.atan2(triangle.a, triangle.b));
				triangle.B = toDegree(Math.atan2(triangle.b, triangle.a));
			}
			return triangle;
		}
		/**
		 * describe triangle
		 * @param {String} [data] - initial data of triangle
		 *
		 * @return {String} [description of triangle]
		 */
		function describeTriangle(data) {
			let description = "", triangle = getAllTriangleData(readData(data));
			for(let key in triangle) {
				description += `${key} = ${Math.round(triangle[key] * 100) / 100}\n`;
			}
			return description;
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = `a=3
								 b=4
								 C=90`;
		console.log(`%c${describeTriangle(input)}`, "color : orange;");
		input = `a=3
						 B=53.13
						 C=90`;
		console.log(`%c${describeTriangle(input)}`, "color : orange;");
		input = `c=5
						 B=53.13
						 C=90`;
		console.log(`%c${describeTriangle(input)}`, "color : orange;");
	});
})();		