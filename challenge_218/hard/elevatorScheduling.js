/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * passenger class
		 * @param {String} [id] - passenger identifier
		 * @param {String} [curTime] - current time
		 * @param {String} [source] - source floor
		 * @param {String} [destination] - destination floor
		 */
		class Passenger {
			constructor(id, curTime, source, destination) {
				this.id = id;
				this.curTime = Number(curTime);
				this.source = Number(source);
				this.destination = Number(destination);
				this.curFloor = this.source;
			}
		}
		/**
		 * elevator class
		 * @param {String} [id] - elevator identifier
		 * @param {String} [capacity] - elevator capacity
		 * @param {String} [speed] - movement speed
		 * @param {String} [curFloor] - current floor
		 */
		class Elevator {
			constructor(id, capacity, speed, curFloor) {
				this.id = id;
				this.capacity = Number(capacity);
				this.speed = Number(speed);
				this.curFloor = Number(curFloor);
			}
		}
		/**
		 * manager class
		 * @param {Array} [info] - elevator specs and schedules
		 */
		class Manager {
			constructor(info) {
				this.cars = info.slice(1, 1 + Number(info[0])).map(spec => new Elevator(...spec.split(" ")));
				this.schedules = info.slice(-Number(info[Number(info[0]) + 1]));
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
			let manager = new Manager(result);
		}).catch(error => {console.log(error);});
	});
})();		