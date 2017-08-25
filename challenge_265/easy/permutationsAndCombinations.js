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
		 * get permutation index
		 * @param {int} [index] - permutation index
		 * @param {int} [base] - permutation base
		 *
		 * @return {Array} [permutation on given index]
		 */
		function getPermuteIndex(index, base) {
			return permuteNum(new Array(base).fill(0).map((num, i) => i))[index - 1];
		}
		/**
		 * brute force combination
		 * @param {Array} [nums] - numbers for combination
		 * @param {int} [total] - total number of items needed for combination
		 * @param {Array} [curNum] - current combination
		 *
		 * @return {Array} [all combinations]
		 */
		function combineNum(nums, total = 3, curNum = []) {
			if(curNum.length == total || !nums.length) {
				return curNum.length == total ? [curNum] : null;
			}
			let combination = [];
			for(let i = 0; i < nums.length; i++) {
				let result = combineNum([...nums.slice(i + 1)], total, [...curNum, nums[i]]);
				if(result !== null) {
					combination.push(...result);
				}
			}
			return combination;
		}
		/**
		 * get combination index
		 * @param {int} [index] - combination index
		 * @param {int} [total] - numbers needed for combination
		 * @param {int} [base] - combination base
		 *
		 * @return {Array} [combination on given index]
		 */
		function getCombineIndex(index, total, base) {
			return combineNum(new Array(base).fill(0).map((num, i) => i), total)[index - 1];
		} 
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = [3, 3];
		console.log(`%cThe ${input[0]}rd Permutation of ${input[1]} is %c${getPermuteIndex(...input).join(" ")}`, "color : skyblue;", "color : orange;");
		input = [4, 3];
		console.log(`%cThe ${input[0]}th Permutation of ${input[1]} is %c${getPermuteIndex(...input).join(" ")}`, "color : skyblue;", "color : orange;");
		input = [3, 3, 6];
		console.log(`%cThe ${input[0]}rd Combination Number of ${input[1]} out of ${input[2]} is %c${getCombineIndex(...input).join(" ")}`, "color : skyblue;", "color : orange;");
		input = [6, 3, 6];
		console.log(`%cThe ${input[0]}th Combination Number of ${input[1]} out of ${input[2]} is %c${getCombineIndex(...input).join(" ")}`, "color : skyblue;", "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = [240, 6];
		console.log(`%cThe ${input[0]}th Permutation of ${input[1]} is %c${getPermuteIndex(...input).join(" ")}`, "color : skyblue;", "color : orange;");
		input = [3240, 7];
		console.log(`%cThe ${input[0]}th Permutation of ${input[1]} is %c${getPermuteIndex(...input).join(" ")}`, "color : skyblue;", "color : orange;");
		input = [24, 3, 8];
		console.log(`%cThe ${input[0]}th Combination Number of ${input[1]} out of ${input[2]} is %c${getCombineIndex(...input).join(" ")}`, "color : skyblue;", "color : orange;");
		input = [112, 4, 9];
		console.log(`%cThe ${input[0]}th Combination Number of ${input[1]} out of ${input[2]} is %c${getCombineIndex(...input).join(" ")}`, "color : skyblue;", "color : orange;");
	});
})();			