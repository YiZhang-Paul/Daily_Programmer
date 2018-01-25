class RabbitTracker {

    private _totalBorned: number = 0;

    public tracker: Map<number, number[]>;

    constructor() {

        this.tracker = this.createTracker();
    }

    get totalBorned(): number {

        return this._totalBorned;
    }

    get totalAlive(): number {

        return 1;
    }

    createTracker(): Map<number, number[]> {

        let tracker = new Map<number, number[]>();

        for(let i = 0; i < 8; i++) {

            tracker.set(i, new Array<number>(12).fill(0));
        }

        return tracker;
    }
}

let tracker = new RabbitTracker();