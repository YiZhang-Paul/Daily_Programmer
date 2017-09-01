/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * loan class
		 * @param {Object} [manager] - loan manager
		 */
		class Loan {
			constructor(manager) {
				this.manager = manager;
				this.balance = manager.principal;
				this.rate = 0.02;
				this.cumulativeRate = 0;
				this.totalPay = 0;
				this.records = [];
			}
			/**
			 * leave a number to a given decimal point
			 * @param {float} [number] - number to be transformed
			 * @param {int} [decimal] - decimal precision
			 *
			 * @return {float} [transformed number]
			 */
			toDecimal(number, decimal) {
				let precision = Math.pow(10, decimal);
				return Math.round(number * precision) / precision;
			}
			/**
			 * calculate interest for a year
			 *
			 * @return {float} [interest for a year]
			 */
			getInterest() {
				let interest = this.cumulativeRate ? 
					(this.cumulativeRate == 1 ? 0 : this.toDecimal(this.balance * this.rate, 4)) : 0;
				this.cumulativeRate = this.cumulativeRate == 1 ? 1 : this.toDecimal(this.cumulativeRate + this.rate, 2);
				return interest;
			}
			/**
			 * add record for a given year
			 * @param {float} [pay] - available payment for a given year
			 *
			 * @return {float} [remaining payment]
			 */
			addRecord(pay) {
				if(!this.balance) {
					return pay;
				}
				let interest = this.getInterest();
				let actualPay = Math.min(this.balance, pay);
				this.totalPay += actualPay;
				this.balance = this.toDecimal(this.balance + interest - actualPay, 4);
				this.records.push({pay : actualPay, balance : this.balance, interest : interest, rate : this.cumulativeRate});
				return this.toDecimal(pay - actualPay, 4);
			}
		}
		/**
		 * loan manager class
		 * @param {int} [age] - recipient's starting age
		 * @param {String} [incomes] - incomes of each year
		 */
		class ULIManager {
			constructor(age, incomes) {
				this.startAge = age;
				this.incomes = incomes.split(" ").map(income => Number(income));
				this.principal = 15;
				this.royaltyRate = 0.2;
				this.clawbackRate = 0.2;
				this.clawbackCap = 100;
				this.loans = [];
				this.records = [];
				this.getBalance();
			}
			/**
			 * add new loan
			 */
			addLoan() {
				this.loans.push(new Loan(this));
			}
			/**
			 * calculate current total on loans
			 *
			 * @return {float} [total loan amount]
			 */
			getTotalLoan() {
				return Math.round(this.loans.reduce((acc, loan) => acc + loan.balance, 0) * 10000) / 10000;
			}
			/**
			 * calculate total amount of clawback for a given year
			 * @param {int} [age] - age of payment year
			 *
			 * @return {int} [clawback]
			 */
			getClawback(age) {
				let multiplier = age >= 65 ? 2 : 1;
				return this.getTotalLoan() >= this.clawbackCap ? this.principal * this.clawbackRate * multiplier : 0;
			}
			/**
			 * calculate total royalty for a given year
			 * @param {int} [age] - age of payment year
			 * @param {int} [income] - income of payment year
			 *
			 * @return {int} [royalty]
			 */
			getRoyalty(age, income) {
				let multiplier = age >= 65 ? 2 : 1;
				return income * this.royaltyRate * multiplier;
			}
			/**
			 * calculate balance for all loans
			 */
			getBalance() {
				this.incomes.forEach((income, index) => {
					this.addLoan();
					let curAge = this.startAge + index;
					let [clawback, royalty] = [this.getClawback(curAge), this.getRoyalty(curAge, income)];
					for(let i = 0, pay = clawback + royalty; i < this.loans.length; i++) {
						pay = this.loans[i].addRecord(pay);
					}
					this.records.push({clawback : clawback, royalty : royalty, balance : this.getTotalLoan()});
				});
			}
			/**
			 * calculate total clawback
			 *
			 * @return {int} [total clawback]
			 */
			totalClawback() {
				return this.records.reduce((acc, loan) => acc + loan.clawback, 0);
			}
			/**
			 * calculate total royalty
			 *
			 * @return {int} [total royalty]
			 */
			totalRoyalty() {
				return this.records.reduce((acc, loan) => acc + loan.royalty, 0);
			}
			/**
			 * display balance by age
			 */
			balanceByAge() {
				this.records.forEach((record, index) => {
					console.log(`%cAge: ${this.startAge + index}, Loan: ${this.principal}, Income: ${this.incomes[index]}, Clawback: ${record.clawback}, Royalty: ${record.royalty}, Total: ${record.balance + record.royalty + record.clawback}, Balance: ${record.balance}`, "color : orange;");
				});
			}
			/**
			 * display balance by loan
			 */
			balanceByLoan() {
				this.loans.forEach(loan => {
					console.log(`%cLoan: ${this.principal}, Balance: ${loan.balance}, Interest: ${Math.round((loan.balance + loan.totalPay - this.principal) * 10000) / 10000}, Payment: ${loan.totalPay}`, "color : orange;");
				});
			}
			/**
			 * display end balance 
			 */
			endBalance() {
				console.log(`%cTotal Loan: ${this.loans.length * this.principal}, Royalty: ${this.totalRoyalty()}, Clawback: ${this.totalClawback()}, Balance: ${this.records[this.records.length - 1].balance}`, "color : orange;");
			}
		}
		//challenge & bonus input
		console.log(`%cChallenge & Bonus Input: `, "color : red;");
		let input = "0 0 20 20 20 20 20 20 20 20 20 20 30 30 30 30 30 30 30 30 30 30 40 40 40 40 40 40 40 40 40 40 50 50 50 50 50 50 50 50 50 50 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0";
		let manager = new ULIManager(18, input);
		console.log(`%cBalance By Year: `, "color : skyblue;");
		manager.balanceByAge();
		console.log(`%cBalance By Loan: `, "color : skyblue;");
		manager.balanceByLoan();
		console.log(`%cEnd Balance: `, "color : skyblue;");
		manager.endBalance();
		input = "0 0 30 30 30 30 30 30 30 30 30 30 40 40 40 40 40 40 40 40 40 40 50 50 50 50 50 50 50 50 50 50 60 60 60 60 60 60 60 60 60 60 100 120 140 160 200 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10";
		manager = new ULIManager(18, input);
		console.log(`%cBalance By Year: `, "color : skyblue;");
		manager.balanceByAge();
		console.log(`%cBalance By Loan: `, "color : skyblue;");
		manager.balanceByLoan();
		console.log(`%cEnd Balance: `, "color : skyblue;");
		manager.endBalance();
	});
})();			