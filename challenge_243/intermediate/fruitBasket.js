/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * create fruit table
		 * @param {String} [fruits] - fruit information
		 *
		 * @return {Object} [fruit table]
		 */
		function getFruitTable(fruits) {
			const table = new Map();
			fruits.split("\n").forEach(fruit => {
				const name = fruit.match(/[a-zA-Z\s]+/)[0].trim();
				const price = Number(fruit.match(/\d+.*\d$/)[0]);
				table.set(name, price);
			});
			return table;
		}
		/**
		 * find all combinations from a given list
		 * @param {int} [total] - total number of selections
		 * @param {Array} [list] - list to choose from
		 * @param {Array} [selection] - current selections
		 *
		 * @return {Array} [all combinations]
		 */
		function getCombination(total, list, selection = []) {
			if(selection.length == total || !list.length) {
				return selection.length == total ? [selection] : null;
			}
			const combination = [];
			for(let i = 0; i < list.length; i++) {
				const result = getCombination(total, [...list.slice(i + 1)], [...selection, list[i]]);
				if(Array.isArray(result)) {
					combination.push(...result);
				}
			}
			return combination;
		}
		/**
		 * find all combinations of fruits 
		 * @param {String} [fruits] - fruit information
		 *
		 * @return {Array} [all combination of fruits]
		 */
		function getFruitCombos(fruits) {
			const names = fruits.split("\n").map(fruit => fruit.match(/[a-zA-Z\s]+/)[0].trim());
			const combos = [];
			for(let i = 1; i <= names.length; i++) {
				combos.push(...getCombination(i, names));
			}
			return combos;
		}
		/**
		 * check if a fruit combination is valid
		 * @param {Array} [combo] - fruit combination
		 * @param {Object} [fruitTable] - fruit table
		 * @param {int} [budget] - total available budget
		 *
		 * @return {boolean} [test result]
		 */
		function isValidCombo(combo, fruitTable, budget) {
			return combo.reduce((acc, name) => acc + fruitTable.get(name), 0) <= budget;
		}
		/**
		 * sort fruit combo by prices in descending order
		 * @param {Array} [combo] - fruit combo to be sorted
		 * @param {Object} [fruitTable] - fruit table
		 *
		 * @return {Array} [sorted fruit combo]
		 */
		function sortCombo(combo, fruitTable) {
			return combo.slice().sort((a, b) => fruitTable.get(b) - fruitTable.get(a));
		}
		/**
		 * find solution with given fruit combo
		 * @param {Array} [combo] - fruit combo
		 * @param {Object} [fruitTable] - fruit table
		 * @param {int} [budget] - available budget
		 * @param {int} [cost] - current cost
		 * @param {Array} [selection] - current selection
		 *
		 * @return {Array} [all possible solutions for given fruit combo]
		 */
		function findSolution(combo, fruitTable, budget, cost = 0, selection = []) {
			if(cost >= budget) {
				return cost == budget ? [selection] : null;
			}
			const solution = [];
			for(let i = 0; i < combo.length; i++) {
				const result = findSolution(combo.slice(i), fruitTable, budget, cost + fruitTable.get(combo[i]), [...selection, combo[i]]);
				if(Array.isArray(result)) {
					solution.push(...result);
				}
			}
			return solution;
		}
		/**
		 * find all possible ways to buy fruit basket
		 * @param {String} [fruits] - fruit information
		 * @param {int} [budget] - available budget
		 *
		 * @return {Array} [all possible ways to buy fruit basket]
		 */
		function fillBasket(fruits, budget) {
			const fruitTable = getFruitTable(fruits);
			const solutions = [];
			getFruitCombos(fruits).forEach(combo => {
				if(isValidCombo(combo, fruitTable, budget)) {
					solutions.push(...findSolution(sortCombo(combo, fruitTable), fruitTable, budget));
				}
			});
			return solutions;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = `banana 32
								 kiwi 41
								 mango 97
								 papaya 254
								 pineapple 399`;
		let time = new Date().getTime();
		console.log(fillBasket(input, 500));
		console.log(new Date().getTime() - time + "ms");								 
	});
})();		