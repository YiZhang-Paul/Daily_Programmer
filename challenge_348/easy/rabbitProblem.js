class RabbitTracker {
    constructor(males, females) {
        this._totalBorned = 0;
        this._maleTracker = this.createTracker(males);
        this._femaleTracker = this.createTracker(females);
        this._totalBorned += males + females;
    }
    get totalBorned() {
        return this._totalBorned;
    }
    get totalAlive() {
        let alive = 0;
        [this._maleTracker, this._femaleTracker].forEach(tracker => {
            tracker.forEach(months => {
                alive += this.sum(months);
            });
        });
        return alive;
    }
    get totalDeath() {
        return this.totalBorned - this.totalAlive;
    }
    sum(array) {
        return array.reduce((total, current) => total + current, 0);
    }
    createTracker(rabbits) {
        let tracker = new Map();
        for (let i = 0; i < 8; i++) {
            tracker.set(i, new Array(12).fill(0));
        }
        tracker.get(0)[2] = rabbits;
        return tracker;
    }
    isFertile(month, year) {
        return year >= 1 ? true : month >= 4;
    }
    getOffspring() {
        let offspring = 0;
        this._femaleTracker.forEach((months, year) => {
            for (let i = 0; i < months.length; i++) {
                if (this.isFertile(i, year)) {
                    offspring += months[i] * 14;
                }
            }
        });
        return offspring;
    }
    trackOffspring() {
        const offspring = this.getOffspring();
        this._totalBorned += offspring;
        this._maleTracker.get(0).unshift(offspring / 14 * 5);
        this._femaleTracker.get(0).unshift(offspring / 14 * 9);
    }
    trackDeath(tracker) {
        tracker.get(tracker.size - 1).pop();
    }
    trackAge() {
        [this._maleTracker, this._femaleTracker].forEach(tracker => {
            this.trackDeath(tracker);
            tracker.forEach((months, year) => {
                if (tracker.has(year + 1)) {
                    tracker.get(year + 1).unshift(months.pop());
                }
            });
        });
    }
    trackMonth() {
        this.trackOffspring();
        this.trackAge();
    }
}
function checkDominate(males, females, goal) {
    let tracker = new RabbitTracker(males, females);
    let months = 0;
    while (tracker.totalAlive < goal) {
        tracker.trackMonth();
        months++;
    }
    return [months, tracker.totalDeath];
}
function showResult(results) {
    console.log(`%cIt Takes %c${results[0]} %cMonths to Dominate Earth; %c${results[1]} %cRabbits Died in the Process.`, "color : violet", "color : yellow", "color : violet", "color : yellow", "color : violet");
}
//challenge & bonus input
console.log(`%cChallenge & Bonus `, "color : red;");
showResult(checkDominate(2, 4, 1000000000));
showResult(checkDominate(2, 4, 15000000000));
//# sourceMappingURL=rabbitProblem.js.map