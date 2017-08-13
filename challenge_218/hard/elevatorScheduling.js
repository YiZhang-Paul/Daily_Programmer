/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * elevator class
		 * @param {String} [id] - elevator ID
		 * @param {int} [capacity] - elevator capacity
		 * @param {int} [speed] - movement speed
		 * @param {int} [curFloor] - current floor
		 */
		class Elevator {
			constructor(id, capacity, speed, curFloor) {
				this.id = id;
				this.capacity = capacity;
				this.speed = speed;
				this.curFloor = curFloor;
			}
		}
		/**
		 * passenger class
		 * @param {String} [id] - passenger ID
		 * @param {Array} [fromTo] - source floor and destination floor
		 */
		class Passenger {
			constructor(id, fromTo) {
				this.id = id;
				this.rides = [fromTo];
			}
		}
		/**
		 * manager class
		 * @param {Array} [specs] - car specifications
		 * @param {Array} [schedules] - all schedules
		 */
		class Manager {
			constructor(specs, schedules) {
				this.cars = specs.map(spec => new Elevator(...spec));
				this.schedules = schedules;
				this.passengers = new Map();
				this.curTime = 0;
				this.run();
			}
			/**
			 * run elevators
			 */
			run() {
				while(this.schedules.length) {
					this.readSchedule();
					this.curTime++;
				}
			}
			/**
			 * read and record schedules 
			 */
			readSchedule() {
				while(this.schedules.length && this.curTime == this.schedules[0][1]) {
					let curRide = this.schedules.shift();
					if(this.passengers.has(curRide[0])) {
						this.passengers.get(curRide[0]).rides.push(curRide.slice(2));
					} else {
						this.passengers.set(curRide[0], new Passenger(curRide[0], curRide.slice(2)));
					}
				}
			}
		}
		/**
		 * retrieve schedules
		 * @param {String} [url] - schedule file URL
		 *
		 * @return {Object} [Promise object]
		 */
		function getSchedule(url) {
			return new Promise((resolve, reject) => {
				let xhttp = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
				xhttp.onreadystatechange = function() {
					if(this.readyState == 4 && this.status == 200) resolve(this.responseText.split("\n").map(line => line.trim()));
					if(this.status == 404) reject("Schedule Not Found."); 
				};
				xhttp.open("GET", url, true);
				xhttp.send();
			});
		}
		getSchedule("schedule.txt").then(result => {
			//challenge input
			console.log(`%cChallenge Input: `, "color : red;");
			let [totalCars, totalPassengers] = [Number(result[0]), Number(result[Number(result[0]) + 1])];
			let [carSpecs, schedules] = [result.slice(1, 1 + totalCars), result.slice(-totalPassengers)];
			carSpecs = carSpecs.map(spec => spec.split(" ").map((item, index) => index > 0 ? Number(item) : item));
			schedules = schedules.map(schedule => schedule.split(" ").map((item, index) => index > 0 ? Number(item) : item));
			let manager = new Manager(carSpecs, schedules);
		}).catch(error => {console.log(error);});
	});
})();		