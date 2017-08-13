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
				this.carrying = [];
				this.direction = null;
				this.waitTime = 5;
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
			 * check if a passenger can be picked up
			 * 
			 * @return {boolean} [test result]
			 */
			canPickUp() {
				if(this.carrying.length == this.capacity || (!this.carrying.length && !this.targets.length)) {
					return this.carrying.length ? false : true;
				}
				return this.coordinator.waitList.some(request => 
					request.floor == this.curFloor && request.dir == this.direction);
			}
			/**
			 * check if a passenger can be dropped off
			 *
			 * @return {boolean} [test result]
			 */
			canDropOff() {
				return this.targets.indexOf(this.curFloor) != -1;
			}
			/**
			 * pick up passengers
			 */
			pickUp() {
				let originDir = this.direction;
				this.direction = null;
				for(let i = this.coordinator.waitList.length - 1; i >= 0; i--) {
					if(this.carrying.length == this.capacity) {
						break;
					}
					let request = this.coordinator.waitList[i];
					if(request.floor == this.curFloor && (request.dir == originDir || !this.carrying.length)) {
						this.coordinator.passengers.get(request.id).getOn(this);
						this.coordinator.waitList.splice(i, 1);
					}
				}
			}
			/**
			 * drop off passengers
			 */
			dropOff() {
				this.direction = null;
				this.targets.splice(this.targets.indexOf(this.curFloor), 1);
				this.carrying.forEach(passenger => {
					if(passenger.curTarget == this.curFloor) {
						passenger.getOff(this);
					}
				});
			}
			/**
			 * check current requests from passengers
			 * and determine if the elevator should stop
			 */
			checkStop() {
				if(this.canPickUp()) {
					this.pickUp();
				}
				if(this.canDropOff()) {
					this.dropOff();
				}
			}
			/**
			 * determine moving direction
			 */
			nextDirection() {
				if(this.targets.length) {
					this.direction = this.targets[0] > this.curFloor ? "up" : "down";
				} else if(this.coordinator.waitList.length) {
					let needPickUp = this.coordinator.waitList.filter(request => !this.coordinator.canCover(request));
					if(needPickUp.length) {
						let idles = this.coordinator.idleCars();
						if(idles.length == 1 || this.coordinator.getFastest(idles).id == this.id) {
							let above = needPickUp.filter(request => request.floor >= this.curFloor).length;
							let below = needPickUp.filter(request => request.floor < this.curFloor).length;
							this.direction = above >= below ? "up" : "down";
							this.targets = Array.from(new Set(needPickUp.map(request => request.floor)));
						}
					}
				} else if(this.curFloor != 6) {
					this.direction = this.curFloor < 6 ? "up" : "down"; 
				}
			}
			/**
			 * move elevator
			 */
			move() {
				if(this.curFloor != 6 && !this.targets.length && !this.coordinator.waitList.length) {
					this.targets.push(6);
				}
				if(this.direction) {
					this.curFloor = Math.round((this.curFloor + (this.direction == "up" ? 1 : -1) * this.speed) * 10) / 10;
				} else if(++this.curWait == this.waitTime) {
					this.curWait = 0;
					this.nextDirection();
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
		 * @param {Array} [schedules] - all schedules
		 */
		class Coordinator {
			constructor(specs, schedules) {
				this.elevators = specs.map(spec => new Elevator(this, ...spec));
				this.passengers = this.recordSchedule(this, schedules);
				this.waitList = [];
				this.curTime = 0;
			}
			/**
			 * read and record schedules for all passengers
		 	 * @param {Object} [coordinator] - elevator coordinator
		   * @param {Array} [schedules] - all schedules
		   *
		   * @return {Object} [schedule records for all passengers]
			 */
			recordSchedule(coordinator, schedules) {
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
			 * get all moving elevators
			 *
			 * @return {Array} [all moving elevators]
			 */
			movingCars() {
				return this.elevators.filter(elevator => elevator.direction);
			}
			/**
			 * get all idle elevators
			 *
			 * @return {Array} [all idle elevators]
			 */
			idleCars() {
				return this.elevators.filter(elevator => !elevator.direction);
			}
			/**
			 * get fastest elevator 
			 * @param {Array} [elevators] - available elevators
			 *
			 * @return {Object} [fastest elevator]
			 */
			getFastest(elevators = this.elevators) {
				return elevators.reduce((acc, val) => acc.speed > val.speed ? acc : val);
			}
			/**
			 * check if a request can be fulfilled by an already moving elevator
			 * @param {Object} [request] - request to be fulfilled
			 *
			 * @return {boolean} [test result]
			 */
			canCover(request) {
				let moving = this.movingCars();
				return !moving.length ? false : moving.some(elevator => {
					if(elevator.carrying.length == elevator.capacity) {
						return false;
					}
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
				this.curTime++;
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
				this.curFloor = fromTo[1];
				this.curTarget = null;
				this.curDir = null;
			}
			/**
			 * request an elevator
			 * @param {Array} [request] - request information
			 */
			requestElevator(request) {
				this.coordinator.waitList.push({floor : request[0], dir : request[2], id : this.id});
				this.curTarget = request[1];
				this.curDir = request[2];
				this.onWait = true;
			}
			/**
			 * get on elevators
			 * @param {Object} [elevator] - elevator to get on
			 */
			getOn(elevator) {
				elevator.carrying.push(this);
				if(elevator.targets.indexOf(this.curTarget) == -1) {
					elevator.targets.push(this.curTarget);
				}
			}
			/**
			 * get off elevators
			 * @param {Object} [elevator] - elevator to get off
			 */
			getOff(elevator) {
				elevator.carrying.splice(elevator.carrying.indexOf(this), 1);
				this.onWait = false;
				this.curFloor = this.curTarget;
				this.curTarget = null;
				this.curDir = null;
				if(!this.allRides.length && !this.requests.length) {
					this.coordinator.passengers.delete(this.id);
				}
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
		 * simulate elevators
		 * @param {Array} [specs] - elevator specifications
		 * @param {Array} [schedules] - elevator schedules
		 *
		 * @return {int} [time spent to fulfill all passenger requests]
		 */
		function simulateElevator(specs, schedules) {
			let coordinator = new Coordinator(specs, schedules);
			let test = coordinator.passengers.get("R1");
			while(coordinator.passengers.size == 20) {
				coordinator.update();
				test.update();
			}
			console.log(coordinator);
			console.log(coordinator.curTime);
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