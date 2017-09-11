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
					console.log(combo);
					//solutions.push(...findSolution(combo, fruitTable));
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
		console.log(fillBasket(input, 500));								 
	});
})();		