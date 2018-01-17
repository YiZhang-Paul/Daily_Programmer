/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {

		function getDigits(base) {

			return Array.from(new Array(base).keys());
		}

		function repeat(sequence, repeats) {

			let repeated = [];

			sequence.forEach(bit => {

				let bits = new Array(repeats).fill(bit);
				repeated = [...repeated, ...bits];
			});

			return repeated;
		}

		function getSequence(base, order) {

			let digits = getDigits(base);
			let sequence= [...digits];

			for(let i = 0; i < base - 1; i++) {

				digits.unshift(digits.pop());
				sequence = [...sequence, ...digits];
			}

			return repeat(sequence, Math.pow(base, order));
		}

		function concatSequence(original, toConcat) {

			let index = 0;

			for(let i = 0; i < original.length; i++) {

				original[i] = original[i] + "" + toConcat[index];
				index = (index + 1) % toConcat.length;
			}

			return original;
		}

		function getGrayCode(base, width) {

			let codes = repeat(getDigits(base), Math.pow(base, width - 1));

			for(let i = width - 2; i >= 0; i--) {

				codes = concatSequence(codes, getSequence(base, i));
			}

			return codes;
		}

		//default input
		console.log(`%cDefault Input: `, "color : red;");

		console.log(`%cBase 2, Width 2 -> `, "color : yellow;");
		console.log(getGrayCode(2, 2));

		console.log(`%cBase 2, Width 3 -> `, "color : yellow;");
		console.log(getGrayCode(2, 3));

		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");

		console.log(`%cBase 2, Width 8 -> `, "color : yellow;");
		console.log(getGrayCode(2, 8));

		console.log(`%cBase 2, Width 16 -> `, "color : yellow;");
		console.log(getGrayCode(2, 16));

		//bonus input
		console.log(`%cBonus Input: `, "color : red;");

		console.log(`%cBase 3, Width 3 -> `, "color : yellow;");
		console.log(getGrayCode(3, 3));

		console.log(`%cBase 4, Width 3 -> `, "color : yellow;");
		console.log(getGrayCode(4, 3));
	});
})();