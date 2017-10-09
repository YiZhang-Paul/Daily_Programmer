/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * generate Fletcher-16 checksum
		 * @param {String} [data] - data to calculate checksum
		 *
		 * @return {int} [checksum]
		 */
		function getChecksum(data) {
			let [sum1, sum2] = [0, 0];
			for(let char of data) {
				sum1 = (sum1 + char.charCodeAt(0)) % 255;
				sum2 = (sum2 + sum1) % 255;
			}
			return ((sum2 << 8) | sum1).toString(16).toUpperCase();
		}
		console.log(getChecksum("Fletcher"));
		console.log(getChecksum("Sally sells seashells by the seashore."));
		console.log(getChecksum("Les chaussettes de l'archi-duchesse, sont-elles seches ou archi-seches ?"));
	});
})();		