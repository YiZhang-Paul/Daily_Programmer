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
				this.ip = addr.split("/");
				this.netAndHost = this.toBinary(this.ip[0]);
				this.mask = this.ip[1];
				this.netPrefix = this.netAndHost.slice(0, this.mask); 
			}
			/**
			 * convert IPv4 address to binary notation
			 * e.g 10.0.0.0 -> 00001010...(16 X 0s)...00000000
			 * @param String
			 * 
			 * netAndHost : IPv4 address without mask
			 *
			 * returns String
			 */	
			toBinary(netAndHost) {
				return netAndHost.split(".").map(quad => {
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
				return this.mask <= addr.mask ? this.netPrefix == addr.netPrefix.slice(0, this.mask) : false;
			} 
		}
		/**
		 * check all address and emit minimal covering set
		 * @param array []
		 * 
		 * addrs : all addresses to be checked
		 *
		 * returns array []
		 */ 
		function emitMinimalSet(addrs) {
			let minimalSet = [];
			addrs.map(addr => new IPv4(addr)).forEach(addr => {
				//check if current address covers any other address in the minimal set
				if(minimalSet.length) {
					minimalSet = minimalSet.filter(otherAddr => !addr.coverAddr(otherAddr));
				}
				//check if current address is covered by any other address in the minimal set
				if(minimalSet.every(otherAddr => !otherAddr.coverAddr(addr))) {
					minimalSet.push(addr);
				}
			});
			return minimalSet.map(addr => addr.ip.join("/"));
		} 
		//default input
		let input = ["172.26.32.162/32", "172.26.32.0/24", "172.26.0.0/16"];
		console.log("Default Input:");
		emitMinimalSet(input).forEach(a => console.log(a));
		//challenge input
		input = ["192.168.0.0/16", "172.24.96.17/32", "172.50.137.225/32", "202.139.219.192/32", "172.24.68.0/24", "192.183.125.71/32", "201.45.111.138/32", "192.168.59.211/32", "192.168.26.13/32", "172.24.0.0/17", "172.24.5.1/32", "172.24.68.37/32", "172.24.168.32/32"];
		console.log("Challenge Input:");
		emitMinimalSet(input).forEach(a => console.log(a));
	});
})();