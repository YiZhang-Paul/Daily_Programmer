/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * retrieve dates
		 * @param {String} [url] - date string URL
		 *
		 * @return {Object} [Promise object]
		 */
		function getDates(url) {
			return new Promise((resolve, reject) => {
				let xhttp = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
				xhttp.onreadystatechange = function() {
					if(this.readyState == 4 && this.status == 200) resolve(this.responseText.split("\n").map(date => date.trim()));
					else if(this.status == 404) reject("No Dates Found.");
				};
				xhttp.open("GET", url, true);
				xhttp.send();
			});
		}
		/**
		 * prepend zero for numbers smaller than 10
		 * @param {int} [number] - number to prepend
		 *
		 * @return {String} [number with zero prepended]
		 */
		function prependZero(number) {
			return number < 10 ? "0" + number : number;
		}
		/**
		 * get month number corresponding to month name
		 * @param {String} [month] - month name
		 *
		 * @return {int} [corresponding month number]
		 */
		function getMonthNumber(month) {
			const table = {
				Jan : 1, Feb : 2, Mar : 3, Apr : 4, May : 5, Jun : 6,
				Jul : 7, Aug : 8, Sep : 9, Oct : 10, Nov : 11, Dec : 12
 			};
 			return prependZero(table[month]);
		}
		/**
		 * convert date string to number
		 * @param {String} [date] - date string for conversion
		 * @param {String} [type] - date string type
		 *
		 * @return {int} [number after conversion]
		 */
		function dateToNumber(date, type) {
			if(type == "M") {
				return /\d/.test(date) ? prependZero(Number(date)) : getMonthNumber(date);
			}
			return type == "Y" ? date % 100 + (date % 100 < 50 ? 2000 : 1900) : prependZero(Number(date));
		}
		/**
		 * get format of current date string
		 * @param {String} [date] - date string
		 *
		 * @return {String} [current format of date string]
		 */
		function getFormat(date) {
			const separator = /[/#*]/.test(date) ? date.match(/[/#*]/)[0] : 0;
			if(separator == "/" || separator === 0) {
				return "MDY";	
			}
			return separator == "#" ? "MYD" : "DMY";
		}
		/**
		 * format date into ISO 8601 standard
		 * @param {String} [date] - date to format
		 *
		 * @return {String} [formatted date]
		 */
		function formatDate(date) {
			if(/-/.test(date)) {
				return date;
			}
			let dates = date.match(/\w+/g);
			const format = getFormat(date);
			return "YMD".split("").map(type => dateToNumber(dates[format.indexOf(type)], type)).join("-");
		}
		getDates("dates.txt").then(dates => {
			//challenge input
			console.log(`%cChallenge Input: `, "color : red;");
			dates.forEach(date => {
				console.log(`%c${formatDate(date)}`, "color : orange;");
			});
		}).catch(error => {console.log(error);});
	});
})();		