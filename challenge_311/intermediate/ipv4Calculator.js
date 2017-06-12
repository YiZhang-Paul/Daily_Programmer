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
				this.netPrefix = this.netAndHost.slice(0, this.mask); 
				this.hosts = this.netAndHost.slice(this.mask);
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
				return addr.split(".").map(quad => {
					let bits = Number(quad).toString(2);
					return "0".repeat(8 - bits.length) + bits;	
				}).join("");
			} 
			/**
			 * check if current address contains a given address
			 * @param obj {}
			 *
			 * addr : address to be checked
			 *
			 * returns boolean
			 */
			coverAddr(addr) {
				if(this.mask < addr.mask) {
					return this.netPrefix == addr.netAndHost.slice(0, this.mask);
				} else if(this.mask == addr.mask) {
					//find identical portion of network prefix
					let i = 1, identical;
					do {
						identical = this.netPrefix.slice(0, i) == add.netPrefix.slice(0, i);
					} while(!identical || i <= this.mask);
					if(identical) {
						let remainQuadBits = Math.min((Math.floor(i / 8) + 1), 4) * 8 - i;
						return this.netPrefix.slice(i, i + remainQuadBits) > addr.netPrefix.slice(i, i + remainQuadBits);
					} else {
						return false; 
					}
				} else {
					return false;
				}
			} 
		} 
		let addr1 = new IPv4("172.26.32.0/24");
	});
})();