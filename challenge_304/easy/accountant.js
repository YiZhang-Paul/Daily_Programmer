/* jslint esversion: 6 */
(() => {
  document.addEventListener("DOMContentLoaded", () => {
 		/**
 		 * journal record class
 		 * @param String, obj {}, float, float
 		 * 
 		 * acc    : account number
 		 * period : record period
 		 * debit  : debit entry 
 		 * credit : credit entry
 		 */
 		class Record {
 			constructor(acc, period, debit, credit) {
 				this.acc = acc;
 				this.period = period;
 				this.debit = debit;
 				this.credit = credit;
 			}
 		} 
  });
})();    	  	