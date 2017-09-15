/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * to-do list class
		 */
		class ToDoList {
			constructor() {
				this.items = new Set();
			}
			/**
			 * add item
			 * @param {String} [item] - item to add 
			 */
			addItem(item) {
				if(this.items.has(item)) {
					console.log("Item Already Exist.");
					return;
				}
				this.items.add(item);
			}
			/**
			 * delete item
			 * @param {String} [item] - item to delete
			 */
			deleteItem(item) {
				if(!this.items.has(item)) {
					console.log("Item Does Not Exist.");
					return;
				}
				this.items.delete(item);
			}
			/**
			 * view item list
			 */
			viewList() {
				console.log(Array.from(this.items).join("\n"));
			}
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let list = new ToDoList();
		list.addItem('Take a shower');
		list.addItem('Go to work');
		list.viewList();
		list.addItem('Buy a new phone');
		list.deleteItem('Go to work');
		list.viewList();
	});
})();				