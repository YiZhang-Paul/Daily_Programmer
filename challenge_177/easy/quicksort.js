/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * quick sort a sequence
		 * @param {Array} [sequence] - sequence to sort
		 *
		 * @return {Array} [sorted sequence]
		 */
		function quickSort(sequence) {
			if(sequence.length <= 2) {
				return sequence.length == 2 && sequence[0] > sequence[1]? sequence.reverse() : sequence; 
			}
			let [left, right] = [[], []];
			const pivot = sequence.pop();
			while(sequence.length) {
				const number = sequence.pop();
				(number >= pivot ? right : left).push(number);
			}
			return [...quickSort(left), pivot, ...quickSort(right)];
		}
		/**
		 * bubble sort a sequence
		 * @param {Array} [sequence] - sequence to sort
		 *
		 * @return {Array} [sorted sequence]
		 */
		function bubbleSort(sequence) {
			let sorted = false;
			while(!sorted) {
				sorted = true;
				for(let i = 1; i < sequence.length; i++) {
					if(sequence[i] < sequence[i - 1]) {
						[sequence[i], sequence[i - 1]] = [sequence[i - 1], sequence[i]];
						sorted = false;
					}
				}
			}
			return sequence;
		}
		/**
		 * insertion sort a sequence
		 * @param {Array} [sequence] - sequence to sort
		 *
		 * @return {Array} [sorted sequence] 
		 */
		function insertSort(sequence) {
			let sorted = [sequence.pop()];
			while(sequence.length) {
				const number = sequence.pop();
				if(number >= sorted[sorted.length - 1]) {
					sorted.push(number);
					continue;
				}
				for(let i = 0; i < sorted.length; i++) {
					if(number <= sorted[i]) {
						sorted.splice(i, 0, number);
						break;
					}
				}
			}
			return sorted;
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let sequence = [2, 31, 1, 25, 11, 26, 12, 11, 97, 15, 14];
		console.log(`%cSequence: ${sequence.join(" ")} -> `, "color : skyblue;");
		console.log(`%c(Quick Sort): ${quickSort(sequence.slice()).join(" ")}`, "color : orange;");
		console.log(`%cSequence: ${sequence.join(" ")} -> `, "color : skyblue;");
		console.log(`%c(Bubble Sort): ${bubbleSort(sequence.slice()).join(" ")}`, "color : orange;");
		console.log(`%cSequence: ${sequence.join(" ")} -> `, "color : skyblue;");
		console.log(`%c(Insertion Sort): ${insertSort(sequence.slice()).join(" ")}`, "color : orange;");
	});
})();	