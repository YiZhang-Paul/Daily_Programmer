/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * driver class
		 * @param {int} [num] - route number
		 * @param {Array} [route] - current bus route
		 */
		class Driver {
			constructor(num, route) {
				this.num = num;
				this.route = route;
				this.minWaited = 0;
				this.gossip = new Set([this.num]);
			}
			/**
			 * retrieve current stop at which 
			 * the bus is located
			 * @param {int} [minute] - current minute of working time
			 *
			 * @return {int} [current stop]
			 */
			getStop(minute) {
				return this.route[(minute - this.minWaited) % this.route.length];
			}
		}
		/**
		 * retrieve current stop of 
		 * all drivers at a given minute
		 * @param {Array} [drivers] - all drivers
		 * @param {int} [minute] - current working minute
		 *
		 * @return {Object} [all drivers sorted by current stop]
		 */
		function getCurStops(drivers, minute) {
			return drivers.reduce((acc, val) => {
				let curStop = val.getStop(minute);
				acc[curStop] = acc[curStop] ? [...acc[curStop], val] : [val];
				return acc;
			}, {});
		}
		/**
		 * collect all gossips
		 * @param {Array} [drivers] - all drivers
		 *
		 * @return {Object} [gossip collector]
		 */
		function collectGossip(drivers) {
			let collector = new Set();
			drivers.forEach(driver => {
				driver.gossip.forEach(num => {
					collector.add(num);
				});
			});
			return collector;
		}
		/**
		 * update gossips to all drivers
		 * @param {Array} [drivers] - all drivers
		 * @param {Object} [gossips] - gossips to be updated
		 */
		function updateGossip(drivers, gossips) {
			let allGossip = Array.from(gossips);
			drivers.forEach(driver => {
				driver.gossip = new Set(allGossip);
			});
		}
		/**
		 * exchange gossips
		 * @param {Object} [location] - all drivers sorted by current stop
		 */
		function exchangeGossip(location) {
			for(let stop in location) {
				updateGossip(location[stop], collectGossip(location[stop]));
			}
		}
		/**
		 * check if every bus driver knows all the gossips
		 * @param {Array} [drivers] - all drivers
		 *
		 * @return {boolean} [test result]
		 */
		function knowAllGossip(drivers) {
			return drivers.every(driver => driver.gossip.size == drivers.length);
		}
		/**
		 * check if there exist a new gossip for drivers to know
		 * @param {Object} [gossips] - all available gossips
		 * @param {Array} [drivers] - all drivers
		 *
		 * @return {boolean} [test result]
		 */
		function hasNewGossip(gossips, drivers) {
			let allGossip = Array.from(gossips);
			return drivers.some(driver => allGossip.some(info => !driver.gossip.has(info)));
		}
		/**
		 * check how many stops are needed to 
		 * have all drivers know all the gossips
		 * @param {String} [routes] - routes for all drivers
		 *
		 * @return {int} [number of stops needed]
		 */
		function gossipStops(routes) {
			let drivers = routes.split("\n").map((line, index) => new Driver(index + 1, line.trim().split(" ")));
			for(let i = 0; i <= 480; i++) {
				exchangeGossip(getCurStops(drivers, i));
				if(knowAllGossip(drivers)) {
					return i + 1;
				}
			}
			return "Never";
		}
		/**
		 * exchange gossip with wait
		 * @param {Object} [location] - all drivers sorted by current stop
		 */
		function exchangeGossipWithWait(location) {
			for(let stop in location) {
				if(location[stop].length > 1) {
					let allGossip = collectGossip(location[stop]);
					if(hasNewGossip(allGossip, location[stop])) {
						updateGossip(location[stop], allGossip);
						for(let i = 0; i < location[stop].length; i++) {
							location[stop][i].minWaited++;
						}
					}
				}
			}
		}
		/**
		 * check how mnay stops are needed to have 
		 * all drivers know all the gossips if they have to wait
		 * @param {String} [routes] - routes for all drivers
		 *
		 * @return {int} [number of stops needed]
		 */
		function gossipStopsWithWait(routes) {
			let drivers = routes.split("\n").map((line, index) => new Driver(index + 1, line.trim().split(" ")));
			for(let i = 0; i <= 480; i++) {
				exchangeGossipWithWait(getCurStops(drivers, i));
				if(knowAllGossip(drivers)) {
					return i + 1;
				}
			}
			return "Never";
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = `3 1 2 3
                 3 2 3 1 
                 4 2 3 4 5`;
    console.log(`Routes: %c\n${input.split("\n").map(line => line.trim()).join("\n")}`, "color : orange;");
		console.log(`Total Stops Needed: %c${gossipStops(input)}`, "color : orange;");
		input = `2 1 2
					   5 2 8`;
    console.log(`Routes: %c\n${input.split("\n").map(line => line.trim()).join("\n")}`, "color : orange;");
		console.log(`Total Stops Needed: %c${gossipStops(input)}`, "color : orange;");					   
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = `7 11 2 2 4 8 2 2
             3 0 11 8
             5 11 8 10 3 11
             5 9 2 5 0 3
             7 4 8 2 8 1 0 5
             3 6 8 9
             4 2 11 3 3`;
		console.log(`Routes: %c\n${input.split("\n").map(line => line.trim()).join("\n")}`, "color : orange;");
		console.log(`Total Stops Needed: %c${gossipStops(input)}`, "color : orange;");
		input = `12 23 15 2 8 20 21 3 23 3 27 20 0
             21 14 8 20 10 0 23 3 24 23 0 19 14 12 10 9 12 12 11 6 27 5
             8 18 27 10 11 22 29 23 14
             13 7 14 1 9 14 16 12 0 10 13 19 16 17
             24 25 21 4 6 19 1 3 26 11 22 28 14 14 27 7 20 8 7 4 1 8 10 18 21
             13 20 26 22 6 5 6 23 26 2 21 16 26 24
             6 7 17 2 22 23 21
             23 14 22 28 10 23 7 21 3 20 24 23 8 8 21 13 15 6 9 17 27 17 13 14
             23 13 1 15 5 16 7 26 22 29 17 3 14 16 16 18 6 10 3 14 10 17 27 25
             25 28 5 21 8 10 27 21 23 28 7 20 6 6 9 29 27 26 24 3 12 10 21 10 12 17
             26 22 26 13 10 19 3 15 2 3 25 29 25 19 19 24 1 26 22 10 17 19 28 11 22 2 13
             8 4 25 15 20 9 11 3 19
             24 29 4 17 2 0 8 19 11 28 13 4 16 5 15 25 16 5 6 1 0 19 7 4 6
             16 25 15 17 20 27 1 11 1 18 14 23 27 25 26 17 1`;
    console.log(`Routes: %c\n${input.split("\n").map(line => line.trim()).join("\n")}`, "color : orange;");
		console.log(`Total Stops Needed: %c${gossipStops(input)}`, "color : orange;");     
		//bonus input
		console.log(`%cBonus Input: `, "color : red;");
		input = `3 1 2 3
             3 2 3 1 
             4 2 3 4 5`;
    console.log(`Routes: %c\n${input.split("\n").map(line => line.trim()).join("\n")}`, "color : orange;");
		console.log(`Total Stops Needed: %c${gossipStopsWithWait(input)}`, "color : orange;");
		input = `2 1 2
					   5 2 8`;
    console.log(`Routes: %c\n${input.split("\n").map(line => line.trim()).join("\n")}`, "color : orange;");
		console.log(`Total Stops Needed: %c${gossipStopsWithWait(input)}`, "color : orange;");	
		input = `7 11 2 2 4 8 2 2
             3 0 11 8
             5 11 8 10 3 11
             5 9 2 5 0 3
             7 4 8 2 8 1 0 5
             3 6 8 9
             4 2 11 3 3`;
		console.log(`Routes: %c\n${input.split("\n").map(line => line.trim()).join("\n")}`, "color : orange;");
		console.log(`Total Stops Needed: %c${gossipStopsWithWait(input)}`, "color : orange;");
		input = `12 23 15 2 8 20 21 3 23 3 27 20 0
             21 14 8 20 10 0 23 3 24 23 0 19 14 12 10 9 12 12 11 6 27 5
             8 18 27 10 11 22 29 23 14
             13 7 14 1 9 14 16 12 0 10 13 19 16 17
             24 25 21 4 6 19 1 3 26 11 22 28 14 14 27 7 20 8 7 4 1 8 10 18 21
             13 20 26 22 6 5 6 23 26 2 21 16 26 24
             6 7 17 2 22 23 21
             23 14 22 28 10 23 7 21 3 20 24 23 8 8 21 13 15 6 9 17 27 17 13 14
             23 13 1 15 5 16 7 26 22 29 17 3 14 16 16 18 6 10 3 14 10 17 27 25
             25 28 5 21 8 10 27 21 23 28 7 20 6 6 9 29 27 26 24 3 12 10 21 10 12 17
             26 22 26 13 10 19 3 15 2 3 25 29 25 19 19 24 1 26 22 10 17 19 28 11 22 2 13
             8 4 25 15 20 9 11 3 19
             24 29 4 17 2 0 8 19 11 28 13 4 16 5 15 25 16 5 6 1 0 19 7 4 6
             16 25 15 17 20 27 1 11 1 18 14 23 27 25 26 17 1`;
    console.log(`Routes: %c\n${input.split("\n").map(line => line.trim()).join("\n")}`, "color : orange;");
		console.log(`Total Stops Needed: %c${gossipStopsWithWait(input)}`, "color : orange;");
	});
})();		