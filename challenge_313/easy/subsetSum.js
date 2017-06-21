/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * check if a given list contains 0 
		 * or two integers that add up to 0
		 * @param array []
		 *
		 * numList : list of all numbers
		 *
		 * returns boolean
		 */
		function checkZeroSum(numList) {
			//change every thing into positive and put into a set
			let numSet = new Set(numList.map(num => Math.abs(num)));
			return numSet.size != numList.length || numSet.has(0);
		}
		/**
		 * check if exists a subset that add up to 0
		 * @param array []
		 * 
		 * numList : list of all numbers
		 *
		 * returns boolean
		 */
		function checkZeroSumSubset(numList) {
			if(numList[0] > 0) {
				return false;
			}
			let startIndex = 0, curIndex = startIndex, sum = 0;
			while(startIndex < numList.length) {
				while(curIndex < numList.length) {
					sum += numList[curIndex];
					if(sum > 0) {
						break;
					}
					let nextNum = numList[curIndex + 1];
					if(sum === 0 || nextNum == -sum || nextNum === 0) {
						return true;
					}
					curIndex++;
				}
				curIndex = ++startIndex;
				sum = 0;
			}
			return false;
		} 
		//base challenge input
		let input = [1, 2, 3];
		//console.log(`[${input}] -> ${checkZeroSum(input)}`);
		//input = [-5, -3, -1, 2, 4, 6];
		//console.log(`[${input}] -> ${checkZeroSum(input)}`);
		//input = [];
		//console.log(`[${input}] -> ${checkZeroSum(input)}`);
		//input = [-1, 1];
		//console.log(`[${input}] -> ${checkZeroSum(input)}`);
		//input = [-97364, -71561, -69336, 19675, 71561, 97863];
		//console.log(`[${input}] -> ${checkZeroSum(input)}`);
		//input = [-53974, -39140, -36561, -23935, -15680, 0];
		//console.log(`[${input}] -> ${checkZeroSum(input)}`);
		//bonus challenge input
		//input = [0];
		//console.log(`[${input}] -> ${checkZeroSumSubset(input)}`);
		//input = [-3, 1, 2];
		//console.log(`[${input}] -> ${checkZeroSumSubset(input)}`);
		//input = [-98634, -86888, -48841, -40483, 2612, 9225, 17848, 71967, 84319, 88875];
		//console.log(`[${input}] -> ${checkZeroSumSubset(input)}`);
		//input = [-83314, -82838, -80120, -63468, -62478, -59378, -56958, -50061, -34791, -32264, -21928, -14988, 23767, 24417, 26403, 26511, 36399, 78055];
		//console.log(`[${input}] -> ${checkZeroSumSubset(input)}`);
		//input = [-92953, -91613, -89733, -50673, -16067, -9172, 8852, 30883, 46690, 46968, 56772, 58703, 59150, 78476, 84413, 90106, 94777, 95148];
		//console.log(`[${input}] -> ${checkZeroSumSubset(input)}`);
		//input = [-94624, -86776, -85833, -80822, -71902, -54562, -38638, -26483, -20207, -1290, 12414, 12627, 19509, 30894, 32505, 46825, 50321, 69294];
		//console.log(`[${input}] -> ${checkZeroSumSubset(input)}`);
		//input = [-83964, -81834, -78386, -70497, -69357, -61867, -49127, -47916, -38361, -35772, -29803, -15343, 6918, 19662, 44614, 66049, 93789, 95405];
		//console.log(`[${input}] -> ${checkZeroSumSubset(input)}`);
		//input = [-68808, -58968, -45958, -36013, -32810, -28726, -13488, 3986, 26342, 29245, 30686, 47966, 58352, 68610, 74533, 77939, 80520, 87195];
		//console.log(`[${input}] -> ${checkZeroSumSubset(input)}`);
		//input = [-97162, -95761, -94672, -87254, -57207, -22163, -20207, -1753, 11646, 13652, 14572, 30580, 52502, 64282, 74896, 83730, 89889, 92200];
		//console.log(`[${input}] -> ${checkZeroSumSubset(input)}`);
		//input = [-93976, -93807, -64604, -59939, -44394, -36454, -34635, -16483, 267, 3245, 8031, 10622, 44815, 46829, 61689, 65756, 69220, 70121];
		//console.log(`[${input}] -> ${checkZeroSumSubset(input)}`);
		//input = [-92474, -61685, -55348, -42019, -35902, -7815, -5579, 4490, 14778, 19399, 34202, 46624, 55800, 57719, 60260, 71511, 75665, 82754];
		//console.log(`[${input}] -> ${checkZeroSumSubset(input)}`);
		//input = [-85029, -84549, -82646, -80493, -73373, -57478, -56711, -42456, -38923, -29277, -3685, -3164, 26863, 29890, 37187, 46607, 69300, 84808];
		//console.log(`[${input}] -> ${checkZeroSumSubset(input)}`);
		//input = [-87565, -71009, -49312, -47554, -27197, 905, 2839, 8657, 14622, 32217, 35567, 38470, 46885, 59236, 64704, 82944, 86902, 90487];
		//console.log(`[${input}] -> ${checkZeroSumSubset(input)}`);


	});
})();