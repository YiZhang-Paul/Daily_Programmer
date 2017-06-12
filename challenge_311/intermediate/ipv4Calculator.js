/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * IPv4 address class
		 * @param String
		 *
		 * addr : IPv4 address in decimal form
		 */
		class IPv4 {
			constructor(addr) {
				this.addr = addr.split("/");
				this.netAndHost = this.toBinary(this.addr[0]);
				this.mask = this.addr[1];
			}
			/**
			 * convert IPv4 address to binary notation
			 * @param String
			 * 
			 * addr : IPv4 address without mask
			 *
			 * returns String
			 */	
			toBinary(addr) {
				return addr.split(".").map(quad => Number(quad).toString(2)).join("");
			} 
		} 
		let addr1 = new IPv4("172.26.32.0/24");
	});
})();