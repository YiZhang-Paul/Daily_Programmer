/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {	
		/**
		 * generate list of spouses
		 * @param int
		 *
		 * pair : total pair of spouses
		 *
		 * returns array []
		 */
		function getSpouseList(pair) {
			let spouses = "";
			for(let i = "a".charCodeAt(); i < "a".charCodeAt() + pair; i++) {
				spouses += String.fromCharCode(i) + String.fromCharCode(i).toUpperCase();
			}
			return spouses.split("");
		} 
		/**
		 * get permutation of all seatings
		 * @param array [], int, String
		 *
		 * list       : list of all guests
		 * totalGuest : total number of guests
		 * curPermute : current permutation 
		 *
		 * returns array []
		 */
		function permuteGuest(list, totalGuest, curPermute = "") {
			if(curPermute.length == totalGuest) {
				return curPermute;
			}
			let permutation = [];
			for(let i = 0; i < list.length; i++) {
				let curGuest = list[i];
				let otherGuest = [...list.slice(0, i), ...list.slice(i + 1)];
				let result = permuteGuest(otherGuest, totalGuest, curPermute + curGuest);
				if(Array.isArray(result)) {
					permutation.push(...result);
				} else {
					permutation.push(result);
				}
			}
			return permutation;
		} 
		/**
		 * remove arrangements where spouses 
		 * sit next to each other
		 * @param array []
		 *
		 * arrangements : list of all arrangements
		 *
		 * returns array []
		 */
		function filterAdjacent(arrangements) {
			return arrangements.filter(arrangement => {
				arrangement = arrangement.toLowerCase();
				if(arrangement[0] == arrangement[arrangement.length - 1]) {
					return false;
				}
				for(let i = 0; i < arrangement.length - 1; i++) {
					if(arrangement[i] == arrangement[i + 1]) {
						return false;
					}
				}
				return true;
			});
		}
		/**
		 * remove duplicate arragements
		 * @param array []
		 *
		 * arrangements : list of all arrangments
		 *
		 * returns array []
		 */
		function removeDuplicate(arrangements) {
			let flags = new Array(arrangements.length).fill(0);
			return arrangements.filter((arrangement, index, array) => {
				for(let i = 1; i < arrangement.length; i++) {
					let duplicate = array.indexOf(arrangement.slice(i) + arrangement.slice(0, i));
					if(duplicate != -1 && !flags[duplicate]) {
						flags[index] = 1;
						return false;
					}
				}
				return true;
			});
		} 
		/**
		 * find spouses that have yet taken seats
		 * @param String, array []
		 *
		 * seated : guests already taken seat
		 * list   : list of all guests
		 *
		 * returns array []
		 */
		function filterSeated(seated, list) {
			seated = new Set(seated.split("").filter(guest => guest != "_"));
			return list.filter(guest => !seated.has(guest));
		} 
		/**
		 * insert unseated guests
		 * @param String, array []
		 *
		 * seated       : guests already taken seat
		 * arrangements : arrangements for unseated guests
		 *
		 * returns array []
		 */
		function insertUnseated(seated, arrangements) {
			return seated === "" ? arrangements : arrangements.map(arrangement => {
				let emptySeat = 0, newArrangement = seated.split("");
				for(let i = 0; i < newArrangement.length; i++) {
					if(newArrangement[i] == "_") {
						newArrangement[i] = arrangement[emptySeat++];
					}
				}
				return newArrangement.join("");
			});
		}
		/**
		 * get acceptable arrangements
		 * @param int, String
		 *
		 * pair : total pair of spouses
		 * seated : guests already taken seat
		 *
		 * returns int
		 */ 
		function minArrangment(pair, seated = "") {
			//get unseated spouse list
			let list = filterSeated(seated, getSpouseList(pair));
			//get all arrangements
			let arrangements = insertUnseated(seated, permuteGuest(list, list.length));
			//filter adjacent seating and duplicates
			return removeDuplicate(filterAdjacent(arrangements)).length;
		} 
		//default input
		console.log("Default Input: ");
		let input = 1;
		let result = minArrangment(input);
		console.log(`Couples: ${input} -> Permutations: ${result}`);
		input = 2;
		result = minArrangment(input);
		console.log(`Couples: ${input} -> Permutations: ${result}`);
		input = 3;
		result = minArrangment(input);
		console.log(`Couples: ${input} -> Permutations: ${result}`);
		input = 4;
		result = minArrangment(input);
		console.log(`Couples: ${input} -> Permutations: ${result}`);
		//bonus input
		console.log("Bonus Input: ");
		input = [1, "ab_B"];
		result = minArrangment(...input);
		console.log(`Couples: ${input[0]}, Layout: ${input[1]} -> Permutations: ${result}`);
		input = [4, "a_b__B__"];
		result = minArrangment(...input);
		console.log(`Couples: ${input[0]}, Layout: ${input[1]} -> Permutations: ${result}`);
	});
})();			