class RabbitTracker {
    constructor(males, females) {
        this._totalBorned = 0;
        this.maleTracker = this.createTracker(males);
        this.femaleTracker = this.createTracker(females);
        console.log(this.totalAlive);
    }
    get totalBorned() {
        return this._totalBorned;
    }
    get totalAlive() {
        let alive = 0;
        [this.maleTracker, this.femaleTracker].forEach(tracker => {
            tracker.forEach(months => {
                alive += this.sum(months);
            });
        });
        return alive;
    }
    sum(array) {
        return array.reduce((sum, current) => sum + current, 0);
    }
    createTracker(rabbits) {
        let tracker = new Map();
        for (let i = 0; i < 8; i++) {
            tracker.set(i, new Array(12).fill(0));
        }
        tracker.get(0)[2] = rabbits;
        return tracker;
    }
}
let tracker = new RabbitTracker(2, 4);
//# sourceMappingURL=rabbitProblem.js.map