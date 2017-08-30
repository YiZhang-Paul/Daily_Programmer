/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * loan class
		 * @param {Object} [manager] - loan manager
		 * @param {int} [principal] - principal amount for loan
		 */
		class Loan {
			constructor(manager, principal = 15) {
				this.manager = manager;
				this.principal = principal;
				this.curBalance = this.principal;
				this.rate = 0.02;
				this.curRate = this.rate;
				this.balances = [];
			}
			/**
			 * add balance for a given year
			 * @param {int} [age] - recipient's age for a given year
			 * @param {float} [payment] - available payment
			 *
			 * @return {float} [remaining payment amount]
			 */
			addBalance(age, payment) {
				let actualPay = Math.min(this.curBalance, payment);
				this.curBalance -= actualPay;
				let interest = this.curRate == 1 ? 0 : Math.round(this.curBalance * this.rate * 10000) / 10000;
				this.curRate = this.curRate == 1 ? 1 : (Math.round((this.curRate + this.rate) * 100) / 100);
				this.balances.push({
					curAge : age,
					before : this.curBalance + actualPay,
					pay : actualPay,
					after : this.curBalance,
					curInterest : interest, 
					curRate : this.curRate
				});
				this.curBalance += interest;
				return payment - actualPay;
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
				this.incomes = income.split(" ").map(num => Number(num));
				this.principal = 15;
				this.royalty = 0.2;
				this.clawbackCap = 100;
				this.loans = [];
				this.totalLoan = 0;
				this.balances = [];
				this.getAllBalance();
			}
			/**
			 * add new loan
			 */
			addLoan() {
				this.loans.push(new Loan(this, this.principal));
			}
			/**
			 * calculate total amount of loan issued
			 *
			 * @return {float} [total loan amount]
			 */
			getTotalLoan() {
				return Math.round(this.loans.reduce((acc, loan) => acc + loan.curBalance, 0) * 10000) / 10000;
			}
			/**
			 * calculate total amount of repayment for a given year
			 * @param {int} [age] - age of repayment
			 * @param {int} [income] - income for given year
			 *
			 * @return {Array} [clawback and royalty payment amount]
			 */
			getRepayment(age, income) {
				let multiplier = age >= 65 ? 2 : 1;
				let royalty = income * this.royalty * multiplier;
				let clawback = this.totalLoan >= this.clawbackCap ? this.principal * this.royalty * multiplier : 0;
				return [clawback, royalty];
			}
			/**
			 * calculate balance for all loans
			 */
			getAllBalance() {
				for(let i = 0; i < this.incomes.length; i++) {
					this.addLoan();
					this.totalLoan = this.getTotalLoan();
					let age = this.age + i;
					let [clawback, royalty] = this.getRepayment(age, this.incomes[i]);
					for(let j = 0, pay = clawback + royalty; j < this.loans.length; j++) {
						pay = this.loans[j].addBalance(age, pay);
					}
					this.balances.push({
						curAge : age,
						principal : this.principal,
						income : this.incomes[i],
						clawback : clawback,
						royalty : royalty,
						pay : clawback + royalty,
						before : this.totalLoan,
						after : this.totalLoan - clawback - royalty
					});
				}
			}
			/**
			 * calculate ending balance
			 *
			 * @return {Object} - ending balance
			 */
			getEndBalance() {
				return {
					overallLoan : this.incomes.length * this.principal,
					totalRoyalty : this.balances.reduce((acc, loan) => acc + loan.royalty, 0),
					totalClawback : this.balances.reduce((acc, loan) => acc + loan.clawback, 0),
					after : this.balances[this.balances.length - 1].after
				};
			}
		}
		//challenge & bonus input
		console.log(`%cChallenge & Bonus Input: `, "color : red;");
		let input = "0 0 20 20 20 20 20 20 20 20 20 20 30 30 30 30 30 30 30 30 30 30 40 40 40 40 40 40 40 40 40 40 50 50 50 50 50 50 50 50 50 50 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0";
		let manager = new URLManager(18, input);
		input = "0 0 30 30 30 30 30 30 30 30 30 30 40 40 40 40 40 40 40 40 40 40 50 50 50 50 50 50 50 50 50 50 60 60 60 60 60 60 60 60 60 60 100 120 140 160 200 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10";
		manager = new URLManager(18, input);
	});
})();			