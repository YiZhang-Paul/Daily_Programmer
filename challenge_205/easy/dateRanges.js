/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * custom date class
		 * @param {int} [year] - year
		 * @param {int} [month] - month
		 * @param {int} [day] - day in month
		 * @param {int} [curYear] - current year
		 */
		class CustomDate {
			constructor(year, month, day, curYear = 2015) {
				this.year = year;
				this.month = month;
				this.day = day;
				this.curYear = curYear;
			}
			/**
			 * print month
			 *
			 * @return {String} [name of month]
			 */
			printMonth() {
				let monthTable = {
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
		}
	});
})();			