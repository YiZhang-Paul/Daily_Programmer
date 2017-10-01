/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * record speed of windmill
		 * @param {int} [day] - day in week
		 * @param {int} [speed] - windmill speed
		 * @param {Array} [record] - current windmill record
		 *
		 * @return {Array} [updated record]
		 */
		function recordSpeed(day, speed, record = new Array(7).fill(0)) {
			const daysInWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
			record[daysInWeek.indexOf(day)] += speed;
			return record;
		}
		/**
		 * create data table
		 * @param {Array} [data] - all available data
		 *
		 * @return {Object} [data table]
		 */
		function getDataTable(data) {
			let table = {};
			data.forEach(entry => {
				const [id, day, speed] = entry.match(/\w+/g).map(item => isNaN(item) ? item : Number(item));
				table[id] = table[id] ? recordSpeed(day, speed, table[id]) : recordSpeed(day, speed);
			});
			return table;
		}
		/**
		 * retrieve data
		 * @param {String} [url] - data URL
		 *
		 * @return {Object} [Promise object]
		 */
		function getData(url) {
			return new Promise((resolve, reject) => {
				let xhttp = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
				xhttp.onreadystatechange = function() {
					if(this.readyState == 4 && this.status == 200) resolve(this.responseText.split("\n").map(data => data.trim()));
					else if(this.status == 404) reject("No Data Found.");
				};
				xhttp.open("GET", url, true);
				xhttp.send();
			});
		}
		getData("data.txt").then(data => {
			console.log(getDataTable(data));
		}).catch(error => {console.log(error);});
	});
})();		