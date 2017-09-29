/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * prepend zero for numbers smaller than 10
		 * @param {int} [number] - number to prepend zero
		 *
		 * @return {String} [number with zero prepended]
		 */
		function prependZero(number) {
			return number < 10 ? "0" + number : number;
		}
		/**
		 * get month number for a given month name
		 * @param {String} [month] - month name
		 *
		 * @return {int} [month number]
		 */
		function getMonthNumber(month) {
			const table = {
				Jan : 1, Feb : 2, Mar : 3, Apr : 4, May : 5, Jun : 6,
				Jul : 7, Aug : 8, Sep : 9, Oct : 10, Nov : 11, Dec : 12
 			};
			return table[month];
		}
		/**
		 * convert date string to number
		 * @param {String} [date] - date string for conversion
		 * @param {String} [type] - date string type (year/month/day)
		 *
		 * @return {int} [number after conversion]
		 */
		function toNumber(date, type) {
			if(type == "M") {
				return /\d/.test(date) ? prependZero(Number(date)) : getMonthNumber(date);
			}
			return type == "Y" ? date % 1000 + (date % 1000 < 50 ? 2000 : 1900) : prependZero(Number(date));
		}
		/**
		 * format date into ISO 8601 standard
		 * @param {String} [date] - date to format
		 *
		 * @return {String} [formatted date]
		 */
		function formatDate(date) {
			let dates = date.match(/\w+/g);
			let format = "";
			const separator = /[-/#*]/.test(date) ? date.match(/[-/#*]/)[0] : 0;
			if(separator == "-") {
				return date;
			}
			if(separator == "/" || separator === 0) format = "MDY";
			else if(separator == "#") format = "MYD";
			else if(separator == "*") format = "DMY";
			return format.split("").map(type => toNumber(dates[format.indexOf(type)], type)).join("-");
		}

		console.log(formatDate("06#72#03"));
		console.log(formatDate("Dec 26, 75"));
	});
})();		