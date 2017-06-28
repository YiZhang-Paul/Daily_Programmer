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
			arrangements = arrangements.filter(arrangement => {
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
			return arrangements;
		}
		let guestList = getSpouseList(3);
		let arrangements = permuteGuest(guestList, guestList.length); 
		console.log(filterAdjacent(arrangements));
	});
})();				