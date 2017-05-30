/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * shopping cart class
		 * @param array []
		 *
		 * promos : promotions for the tour
		 */
		class ShoppingCart {
			constructor(promos = []) {
				this.promos = promos;
				this.orders = [];
				this.totals = [];
			}
			/**
			 * add orders
			 * @param String
			 *
			 * order : orders containing tour IDS
			 */
			add(order) {
				this.orders.push(order);
			} 
			/**
			 * clear orders
			 */
			clear() {
				this.orders = [];
			} 
			/**
			 * calculate total cost for each order
			 */
			total() { 
				this.totals = [];
				this.orders.forEach(order => {
					let total = 0, discount = 0,
					category = this.categorize(order);
					//calculate total price for each order
					for(let id in category) {
						total += this.getPrice(id) * category[id];
					}
					//apply promotions
					if(this.promos.length > 0) {
						this.promos.forEach(promo => discount += promo(category));
					} 
					this.totals.push(`${order} = $${total - discount}.00`);
				});
			} 
			/**
			 * categorize orders base on total number of each item
			 * @param String
			 *
			 * order : order to be categorized
			 *
			 * returns obj {}
			 */
			categorize(order) {
				let category = {};
				//calculate total number of each order
				order.split(" ").forEach(id => {
					category[id] = category[id] ? category[id] + 1 : 1;
				});
				return category;
			}
			/**
			 * get price for a tour
			 * @param String
			 *
			 * id : tour ID  
			 *
			 * returns number
			 */
			getPrice(id) {
				return getPrice.call(this, id);
			} 
		} 
		/**
		 * get price from database
		 * @param String
		 *
		 * id : ID of the tour item
		 * 
		 * returns float
		 */
		function getPrice(id) {
			return Number(database[id].price.slice(1));
		} 
		/**
		 * promotion rules
		 * apply promotions and return discounted prices
		 * @param obj {}
		 *
		 * order : order to be processed
		 *
		 * returns float 
		 */
		let OHPromo = order =>
			order.OH ? Math.floor(order.OH / 3) * getPrice("OH") : 0;
		let BCPromo = order => 
			order.BC > 4 ? order.BC * 20 : 0; 
		let SKPromo = order =>
			order.SK ? Math.min(order.SK, (order.OH || 0)) * getPrice("SK") : 0;
		//mockup database for challenge
		var database = {
			OH : {name: "Opera house tour", price : "$300.00"},
			BC : {name: "Sydney Bridge Climb", price : "$110.00"},
			SK : {name: "Sydney Sky Tower", price : "$30.00"}
		};
		//promotions
		let promos = [OHPromo, BCPromo, SKPromo];
		/**
		 * default input
		 */
		//shopping cart
		let shoppingCart = new ShoppingCart(promos);
		//add input tours
		shoppingCart.add("OH OH OH BC");
		shoppingCart.add("OH SK");
		shoppingCart.add("BC BC BC BC BC OH");
		//calculate and display totals
		shoppingCart.total();
		shoppingCart.totals.forEach(total => {
			console.log(total);
		});
		/**
		 * challenge input
		 */
		shoppingCart.clear();
		shoppingCart.add("OH OH OH BC SK");
		shoppingCart.add("OH BC BC SK SK");
		shoppingCart.add("BC BC BC BC BC BC OH OH");
		shoppingCart.add("SK SK BC");
		//calculate and display totals
		shoppingCart.total();
		shoppingCart.totals.forEach(total => {
			console.log(total);
		});
	});
})();