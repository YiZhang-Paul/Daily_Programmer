/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * custom date class
		 * @param {String} [date] - date string
		 */
		class CustomDate {
			constructor(date) {
				[this.year, this.month, this.dayOfMonth] = this.getDate(date);
				this.dayOfWeek = this.getDayOfWeek();
			}
			/**
			 * append zero to dates when necessary
			 * @param {int} [dateNum] - date values
			 *
			 * @return {String} [reformatted date value]
			 */
			appendZero(dateNum) {
				return dateNum < 10 ? "0" + dateNum : dateNum;
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
			 * retrieve day of week
			 *
			 * @return {int} [day of week]
			 */
			getDayOfWeek() {
				return new Date(this.year, this.month - 1, this.dayOfMonth).getDay();
			}
			/**
			 * retrieve date string
			 *
			 * @return {String} [date string]
			 */
			getDateStr() {
				return [this.year, this.appendZero(this.month), this.appendZero(this.dayOfMonth)].join("-");
			}
			/**
			 * get total days in a month
			 * @param {int} [month] - current month
			 *
			 * @return {int} [total days in given month]
			 */
			totalDaysOfMonth(month = this.month) {
				let daysPerMonth = {1 : 31, 2 : 28, 3 : 31, 4 : 30, 5 : 31, 6 : 30, 7 : 31, 8 : 31, 9 : 30, 10 : 31, 11 : 30, 12 : 31};
				return daysPerMonth[month];
			}
			/**
			 * add days
			 * @param {int} [days] - days to add
			 */
			addDays(days) {
				if(this.totalDaysOfMonth() - this.dayOfMonth >= days) {
					this.dayOfMonth += days;
					return;
				}
				days -= this.totalDaysOfMonth() - this.dayOfMonth + 1;
				if(++this.month == 13) {
					[this.year, this.month] = [this.year + 1, 1];
				}
				this.dayOfMonth = 1;
				this.addDays(days);
			}
			/**
			 * reduce days
			 * @param {int} [day] - days to reduce
			 */
			reduceDays(days) {
				if(this.dayOfMonth > days) {
					this.dayOfMonth -= days;
					return;
				}
				days -= this.dayOfMonth;
				if(--this.month === 0) {
					[this.year, this.month] = [this.year - 1, 12];
				}
				this.dayOfMonth = this.totalDaysOfMonth();
				this.reduceDays(days);
			}
			/**
			 * get adjacent date
			 * @param {String} [changes] - changes to date
			 */
			getAdjacentDate(changes) {
				if(/yesterday/.test(changes)) {
					this.reduceDays(/before/.test(changes) ? 2 : 1);
				} else {
					this.addDays(/after/.test(changes) ? 2 : 730);
				} 
			}
			/**
			 * change date 
			 * @param {String} [changes] - changes to date
			 *
			 * @return {String} [changed date string]
			 */
			changeDate(changes) {
				if(/ago|last/.test(changes)) this.reduceDate();
				else if(/from|next/.test(changes)) this.addDate();
				else if(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/.test(changes)) this.switchDate();
				else this.getAdjacentDate();
				return this.getDateStr(changes);
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
		input = "tomorrow";  
		// input = `tomorrow
		// 		     2010-dec-7
		// 		     OCT 23
		// 		     1 week ago
		// 		     next Monday
		// 		     last sunDAY
		// 		     1 year ago
		// 		     1 month ago
		// 		     last week
		// 		     LAST MONTH
		// 		     10 October 2010
		// 		     an year ago
		// 		     2 years from tomoRRow
		// 		     1 month from 2016-01-31
		// 		     4 DAYS FROM today
		// 		     9 weeks from yesterday`; 
		console.log(`%c${translateDate(input, "2014-12-24").join("\n")}`, "color : orange;");     				             
	});
})();		