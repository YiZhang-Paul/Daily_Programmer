/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {	
		/** 
		 * sort numbers in batches
		 * @param array []
		 *
		 * numbers : numbers to be sorted
		 *
		 * returns array []
		 */
		function sortNumber1(numbers) {
			let stacks = [], totalRaces = 0, start = new Date().getTime();
			for(let i = 0, groups = numbers.length / 5; i < groups; i++) {
				stacks.push(numbers.splice(0, 5).sort((a, b) => a - b));
				console.log(`Race ${++totalRaces} -> Compared: ${stacks[stacks.length - 1]}`);
			}
			while(stacks.length != 1) {
				for(let i = 0, groups = stacks.length / 5; i < groups; i++) {
					let curGroup = stacks.splice(0, 5);
					let groupResult = [];
					while(curGroup.some(row => row.length)) {
						if(curGroup.reduce((acc, val) => acc + val.length, 0) > 5) {
							curGroup.sort((a, b) => b.length - a.length).sort((a, b) => a[0] - b[0]);
							console.log(`Race ${++totalRaces} -> Compared: ${curGroup.filter(row => row.length).map(row => row[0])}`);
							groupResult.push(curGroup[0].splice(0, 1)[0]);
						} else {
							curGroup = [curGroup.reduce((acc, val) => [...acc, ...val], []).sort((a, b) => a - b)];
							console.log(`Race ${++totalRaces} -> Compared: ${curGroup[0]}`);
							groupResult.push(...curGroup[0].splice(0));
						}
					}
					stacks.push(groupResult);
				}
			}
			return [stacks[0], totalRaces, new Date().getTime() - start];
		} 
		//challenge input
		let input = [107, 47, 102, 64, 50, 100, 28, 91, 27, 5, 22, 114, 23, 42, 13, 3, 93, 8, 92, 79, 53, 83, 63, 7, 15, 66, 105, 57, 14, 65, 58, 113, 112, 1, 62, 103, 120, 72, 111, 51, 9, 36, 119, 99, 30, 20, 25, 84, 16, 116, 98, 18, 37, 108, 10, 80, 101, 35, 75, 39, 109, 17, 38, 117, 60, 46, 85, 31, 41, 12, 29, 26, 74, 77, 21, 4, 70, 61, 88, 44, 49, 94, 122, 2, 97, 73, 69, 71, 86, 45, 96, 104, 89, 68, 40, 6, 87, 115, 54, 123, 125, 90, 32, 118, 52, 11, 33, 106, 95, 76, 19, 82, 56, 121, 55, 34, 24, 43, 124, 81, 48, 110, 78, 67, 59];
		//brute force sorting method
		//let result = sortNumber1(input);
		//console.log(`%cResult: %c${result[0]}`, "color : red;", "");
		//console.log(`%cTotal Races: %c${result[1]}`, "color : red;", "");
		//console.log(`%cTime Spent: %c${result[2]}ms`, "color : red;", "");
	});
})();