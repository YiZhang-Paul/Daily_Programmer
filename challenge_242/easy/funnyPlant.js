/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * find the number of weeks needed to feed a given number of people
		 * @param {int} [people] - total number of people to be fed
		 * @param {int} [plant] - total number of starting plant
		 *
		 * @return {int} [total week needed to feed all people]
		 */
		function weeksToFeedAll(people, plant) {
			let week = 1, fruitsPerWeek = 0;
			while(fruitsPerWeek < people) {
				fruitsPerWeek += plant;
				plant += fruitsPerWeek;
				week++;
			}
			return week;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = [15, 1];
		console.log(weeksToFeedAll(...input));
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
    input = [200, 15];
		console.log(weeksToFeedAll(...input));
    input = [50000, 1];
		console.log(weeksToFeedAll(...input));
    input = [150000, 250];
		console.log(weeksToFeedAll(...input));
	});
})();			