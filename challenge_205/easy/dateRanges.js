/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * custom date class
		 * @param {int} [year] - year
		 * @param {int} [month] - month
		 * @param {int} [day] - day in month
		 */
		class CustomDate {
			constructor(year, month, day) {
				this.year = year;
				this.month = month;
				this.day = day;
			}
			/**
			 * print month
			 *
			 * @return {String} [name of month]
			 */
			printMonth() {
				const monthTable = {
					1 : "January", 2 : "February", 3 : "March", 4 : "April", 
					5 : "May", 6 : "June", 7 : "July", 8 : "August", 9 : "September", 
					10 : "October", 11 : "November", 12 : "December"
				};
				return monthTable[this.month];
			}
			/**
			 * print day
			 *
			 * @return {String} [name of day]
			 */
			printDay() {
				if(this.day < 11 || this.day > 13) {
					const remainder = this.day % 10;
					if(new Set([1, 2, 3]).has(remainder)) {
						return this.day + (remainder == 1 ? "st" : (remainder == 2 ? "nd" : "rd"));
					}
				}				
				return this.day + "th";
			}
			/**
			 * print date
			 * @param {String} [toPrint] - date items to print
			 * @param {String} [format] - date format
			 *
			 * @return {String} [date printed]
			 */
			printDate(toPrint = "YMD", format = "YMD") {
				const printList = new Set(toPrint);
				let date = "";
				for(let i = 0; i < format.length; i++) {
					if(printList.has(format[i])) {
						if(format[i] == "Y" && (!i || i == format.length - 1)) {
							date = i ? date.slice(0, -1) + ", " + this.year : date + this.year + ", ";
							continue;
						}
						date += format[i] == "Y" ? this.year + " " : (format[i] == "M" ? this.printMonth() : this.printDay()) + " ";
					}
				}
				return date; 
			}
		}
		/**
		 * date range generator class
		 * @param {String} [date1] - date 1
		 * @param {String} [date2] - date 2
		 * @param {String} [format] - desired date format
		 * @param {int} [curYear] - current year
		 */
		class RangeGenerator {
			constructor(date1, date2, format = "YMD", curYear = 2015) {
				[this.date1, this.date2] = [date1, date2].map(this.readDate);
				this.format = format;
				this.curYear = curYear;
			}
			/**
			 * read date string
			 * @param {String} [date] - date string to read
			 *
			 * @return {Object} [date object]
			 */
			readDate(date) {
				return new CustomDate(...date.match(/\d+/g).map(Number));
			}
			/**
			 * check if a date is within current year
			 * @param {Object} [date] - date to be checked
			 *
			 * @return {boolean} [test result]
			 */
			inCurrentYear(date) {
				return date.year == this.curYear;
			}
			/**
			 * check if two dates are the same 
			 * @param {Object} [date1] - date 1
			 * @param {Object} [date2] - date 2
			 *
			 * @return {boolean} [test result]
			 */
			isSameDate(date1 = this.date1, date2 = this.date2) {
				return date1.year == date2.year && date1.month == date2.month && date1.day == date2.day;
			}
			/**
			 * sort date in ascending order
			 * @param {Object} [date1] - date 1
			 * @param {Object} [date2] - date 2
			 *
			 * @return {Array} [sorted dates]
			 */
			sortDate(date1 = this.date1, date2 = this.date2) {
				return [date1, date2].sort((a, b) => a.year - b.year || a.month - b.month || a.day - b.day);
			}
			/**
			 * generate date range
			 *
			 * @return {String} [date range]
			 */
			getDateRange() {
				if(this.isSameDate()) {
					return this.date1.printDate("YMD", this.format);
				}
				let [begin, end] = this.sortDate(this.date1, this.date2);
				console.log(begin, end);
			}
		}
		console.log(new RangeGenerator("2015-07-01", "2015-07-04").getDateRange());
		console.log(new RangeGenerator("2017-01-01", "2017-01-01").getDateRange());
	});
})();			