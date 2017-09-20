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
			printDate(toPrint = "YMD", format = "MDY") {
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
				return date.trim(); 
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
			constructor(date1, date2, format = "MDY", curYear = 2015) {
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
			 * check if two dates are in same year
			 * @param {Object} [date1] - date 1
			 * @param {Object} [date2] - date 2
			 *
			 * @return {boolean} [test result] 
			 */
			isSameYear(date1 = this.date1, date2 = this.date2) {
				return date1.year == date2.year;
			}
			/**
			 * check if two dates are in same month
			 * @param {Object} [date1] - date 1
			 * @param {Object} [date2] - date 2
			 *
			 * @return {boolean} [test result] 
			 */
			isSameMonth(date1 = this.date1, date2 = this.date2) {
				return date1.month == date2.month;
			}
			/**
			 * check if two dates have the same day
			 * @param {Object} [date1] - date 1
			 * @param {Object} [date2] - date 2
			 *
			 * @return {boolean} [test result] 
			 */
			isSameDay(date1 = this.date1, date2 = this.date2) {
				return date1.day == date2.day;
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
				const [begin, end] = this.sortDate(this.date1, this.date2);
				if(this.inCurrentYear(begin) && end.year - begin.year <= 1) {
					if(this.isSameMonth() && this.isSameDay()) {
						return begin.printDate("YMD", this.format) + " - " + end.printDate("YMD", this.format);
					}
					return begin.printDate("MD", this.format) + " - " + end.printDate(this.isSameMonth() ? "D" : "MD", this.format);
				}
				return begin.printDate(this.isSameYear() ? "MD" : "YMD", this.format) + " - " + end.printDate("YMD", this.format);
			}
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = ["2015-07-01", "2015-07-04"];
		console.log(`%c${input.join(" ~ ")} -> %c${new RangeGenerator(...input).getDateRange()}`, "color : skyblue;", "color : orange;");
		input = ["2015-12-01", "2016-02-03"];
		console.log(`%c${input.join(" ~ ")} -> %c${new RangeGenerator(...input).getDateRange()}`, "color : skyblue;", "color : orange;");
		input = ["2015-12-01", "2017-02-03"];
		console.log(`%c${input.join(" ~ ")} -> %c${new RangeGenerator(...input).getDateRange()}`, "color : skyblue;", "color : orange;");
		input = ["2016-03-01", "2016-05-05"];
		console.log(`%c${input.join(" ~ ")} -> %c${new RangeGenerator(...input).getDateRange()}`, "color : skyblue;", "color : orange;");
		input = ["2017-01-01", "2017-01-01"];
		console.log(`%c${input.join(" ~ ")} -> %c${new RangeGenerator(...input).getDateRange()}`, "color : skyblue;", "color : orange;");
		input = ["2022-09-05", "2023-09-04"];
		console.log(`%c${input.join(" ~ ")} -> %c${new RangeGenerator(...input).getDateRange()}`, "color : skyblue;", "color : orange;");
		input = ["2015-04-01", "2020-09-10"];
		console.log(`%c${input.join(" ~ ")} -> %c${new RangeGenerator(...input).getDateRange()}`, "color : skyblue;", "color : orange;");
		input = ["2015-12-11", "2016-12-11"];
		console.log(`%c${input.join(" ~ ")} -> %c${new RangeGenerator(...input).getDateRange()}`, "color : skyblue;", "color : orange;");
		//bonus input
		console.log(`%cBonus Input: `, "color : red;");
		input = ["2015-07-01", "2015-07-04", "DMY"];
		console.log(`%c${input.slice(0, 2).join(" ~ ")} (${input[2]}) -> %c${new RangeGenerator(...input).getDateRange()}`, "color : skyblue;", "color : orange;");
		input = ["2016-03-01", "2016-05-05", "YDM"];
		console.log(`%c${input.slice(0, 2).join(" ~ ")} (${input[2]}) -> %c${new RangeGenerator(...input).getDateRange()}`, "color : skyblue;", "color : orange;");
		input = ["2022-09-05", "2023-09-04", "YMD"];
		console.log(`%c${input.slice(0, 2).join(" ~ ")} (${input[2]}) -> %c${new RangeGenerator(...input).getDateRange()}`, "color : skyblue;", "color : orange;");
	});
})();			