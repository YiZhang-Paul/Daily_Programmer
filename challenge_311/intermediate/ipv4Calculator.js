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
				this.original = addr;
				this.addr = this.original.split("/");
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
						identical = this.netPrefix.slice(0, i) == addr.netPrefix.slice(0, i);
						i++;
					} while(!identical && i <= this.mask);
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
		/**
		 * check all address and emit minimal covering set
		 * @param array []
		 * 
		 * addrs : all addresses to be checked
		 *
		 * returns array []
		 */ 
		function emitMinimalSet(addrs) {
			addrs = addrs.map(addr => new IPv4(addr));
			let minimalSet = [];
			addrs.forEach(addr => {
				//check if current address covers any other address in the minimal set
				if(minimalSet.length) {
					minimalSet = minimalSet.filter(otherAddr => !addr.coverAddr(otherAddr));
				}
				//check if current address is covered by any other address in the minimal set
				let covered = false;
				for(let i = 0; i < minimalSet.length; i++) {
					if(minimalSet[i].coverAddr(addr)) {
						covered = true;
						break;
					}
				}
				if(!covered) {
					minimalSet.push(addr);
				}
			});
			return minimalSet.map(addr => addr.original);
		} 
		//default input
		let input = ["172.26.32.162/32", "172.26.32.0/24", "172.26.0.0/16"];
		console.log(emitMinimalSet(input));
		//challenge input
		input = ["192.168.0.0/16", "172.24.96.17/32", "172.50.137.225/32", "202.139.219.192/32", "172.24.68.0/24", "192.183.125.71/32", "201.45.111.138/32", "192.168.59.211/32", "192.168.26.13/32", "172.24.0.0/17", "172.24.5.1/32", "172.24.68.37/32", "172.24.168.32/32"];
		console.log(emitMinimalSet(input));
	});
})();