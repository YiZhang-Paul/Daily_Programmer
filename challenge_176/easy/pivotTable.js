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
			const daysInWeek = {"Mon" : 0, "Tue" : 1, "Wed" : 2, "Thu" : 3, "Fri" : 4, "Sat" : 5, "Sun" : 6};
			record[daysInWeek[day]] += speed;
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
				const [id, day, speed] = entry.match(/\w+/g);
				table[id] = recordSpeed(day, Number(speed), table[id]);
			});
			return table;
		}
		/**
		 * display data in pivot table
		 * @param {Array} [data] - raw data
		 *
		 * @return {String} [pivot table]
		 */
		function makePivotTable(data) {
			let dataTable = getDataTable(data);
			let ids = Object.keys(dataTable).sort((a, b) => Number(a) - Number(b));
			const header = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].join("  ");
			return ids.reduce((acc, val) => {
				const record = dataTable[val].map(speed => " ".repeat(4 - String(speed).length) + speed);
				return acc + `${val} ${record.join(" ")}\n`;
			}, " ".repeat(String(ids[ids.length - 1]).length + 2) + header + "\n");
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
			console.log(makePivotTable(data));
		}).catch(error => {console.log(error);});
	});
})();		