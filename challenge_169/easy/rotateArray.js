/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * rotate array clockwise for 90 degree
		 * @param {Array} [array] - array to rotate
		 *
		 * @return {Array} [rotated array]
		 */
		function rotate90Degree(array) {
			let rotated = [];
			for(let i = array.length - 1; i >= 0; i--) {
				for(let j = 0; j < array[i].length; j++) {
					rotated[j] = rotated[j] ? [...rotated[j], array[i][j]] : [array[i][j]];
				}
			}
			return rotated;
		}
		/**
		 * rotate array clockwise
		 * @param {Array} [array] - array to rotate
		 * @param {int} [degree] - total degree of rotation
		 *
		 * @return {Array} [rotated array]
		 */
		function rotateArray(array, degree = 90) {
			const totalRotate = Math.floor(degree / 90);
			let rotated = [];
			for(let i = 0; i < totalRotate; i++) {
				rotated = rotate90Degree(rotated.length ? rotated : array);
			}
			return rotated;
		}
		/**
		 * display array
		 * @param {Array} [array] - array to display
		 *
		 * @return {String} [array in expanded form]
		 */
		function displayArray(array) {
			return array.map(row => row.join(" ")).join("\n");
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9]
		];
		console.log(`%c${displayArray(input)}`, "color : skyblue;");
		console.log(`%cRotated 90 Degree ->`, "color : skyblue;");
		console.log(`%c${displayArray(rotateArray(input))}`, "color : orange;");
		input = [
			[7, 4, 1],
			[8, 5, 2],
			[9, 6, 3]
		];
		console.log(`%c${displayArray(input)}`, "color : skyblue;");
		console.log(`%cRotated 90 Degree ->`, "color : skyblue;");
		console.log(`%c${displayArray(rotateArray(input))}`, "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = [
			[1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
			[0, 9, 8, 7, 6, 5, 4, 3, 2, 1],
			[1, 3, 5, 7, 9, 2, 4, 6, 8, 0],
			[0, 8, 6, 4, 2, 9, 7, 5, 3, 1],
			[0, 1, 2, 3, 4, 5, 4, 3, 2, 1],
			[9, 8, 7, 6, 5, 6, 7, 8, 9, 0],
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			[2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
			[9, 8, 7, 6, 7, 8, 9, 8, 7, 6],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		];
		console.log(`%c${displayArray(input)}`, "color : skyblue;");
		console.log(`%cRotated 90 Degree ->`, "color : skyblue;");
		console.log(`%c${displayArray(rotateArray(input))}`, "color : orange;");
		//bonus input
		console.log(`%cBonus Input: `, "color : red;");
		console.log(`%c${displayArray(input)}`, "color : skyblue;");
		console.log(`%cRotated 180 Degree ->`, "color : skyblue;");
		console.log(`%c${displayArray(rotateArray(input, 180))}`, "color : orange;");
		console.log(`%c${displayArray(input)}`, "color : skyblue;");
		console.log(`%cRotated 270 Degree ->`, "color : skyblue;");
		console.log(`%c${displayArray(rotateArray(input, 270))}`, "color : orange;");
	});
})();		