class RabbitTracker {
    constructor() {
        this._totalBorned = 0;
        this.tracker = this.createTracker();
    }
    get totalBorned() {
        return this._totalBorned;
    }
    get totalAlive() {
        return 1;
    }
    createTracker() {
        let tracker = new Map();
        for (let i = 0; i < 8; i++) {
            tracker.set(i, new Array(12).fill(0));
        }
        return tracker;
    }
}
let tracker = new RabbitTracker();
//# sourceMappingURL=rabbitProblem.js.map