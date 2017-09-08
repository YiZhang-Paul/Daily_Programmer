/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * custom date class
		 * @param {String} [date] - date string
		 */
		class CustomDate {
			constructor(date) {
				[this.year, this.month, this.day] = this.getDate(date);
			}
			/**
			 * retrieve date
			 * @param {String} [date] - date string
			 *
			 * @return {Array} [given year, month and day]
			 */
			getDate(date) {
				return reformatDate(date).split("-").map(Number);
			}
			/**
			 * retrieve date string
			 *
			 * @return {String} [date string]
			 */
			getDateStr() {
				return [this.year, this.month, this.day].join("-");
			}
			/**
			 * change date 
			 * @param {String} [changes] - changes to date
			 *
			 * @return {String} [changed date string]
			 */
			changeDate(changes) {
				return this.getDateStr();
			}
		}
		/**
		 * reformat date
		 * @param {String} [date] - date string to be reformatted
		 *
		 * @return {String} [reformatted date]
		 */
		function reformatDate(date) {
			let numbers = date.match(/\d+/g).map(Number);
			let [year, month, day] = numbers[0] < 1000 ? [numbers[2], ...numbers.slice(0, 2)] : numbers;
			return `${year < 100 ? "20" + year : year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`;
		}
		/**
		 * validate all dates
		 * @param {String} [dates] - date strings to be validated
		 *
		 * @return {Array} [validated dates]
		 */
		function validateDates(dates) {
			return dates.split("\n").map(date => reformatDate(date));
		}
		/**
		 * translate notes into dates
		 * @param {String} [notes] - notes to be translated
		 * @param {String} [baseDate] - base date for reference
		 *
		 * @return {Array} [translated dates]
		 */
		function translateDate(notes, baseDate) {
			return notes.split("\n").map(line => new CustomDate(baseDate).changeDate(line.toLowerCase()));
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = `2/13/15
                 1-31-10
                 5 10 2015
                 2012 3 17
                 2001-01-01
                 2008/01/07`;
		console.log(`%c${validateDates(input).join("\n")}`, "color : orange;");     
		//bonus input
		console.log(`%cBonus Input: `, "color : red;");    
		input = `tomorrow
				     2010-dec-7
				     OCT 23
				     1 week ago
				     next Monday
				     last sunDAY
				     1 year ago
				     1 month ago
				     last week
				     LAST MONTH
				     10 October 2010
				     an year ago
				     2 years from tomoRRow
				     1 month from 2016-01-31
				     4 DAYS FROM today
				     9 weeks from yesterday`; 
		console.log(`%c${translateDate(input, "2014-12-24").join("\n")}`, "color : orange;");     				             
	});
})();		