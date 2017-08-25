/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * brute force permutation
		 * @param {Array} [nums] - numbers to permute
		 * @param {Array} [curNum] - current permutation
		 *
		 * @return {Array} [all permutations]
		 */
		function permuteNum(nums, curNum = []) {
			if(!nums.length) {
				return [curNum];
			}
			let permutation = [];
			for(let i = 0; i < nums.length; i++) {
				permutation.push(...permuteNum([...nums.slice(0, i), ...nums.slice(i + 1)], [...curNum, nums[i]]));
			}
			return permutation;
		}
		/**
		 * get permute index
		 * @param {int} [index] - permute index
		 * @param {int} [base] - permute base
		 *
		 * @return {Array} [permutation on given index]
		 */
		function getPermuteIndex(index, base) {
			return permuteNum(new Array(base).fill(0).map((num, i) => i))[index - 1];
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = [3, 3];
		console.log(`%cThe ${input[0]}rd Permutation of ${input[1]} is %c${getPermuteIndex(...input).join(" ")}`, "color : skyblue;", "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = [240, 6];
		console.log(`%cThe ${input[0]}rd Permutation of ${input[1]} is %c${getPermuteIndex(...input).join(" ")}`, "color : skyblue;", "color : orange;");
		input = [3240, 7];
		console.log(`%cThe ${input[0]}rd Permutation of ${input[1]} is %c${getPermuteIndex(...input).join(" ")}`, "color : skyblue;", "color : orange;");
	});
})();			