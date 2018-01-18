/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {

		function removeDuplicate(array) {

			return Array.from(new Set(array));
		}

		function hasOppositeValue(values) {

			let absoluteValues = values.map(value => Math.abs(value));

			return removeDuplicate(absoluteValues).length !== values.length;
		}

		function hasSubset(values) {

			if(values.includes(0) || hasOppositeValue(values)) {

				return true;
			}

			return false;
		}

		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let list = [1, 2, 3];
		console.log(hasSubset(list));
		list = [-5, -3, -1, 2, 4, 6];
		console.log(hasSubset(list));
		list = [];
		console.log(hasSubset(list));
		list = [-1, 1];
		console.log(hasSubset(list));
		list = [-97364, -71561, -69336, 19675, 71561, 97863];
		console.log(hasSubset(list));
		list = [-53974, -39140, -36561, -23935, -15680, 0];
		console.log(hasSubset(list));
	});
})();