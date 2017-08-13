/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * elevator class
		 * @param {Object} [coordinator] - elevator coordinator
		 * @param {String} [id] - elevator ID
		 * @param {int} [capacity] - elevator capacity
		 * @param {int} [speed] - movement speed
		 * @param {int} [curFloor] - current floor
		 */
		class Elevator {
			constructor(coordinator, id, capacity, speed, curFloor) {
				this.coordinator = coordinator;
				this.id = id;
				this.capacity = capacity;
				this.speed = speed;
				this.curFloor = curFloor;
				this.targets = [];
				this.direction = null;
				this.waitTime = 10;
				this.curWait = 0;
			}	
			/**
			 * check if elevator is on a floor
			 *
			 * @return {boolean} [test result]
			 */
			onFloor() {
				return Number.parseInt(this.curFloor) == this.curFloor;
			}
			/**
			 * check current requests from passengers
			 * and determine if the elevator should stop
			 */
			checkStop() {

			}
			/**
			 * determine current moving direction
			 */
			changeDir() {
				if(this.targets.length) {
					this.direction = this.targets[0] > this.curFloor ? "up" : "down";
				} else if(this.coordinator.waitList.length) {
					let needPickUp = this.coordinator.waitList.filter(request => !this.coordinator.canPickUp(request));
					if(needPickUp.length) {
						let above = needPickUp.filter(request => request.floor >= this.curFloor).length;
						let below = needPickUp.filter(request => request.floor < this.curFloor).length;
						this.direction = above >= below ? "up" : "down";
					}
				} else if(this.curFloor != 6) {
					this.direction = this.curFloor < 6 ? "up" : "down"; 
				}
			}
			/**
			 * move elevator
			 */
			move() {
				this.direction = this.curFloor == 6 && !this.coordinator.waitList.length ? null : this.direction; 
				if(this.direction) {
					this.curFloor += (this.direction == "up" ? 1 : -1) * this.speed;
				} else if(++this.curWait == this.waitTime) {
					this.curWait = 0;
					this.changeDir();
				}
			}
			/**
			 * update current state of elevator 
			 */
			update() {
				if(this.onFloor()) {
					this.checkStop();
				}
				this.move();
			}
		}
		/**
		 * elevator coordinator class
		 * @param {Array} [specs] - elevator specs
		 */
		class Coordinator {
			constructor(specs) {
				this.elevators = specs.map(spec => new Elevator(this, ...spec));
				this.waitList = [];
			}
			/**
			 * check if a request can be fulfilled by an already moving elevator
			 * @param {Object} [request] - request to be fulfilled
			 * @param {Array} [elevators] - all available elevators
			 *
			 * @return {boolean} [test result]
			 */
			canPickUp(request, elevators = this.elevators) {
				let moving = elevators.filter(elevator => elevator.direction);
				return !moving.length ? false : moving.some(elevator => {
					if(elevator.direction == request.dir) {
						return request.dir == "up" ? elevator.curFloor <= request.floor : elevator.curFloor >= request.floor;
					}
					return false;
				});
			}
			/**
			 * update elevator states
			 */
			update() {
				this.elevators.forEach(elevator => {
					elevator.update();
				});
			}
		}
		/**
		 * passenger class
		 * @param {String} [id] - passenger ID
		 * @param {Array} [fromTo] - source floor and destination floor
		 * @param {Object} [coordinator] - elevator coordinator
		 */
		class Passenger {
			constructor(id, fromTo, coordinator) {
				this.id = id;
				this.allRides = [fromTo];
				this.coordinator = coordinator;
				this.onWait = false;
				this.requests = [];
				this.curTime = 0;
				this.curTarget = null;
			}
			/**
			 * request an elevator
			 * @param {Array} [request] - request information
			 */
			requestElevator(request) {
				this.coordinator.waitList.push({floor : request[0], dir : request[2]});
				this.curTarget = request[1];
				this.onWait = true;
			}
			/**
			 * update current state of passenger
			 */
			update() {
				if(this.allRides.length && this.allRides[0][0] == this.curTime) {
					this.requests.push(this.allRides.shift().slice(1));
				}
				if(this.requests.length && !this.onWait) {
					this.requestElevator(this.requests.shift());
				}
				this.curTime++;
			}
		}
		/**
		 * read and record schedules for all passengers
		 * @param {Array} [schedules] - all schedules
		 * @param {Object} [coordinator] - elevator coordinator
		 *
		 * @return {Object} [schedule records for all passengers]
		 */
		function recordSchedule(schedules, coordinator) {
			let passengers = new Map();
			schedules.forEach(schedule => {
				schedule.push(schedule[2] > schedule[3] ? "down" : "up");
				if(passengers.has(schedule[0])) {
					passengers.get(schedule[0]).allRides.push(schedule.slice(1));
				} else {
					passengers.set(schedule[0], new Passenger(schedule[0], schedule.slice(1), coordinator));
				}
			});
			return passengers;
		}
		/**
		 * simulate elevators
		 * @param {Array} [specs] - elevator specifications
		 * @param {Array} [schedules] - elevator schedules
		 *
		 * @return {int} [time spent to fulfill all passenger requests]
		 */
		function simulateElevator(specs, schedules) {
			let coordinator = new Coordinator(specs);
			let passengers = recordSchedule(schedules, coordinator);
			console.log(coordinator, passengers);
			let test = passengers.get("R1");
			//while(test.allRides.length || test.requests.length) {
			//  coordinator.update();
			//	test.update();
			//}
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
			simulateElevator(carSpecs, schedules);
		}).catch(error => {console.log(error);});
	});
})();		