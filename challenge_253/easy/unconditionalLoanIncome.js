/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * loan class
		 */
		class Loan {
			constructor() {
				this.principal = 15000;
				this.curBalance = this.principal;
				this.interest = 0.02;
				this.curInterest = this.interest;
			}
		}
		/**
		 * unconditional loan income manager
		 * @param {int} [age] - recipient starting age
		 * @param {String} [income] - list of recipient's incomes of each year
		 */
		class URLManager {
			constructor(age, income) {
				this.age = age;
				this.income = income.split(" ").map(num => Number(num));
				this.royalty = 0.2;
				this.clawback = 100000;
				this.loans = [];
			}
		}
	});
})();			