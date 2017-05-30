/**
 * codes for challenge No.310[Easy]
 */
/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * generate random kid list for every kid in the class
		 * @param String, int
		 *
		 * list    : list cotaining all kid names
		 * numKids : total number of kids on each list
		 *
		 * returns array []
		 */
		function makeAllList(list, numKids) {
			/**
			 * generate a random list of kid names
			 */
			function makeList(availableKids, numKids) {
				//pick random kids for the list and remove selected kid name from available names
				for(var kidList = [], i = 0; i < numKids; i++) {
					kidList.push(availableKids.splice(Math.floor(Math.random() * availableKids.length), 1)[0]);
				}
				//return both unsorted and sorted list
				return [kidList, kidList.slice().sort()];
			} 
			/**
			 * check if identical list is generated
			 */
			function checkIdentical(kidList, allKidList) {
				var testList = kidList.join("");
				//check if the sorted kid list is identical to any sorted list from all kid lists
				return allKidList.length > 0 ? allKidList.findIndex(a => a.join("") == testList) + 1 : false;
			}
			//all generated kid lists
			var allSortedList = [], allShuffledList = [];
			//store all kids in an array and make list for every kid
			var allKids = list.split(";").sort();
			allKids.forEach(kid => {
				let availableKids = allKids.filter(a => a != kid);
				let shuffledList, sortedList;
				//generate kid lists and make every list unique
				do {
					[shuffledList, sortedList] = makeList(availableKids.slice(), numKids);
				} while(checkIdentical(sortedList, allSortedList));
				//store sorted list for further comparison
				allSortedList.push(sortedList);
				//store shuffled lists with intended kid's name added
				allShuffledList.push([kid, ...shuffledList]);
			}); 
			//return all shuffled lists
			return allShuffledList;
		}
		/**
		 * test function
		 */
		var list, allLists;
		//input list 1 containing all kid names
		list = "Rebbeca Gann;Latosha Caraveo;Jim Bench;Carmelina Biles;Oda Wilhite;Arletha Eason";	
		allLists = makeAllList(list, 3);
		allLists.forEach(a => {
			console.log(`For ${a[0]} -> ${a.slice(1).join("; ")}`);
		});
		//input list 2 containing all kid names
		list = "Rebbeca Gann;Latosha Caraveo;Jim Bench;Carmelina Biles;Oda Wilhite;Arletha Eason;Theresa Kaczorowski;Jane Cover;Melissa Wise;Jaime Plascencia;Sacha Pontes;Tarah Mccubbin;Pei Rall;Dixie Rosenblatt;Rosana Tavera;Ethyl Kingsley;Lesia Westray;Vina Goodpasture;Drema Radke;Grace Merritt;Lashay Mendenhall;Magali Samms;Tiffaney Thiry;Rikki Buckelew;Iris Tait;Janette Huskins;Donovan Tabor;Jeremy Montilla;Sena Sapien;Jennell Stiefel";
		allLists = makeAllList(list, 15);
		allLists.forEach(a => {
			console.log(`For ${a[0]} -> ${a.slice(1).join("; ")}`);
		});
	});
})();