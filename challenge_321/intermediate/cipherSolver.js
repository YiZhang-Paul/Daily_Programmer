/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * find modular multiplicative inverse for a given number
		 * @param int, int
		 *
		 * a : multiplier of encryption
		 * m : alphabet table size
		 *
		 * returns int
		 */
		function findMMI(a, m) {
			let ax = m + 1;
			while(ax % a) {
				ax += m;
			}
			return ax / a;
		} 
		//default input
		let input = "NLWC WC M NECN";
		input = "YEQ LKCV BDK XCGK EZ BDK UEXLVM QPLQGWSKMB";
		input = "NH WRTEQ TFWRX TGY T YEZVXH GJNMGRXX STPGX NH XRGXR TX QWZJDW ZK WRNUZFB P WTY YEJGB ZE RNSQPRY XZNR YJUU ZSPTQR QZ QWR YETPGX ZGR NPGJQR STXQ TGY URQWR VTEYX WTY XJGB";
		//bonus input
		input = "Yeq lkcv bdk xcgk ez bdk uexlv'm qplqgwskmb.";
		input = "Nh wrteq tfwrx, tgy t yezvxh gjnmgrxx stpgx / Nh xrgxr, tx qwzjdw zk wrnuzfb p wty yejgb, / Ze rnsqpry xznr yjuu zsptqr qz qwr yetpgx / Zgr npgjqr stxq, tgy Urqwr-vteyx wty xjgb.";
	});
})();		