/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * custom date class
		 * @param {int} [year] - year
		 * @param {int} [month] - month
		 * @param {int} [day] - day of month
		 */
		class CustomDate {
			constructor(year, month, day) {
				[this.year, this.month, this.day] = this.readDate(year, month, day);
				this.tag = year ? "target" : "today";
			}
			/**
			 * read date 
			 * @param {int} [year] - year
			 * @param {int} [month] - month
		 	 * @param {int} [day] - day of month
			 *
			 * @return {Array} [year, month, day of month]
			 */
			readDate(year, month, day) {
				if(year) {
					return [year, month, day];
				}
				let date = new Date();
				return [date.getYear() + 1900, date.getMonth() + 1, date.getDate()];
			}
			/**
			 * append zero to month and days
			 * @param {int} [monthDay] - month or day
			 *
			 * @return {String} [month or day with zero appended]
			 */
			appendZero(monthDay) {
				return monthDay < 10 ? "0" + monthDay : monthDay;
			}
			/**
			 * print date
			 *
			 * @return {String} [date string]
			 */
			printDate() {
				return [this.year, this.appendZero(this.month), this.appendZero(this.day)].join("/");
			}
			/**
			 * check if a year is a leap year
			 * @param {int} [year] - year to be checked
			 *
			 * @return {boolean} [test result]
			 */
			isLeapYear(year = this.year) {
				return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
			}
			/**
			 * get total days in a month
			 * @param {int} [month] - month number
			 *
			 * @return {int} [total days in the given month]
			 */
			daysInMonth(month = this.month) {
				const table = {1 : 31, 2 : this.isLeapYear() ? 29 : 28, 3 : 31, 4 : 30, 5 : 31, 6 : 30, 7 : 31, 8 : 31, 9 : 30, 10 : 31, 11 : 30, 12 : 31};
				return table[month];
			}
			/**
			 * count total days passed in current year
			 *
			 * @return {int} [total days passed]
			 */
			daysPassed() {
				let total = 0;
				for(let i = 1; i <= this.month - 1; i++) {
					total += this.daysInMonth(i);
				}
				return total + this.day;
			}
			/**
			 * get remaining days in current year
			 *
			 * @return {int} [total days left]
			 */
			daysRemain() {
				return 365 - this.daysPassed();
			}
		}
		/**
		 * day counter class
		 * @param {String} [target] - target date
		 */
		class DayCounter {
			constructor(target) {
				this.target = new CustomDate(...target.match(/\d+/g).map(Number));
				this.today = new CustomDate();
			}
			/**
			 * sort date in ascending order
			 * @param {Object} [date1] - date 1
			 * @param {Object} [date2] - date 2
			 *
			 * @return {Array} [sorted dates]
			 */
			sortDate(date1 = this.target, date2 = this.today) {
				return [date1, date2].sort((a, b) => a.year - b.year || a.month - b.month || a.day - b.day);
			}
			/**
			 * get difference in dates
			 * @param {Object} [date1] - date 1
			 * @param {Object} [date2] - date 2
			 *
			 * @return {int} [difference in dates]
			 */
			getDifference(date1 = this.target, date2 = this.today) {
				if(date1.year == date2.year) {
					return Math.abs(date1.daysPassed() - date2.daysPassed());
				}
				[date1, date2] = this.sortDate(date1, date2);
				let difference = date1.daysRemain() + date2.daysPassed();
				for(let i = date1.year + 1; i <= date2.year - 1; i++) {
					difference += new CustomDate(i, 1, 1).isLeapYear() ? 366 : 365;
				}
				return difference * (date1.tag == "today" ? 1 : -1);
			}
			/**
			 * count date difference
			 * @param {Object} [date1] - date 1
			 * @param {Object} [date2] - date 2
			 *
			 * @return {String} [counting result]
			 */
			countDays(date1 = this.target, date2 = this.today) {
				const difference = this.getDifference();
				[date1, date2] = this.sortDate(date1, date2);
				return `Date Format: YYYY/MM/DD\n${Math.abs(difference)} Days${difference < 0 ? " Passed" : ""} From ${date1.printDate()} to ${date2.printDate()}`;
			}
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = "2015 2 14";
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${new DayCounter(input).countDays()}`, "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = "2015 7 4";
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${new DayCounter(input).countDays()}`, "color : orange;");
		input = "2015 10 31";
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${new DayCounter(input).countDays()}`, "color : orange;");
		input = "2015 12 24";
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${new DayCounter(input).countDays()}`, "color : orange;");
		input = "2016 1 1";
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${new DayCounter(input).countDays()}`, "color : orange;");
		input = "2016 2 9";
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${new DayCounter(input).countDays()}`, "color : orange;");
		input = "2020 1 1";
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${new DayCounter(input).countDays()}`, "color : orange;");
		input = "2020 2 9";
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${new DayCounter(input).countDays()}`, "color : orange;");
		input = "2020 3 1";
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${new DayCounter(input).countDays()}`, "color : orange;");
		input = "3015 2 9";
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${new DayCounter(input).countDays()}`, "color : orange;");
	});
})();