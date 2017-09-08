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
				const daysPerMonth = {1 : 31, 2 : 28, 3 : 31, 4 : 30, 5 : 31, 6 : 30, 7 : 31, 8 : 31, 9 : 30, 10 : 31, 11 : 30, 12 : 31};
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
				if(/\byesterday\b/.test(changes)) {
					this.reduceDays(/\bbefore\b/.test(changes) ? 2 : 1);
				} else if(/\btomorrow\b/.test(changes)) {
					this.addDays(/\bafter\b/.test(changes) ? 2 : 1);
				} 
			}
			/**
			 * translate month name to month number
			 * @param {String} [name] - name of month
			 *
			 * @return {int} [month number]
			 */
			getMonthNumber(name) {
				const monthTable = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
				return monthTable.indexOf(name.slice(0, 3)) + 1;
			}
			/**
			 * switch current date
			 * @param {String} [changes] - changes to date
			 */
			switchDate(changes) {
				const dateNums = changes.match(/\d+/g).map(Number).sort((a, b) => b - a);
				this.year = dateNums.length == 1 ? this.year : dateNums[0];
				this.month = this.getMonthNumber(changes.match(/[a-z]+/)[0]);
				this.dayOfMonth = dateNums[dateNums.length - 1];
				this.dayOfWeek = this.getDayOfWeek();
			}
			/**
			 * translate day name to day number in week
			 * @param {String} [name] - name of day
			 *
			 * @return {int} [day number in 0-index] 
			 */
			getDayNumber(name) {
				const dayTable = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
				return dayTable.indexOf(name) ? dayTable.indexOf(name) : 7;
			}
			/**
			 * move date forward
			 * @param {String} [changes] - changes to date
			 */
			addDate(changes) {
				if(/\bnext\b/.test(changes)) {
					if(/\bday/.test(changes)) {
						this.addDays(1);
					} else if(/\bweek/.test(changes)) {
						this.addDays(7);
					} else if(/\byear/.test(changes)) {
						this.year++;
					} else if(/\bmonth/.test(changes)) {
						[this.year, this.month] = this.month == 12 ? [this.year + 1, 1] : [this.year, this.month + 1];
						this.dayOfMonth = this.dayOfMonth > this.totalDaysOfMonth() ? this.totalDaysOfMonth() : this.dayOfMonth;
					} else {
						this.addDays(7 - (this.dayOfWeek ? this.dayOfWeek : 7) + this.getDayNumber(changes.match(/\bmon|\btue|\bwed|\bthu|\bfri|\bsat|\bsun/)[0]));
					}
					return;
				}
				let [start, end] = changes.split("from").reverse();
				if(/\btomorrow\b|\byesterday\b/.test(start)) {
					this.getAdjacentDate(start);
				}
				let changeAmount = Number(end.replace(/\ba\b|\ban\b/, "1").match(/\d+/)[0]);
				if(/\bday/.test(end)) {
					this.addDays(changeAmount);
				} else if(/\bweek/.test(end)) {
					this.addDays(changeAmount * 7);
				} else if(/\byear/.test(end)) {
					this.year += changeAmount;
				} else if(/\bmonth/.test(end)) {
					[this.year, this.month] = this.month == 12 ? [this.year + 1, 1] : [this.year, this.month + 1];
					this.dayOfMonth = this.dayOfMonth > this.totalDaysOfMonth() ? this.totalDaysOfMonth() : this.dayOfMonth;
				}
				console.log(changes.split("from")[1]);
			}
			/**
			 * move date backward
			 * @param {String} [changes] - changes to date
			 */
			reduceDate(changes) {
				if(/\blast\b/.test(changes)) {
					if(/\bday/.test(changes)) {
						this.reduceDays(1);
					} else if(/\bweek/.test(changes)) {
						this.reduceDays(7);
					} else if(/\byear/.test(changes)) {
						this.year--;
					} else if(/\bmonth/.test(changes)) {
						[this.year, this.month] = this.month == 1 ? [this.year - 1, 12] : [this.year, this.month - 1];
						this.dayOfMonth = this.dayOfMonth > this.totalDaysOfMonth() ? this.totalDaysOfMonth() : this.dayOfMonth;
					} else {
						this.reduceDays(7 - this.getDayNumber(changes.match(/\bmon|\btue|\bwed|\bthu|\bfri|\bsat|\bsun/)[0]) + (this.dayOfWeek ? this.dayOfWeek : 7));
					} 
					return;
				}
				let changeAmount = Number(changes.replace(/\ba\b|\ban\b/, "1").match(/\d+/)[0]);
				if(/\bday/.test(changes)) {
					this.reduceDays(changeAmount);
				} else if(/\bweek/.test(changes)) {
					this.reduceDays(changeAmount * 7);
				}	else if(/\byear/.test(changes)) {
					this.year -= changeAmount;
				} else if(/\bmonth/.test(changes)) {
					while(changeAmount) {
						if(this.month > changeAmount) {
							this.month -= changeAmount;
							break;
						}
						changeAmount -= this.month;
						[this.year, this.month] = [this.year - 1, 12];
					}
				}
			}
			/**
			 * change date 
			 * @param {String} [changes] - changes to date
			 *
			 * @return {String} [changed date string]
			 */
			changeDate(changes) {
				if(/\bago\b|\blast\b/.test(changes)) this.reduceDate(changes);
				else if(/\bfrom\b|\bnext\b/.test(changes)) this.addDate(changes);
				else if(/\bjan|\bfeb|\bmar|\bapr|\bmay|\bjun|\bjul|\baug|\bsep|\boct|\bnov|\bdec/.test(changes)) this.switchDate(changes);
				else this.getAdjacentDate(changes);
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
			const dateNums = date.match(/\d+/g).map(Number);
			const [year, month, day] = dateNums[0] < 1000 ? [dateNums[2], ...dateNums.slice(0, 2)] : dateNums;
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