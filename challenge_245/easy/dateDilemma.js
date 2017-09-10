/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * custom date class
		 * @param {String} [date] - date string
		 */
		class CustomDate {
			constructor(date) {
				[this.year, this.month, this.dayOfMonth, this.dayOfWeek] = this.getDate(date);
			}
			/**
			 * append number to format year to 4 digits
			 * @param {int} [year] - year to be appended
			 *
			 * @return {int} [appended year]
			 */
			appendYear(year) {
				return year < 1000 ? year + 2000 : year;
			}
			/**
			 * append zero to number smaller than 10
			 * @param {int} [number] - number to be appended
			 *
			 * @return {String} [appended number]
			 */
			appendZero(number) {
				return number < 10 ? "0" + number : number;
			}
			/**
			 * get day of week
			 * @param {int} [year] - current year
			 * @param {int} [month] - current month in 0-index
			 * @param {int} [dayOfMonth] - day in month
			 *
			 * @return {int} [day of week in 0-index, counting from Sunday]
			 */
			getDayOfWeek(year, month, dayOfMonth) {
				return new Date(year, month, dayOfMonth).getDay();
			}
			/**
			 * get date 
			 * @param {String} [date] - date string
			 *
			 * @return {Array} [date represented by date string]
			 */
			getDate(date, start) {
				const dateValues = date.match(/\d+/g).map(Number); 
				if(dateValues.length < 3 && this.year) {
					dateValues.unshift(this.year);
				}
				const [year, month, dayOfMonth] = dateValues[0] < 1000 ? [dateValues[2], ...dateValues.slice(0, 2)] : dateValues;
				return [this.appendYear(year), month, dayOfMonth, this.getDayOfWeek(this.appendYear(year), month - 1, dayOfMonth)];
			}
			/**
			 * get date string representing current date
			 *
			 * @return {String} [date string]
			 */
			getDateString() {
				return [this.year, this.appendZero(this.month), this.appendZero(this.dayOfMonth)].join("-");
			}
			/**
			 * translate month name to month number
			 * @param {String} [name] - month name
			 *
			 * @return {int} [month number]
			 */
			getMonthNumber(name) {
				const monthTable = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
				return monthTable.indexOf(name) + 1;
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
			 * add years
			 * @param {int} [years] - years to add
			 */
			addYears(years) {
				this.years += years;
			}
			/**
			 * reduce years
			 * @param {int} [years] - years to reduce
			 */
			reduceYears(years) {
				this.years -= years;
			}
			/**
			 * add months
			 * @param {int} [months] - months to add
			 */
			addMonth(months) {
				if(this.month + months <= 12) {
					this.month += months;
					return;
				}
				months -= 13 - this.month; 
				[this.year, this.month] = [this.year + 1, 1];
				this.addMonth(months);
			}
			/**
			 * reduce months
			 * @param {int} [months] - months to reduce
			 */
			reduceMonth(months) {
				if(this.month - months > 0) {
					this.month -= months;
					return;
				}
				months -= this.month;
				[this.year, this.month] = [this.year - 1, 12];
				this.reduceMonth(months);
			}
			/**
			 * add weeks
			 * @param {int} [weeks] - weeks to add
			 */
			addWeek(weeks) {
				this.addDays(weeks * 7);
			}
			/**
			 * reduce weeks
			 * @param {int} [weeks] - weeks to reduce
			 */
			reduceWeek(weeks) {
				this.reduceDays(weeks * 7);
			}
			/**
			 * add days
			 * @param {int} [days] - days to add
			 */
			addDays(days) {
				if(this.dayOfMonth + days <= this.totalDaysOfMonth()) {
					this.dayOfMonth += days;
					return;
				}
				days -= this.totalDaysOfMonth() + 1 - this.dayOfMonth;
				this.addMonth(1);
				this.dayOfMonth = 1;
				this.addDays(days);
			}
			/**
			 * reduce days
			 * @param {int} [days] - days to reduce
			 */
			reduceDays(days) {
				if(this.dayOfMonth - days > 0) {
					this.dayOfMonth -= days;
					return;
				}
				days -= this.dayOfMonth;
				this.reduceMonth(1);
				this.dayOfMonth = this.totalDaysOfMonth();
				this.reduceDays(days);
			}
			/**
			 * get adjacent date
			 * @param {String} [changes] - changes to date
			 */
			getAdjacentDate(changes) {
				if(/yesterday/.test(changes)) this.reduceDays(/before/.test(changes) ? 2 : 1);
				else if(/tomorrow/.test(changes)) this.addDays(/after/.test(changes) ? 2 : 1); 
			}
			/**
			 * switch to a new date
			 * @param {String} [changes] - changes to date
			 */
			switchDate(changes) {
				const monthName = changes.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)[0];
				changes = monthName ? changes.replace(/[a-z]+/, this.getMonthNumber(monthName)) : changes;
				[this.year, this.month, this.dayOfMonth, this.dayOfWeek] = this.getDate(changes);
			}
			/**
			 * change date
			 * @param {String} [changes] - changes to date
			 *
			 * @return {String} [changed date string]
			 */
			changeDate(changes) {
				if(/ago|last/.test(changes)) this.reduceDate(changes);
				else if(/from|next/.test(changes)) this.addDate(changes);
				else if(/yesterday|tomorrow|today/.test(changes)) this.getAdjacentDate(changes);
				else this.switchDate(changes);
			}
		}
		/**
		 * reformat dates
		 * @param {String} [dates] - dates to be reformatted
		 *
		 * @return {Array} [reformatted dates]
		 */
		function reformDates(dates) {
			return dates.split("\n").map(date => new CustomDate(date).getDateString());
		}
		/**
		 * translate date notes into formatted dates
		 * @param {String} [notes] - notes to be translated
		 * @param {String} [start] - base date as starting date
		 *
		 * @return {Array} [translated dates]
		 */
		function translateDates(notes, start) {
			return notes.split("\n").map(note => {
				let date = new CustomDate(start);
				date.changeDate(note.toLowerCase());
				return date.getDateString();
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
		console.log(`%c${reformDates(input).join("\n")}`, "color : orange;");     
		//bonus input
		console.log(`%cBonus Input: `, "color : red;");
		input = `tomorrow
						 2010-dec-7
						 OCT 23
						 1 week ago`;  
		// input = `
		//          
		//          
		//          
		//          next Monday
		//          last sunDAY
		//          1 year ago
		//          1 month ago
		//          last week
		//          LAST MONTH
		//          10 October 2010
		//          an year ago
		//          2 years from tomoRRow
		//  		     1 month from 2016-01-31
		//  		     4 DAYS FROM today
		//  		     9 weeks from yesterday`;  
		console.log(`%c${translateDates(input, "2014-12-24").join("\n")}`, "color : orange;");     				             
	});
})();		