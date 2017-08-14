/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * get location of keys
		 * @param {char} [key] - key to be checked
		 *
		 * @return {Object} [location of key]
		 */
		function getKeyLocation(key) {
			let keyValue = key == "." || key === 0 ? (key == "." ? 10 : 11) : key;
			return {x : keyValue % 3 === 0 ? 3 : keyValue % 3, y : Math.ceil(keyValue / 3)};
		}
		/**
		 * calculate distance between keys
		 * @param {char} [key1] - key 1 
		 * @param {char} [key2] - key 2
		 *
		 * @return {float} [distance between keys] 
		 */
		function getKeyDistance(key1, key2) {
			[key1, key2] = [getKeyLocation(key1), getKeyLocation(key2)];
			return Math.hypot(key1.x - key2.x, key1.y - key2.y);
		}
		/**
		 * calculate total distance for an IP address
		 * @param {String} [addr] - IP address
		 *
		 * @return {float} [total distance to type the IP address]
		 */
		function getIPDistance(addr) {
			let keys = addr.split("").map(key => key == "." ? key : Number(key));
			let distance = keys.reduce((acc, val, index) => acc + (keys[index + 1] ? getKeyDistance(val, keys[index + 1]) : 0), 0);
			return Math.round(distance * 100) / 100 + "cm";
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = "7851";
		console.log(`%c${input} -> %c${getIPDistance(input)}`, "color : skyblue;", "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = "219.45.143.143";
		console.log(`%c${input} -> %c${getIPDistance(input)}`, "color : skyblue;", "color : orange;");
	});
})();			