/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * shuffle an array of items
		 * @param array []
		 *
		 * array : array to be shuffled
		 *
		 * returns array []
		 */
		function shuffleArray(array, shuffled = []) {
			if(!array.length) {
				return shuffled;
			}
			let pickIndex = Math.floor(Math.random() * array.length);
			return shuffleArray([...array.slice(0, pickIndex), ...array.slice(pickIndex + 1)], [...shuffled, array[pickIndex]]);
		} 
		console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8]));
		console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8]));
		console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8]));
		console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8]));
		console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8]));
		console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8]));
	});
})();		