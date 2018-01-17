/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {

		function prepend(array, toPrepend) {

			return array.map(element => toPrepend + element);
		}

		function getGrayCode(bitWidth, bits) {

			if(bits[0].length === bitWidth) {

				return bits;
			}

			let zeroPrefix = prepend(bits, "0");
			let onePrefix = prepend(bits, "1");

			return getGrayCode(bitWidth, [...zeroPrefix, ...onePrefix.reverse()]);
		}

		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");

		console.log(`%c8 -> `, "color : yellow;");
		getGrayCode(8, ["0", "1"]).forEach(row => {

			console.log(row);
		});

		console.log(`%c16 -> `, "color : yellow;");
		getGrayCode(16, ["0", "1"]).forEach(row => {

			console.log(row);
		});
	});
})();