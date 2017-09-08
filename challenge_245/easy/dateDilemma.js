/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * reformat date
		 * @param {String} [dates] - date strings to be reformatted
		 *
		 * @return {Array} [reformatted dates]
		 */
		function reformatDate(dates) {
			return dates.split("\n").map(date => {
				let numbers = date.match(/\d+/g).map(Number);
				let [year, month, day] = numbers[0] < 1000 ? [numbers[2], ...numbers.slice(0, 2)] : numbers;
				return `${year < 100 ? "20" + year : year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`;
			});
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = `2/13/15
                 1-31-10
                 5 10 2015
                 2012 3 17
                 2001-01-01
                 2008/01/07`;
		console.log(`%c${reformatDate(input).join("\n")}`, "color : orange;");                 
	});
})();		