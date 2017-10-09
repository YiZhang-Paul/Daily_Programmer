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
		/**
		 * generate checksums for a block of text
		 * @param {String} [text] - text to generate checksum
		 *
		 * @return {String} [checksums]
		 */
		function getAllChecksum(text) {
			return text.split("\n")
			           .map((line, index) => `${index + 1} ${getChecksum(line.trim())}`)
			           .join("\n");
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = `Fletcher
								 Sally sells seashells by the seashore.
								 Les chaussettes de l'archi-duchesse, sont-elles seches ou archi-seches ?`;
		console.log(`%c${getAllChecksum(input)}`, "color : orange;");
	});
})();		