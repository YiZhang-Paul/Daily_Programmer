/* jslint esversion: 6 */
(() => {
  document.addEventListener("DOMContentLoaded", () => {
  	//journal entries
 		let journal = `ACCOUNT;PERIOD;DEBIT;CREDIT;
									 1000;JAN-16;100000;0;
									 3000;JAN-16;0;100000;
									 7140;JAN-16;36000;0;
									 1000;JAN-16;0;36000;
									 1100;FEB-16;80000;0;
									 1000;FEB-16;0;60000;
									 2000;FEB-16;0;20000;
									 1110;FEB-16;17600;0;
									 2010;FEB-16;0;17600;
									 1000;MAR-16;28500;0;
									 4000;MAR-16;0;28500;
									 2010;MAR-16;17600;0;
									 1000;MAR-16;0;17600;
									 5000;APR-16;19100;0;
									 1000;APR-16;0;19100;
									 1000;APR-16;32900;0;
									 1020;APR-16;21200;0;
									 4000;APR-16;0;54100;
									 1000;MAY-16;15300;0;
									 1020;MAY-16;0;15300;
									 1000;MAY-16;4000;0;
									 4090;MAY-16;0;4000;
									 1110;JUN-16;5200;0;
									 2010;JUN-16;0;5200;
									 5100;JUN-16;19100;0;
									 1000;JUN-16;0;19100;
									 4120;JUN-16;5000;0;
									 1000;JUN-16;0;5000;
									 7160;JUL-16;2470;0;
									 2010;JUL-16;0;2470;
									 5500;JUL-16;3470;0;
									 1000;JUL-16;0;3470;`;
		//account information
		let accounts = `ACCOUNT;LABEL;
										1000;Cash;
										1020;Account Receivables;
										1100;Lab Equipement;
										1110;Office Supplies;
										2000;Notes Payables;
										2010;Account Payables;
										2110;Utilities Payables;
										3000;Common Stock;
										4000;Commercial Revenue;
										4090;Unearned Revenue;
										5000;Direct Labor;
										5100;Consultants;
										5500;Misc Costs;
										7140;Rent;
										7160;Telephone;
										9090;Dividends;`;	
 		/**
 		 * journal record class
 		 * @param String, String, float, float
 		 * 
 		 * acc    : account number
 		 * period : record period
 		 * debit  : debit entry 
 		 * credit : credit entry
 		 */
 		class Record {
 			constructor(acc, period, debit, credit) {
 				this.acc = acc;
 				this.period = new Date(period);
 				this.debit = debit;
 				this.credit = credit;
 			}
 		} 
 		/**
 		 * balance calculator class
 		 * @param String
 		 *
 		 * journal : journal entries
 		 */
 		class AccountManager {
 			constructor(journal) {
 				this.records = this.makeEntryTable(journal);
 			}
 			/**
 			 * construct entry table
 			 * @param String
 			 *
 			 * journal : journal entries
 			 *
 			 * returns array []
 			 */
 			makeEntryTable(journal) {
 				let entries = [];
 				journal.split("\n").slice(1).forEach(entry => {
 					entries.push(new Record(...entry.trim().split(";").slice(0, -1)));
 				});
 				return entries;
 			} 
 		} 
 		let accountManager = new AccountManager(journal);							
  });
})();    	  	