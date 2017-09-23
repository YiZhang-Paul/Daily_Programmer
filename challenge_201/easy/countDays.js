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
		}
		/**
		 * day counter class
		 * @param {String} [target] - target date
		 */
		class DayCounter {
			constructor(target) {
				this.today = new CustomDate();
				this.target = new CustomDate(...target.match(/\d+/g).map(Number));
			}
		}
		console.log(new DayCounter("2015 7 4"));
	});
})();