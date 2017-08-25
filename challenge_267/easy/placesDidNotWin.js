/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * translate number places to English expressions
		 * @param {int} [place] - number place to be translated
		 *
		 * @return {String} [translated number place]
		 */
		function translatePlace(place) {
			let expression = "th", placeStr = String(place);
			if(/1$|2$|3$/.test(placeStr) && !/11$|12$|13$/.test(placeStr)) {
				expression = /1$/.test(placeStr) ? "st" : (/2$/.test(placeStr) ? "nd" : "rd");
			}
			return place + expression;
		}
		/**
		 * print all places the dog did not win
		 * @param {int} [place] - final place of dog
		 * @param {int} [total] - total number of participating dogs
		 *
		 * @return {Array} [places the dog did not win]
		 */
		function placesNotWin(place, total) {
			let places = [];
			for(let i = 1; i <= total; i++) {
				if(i == place) {
					continue;
				}
				places.push(translatePlace(i));
			}
			return places;
		}
		//Default & Bonus 1, 2, 3 input
		console.log(`%cDefault & Bonus 1 - 3 Input: `, "color : red;");
		console.log(`%c${placesNotWin(2, 300).join(" ")}`, "color : skyblue;");
	});
})();		